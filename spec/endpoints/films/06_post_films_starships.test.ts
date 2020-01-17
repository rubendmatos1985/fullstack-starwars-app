import { Film } from '../../../server/models/Film';
import { knex } from '../../../server/DB';
import request from 'supertest';
import App from '../../../server/app';
import { isEmpty } from 'ramda';

describe('Post Starships in Films', () => {
  let apiKey: string;
  let notStoredStarshipsIds: string[];
  let targetFilm: Film;
  let expectedRedirectionPath;
  beforeAll(async (done) => {
    const [userApiKey]: { api_key: string }[] = await knex('user')
      .select('api_key')
      .limit(1);
    const starshipsIds: string[] = await knex('starship')
      .select('id')
      .whereNotIn('id', function() {
        this.select('starship.id')
          .from('starship')
          .join('starships_in_films', 'starships_in_films.starship_id', 'starship.id')
          .join('film', 'film.id', 'starships_in_films.film_id');
      })
      .limit(3)
      .then((pl: { id: string }[]) => {
        return pl.map((p) => p.id);
      });
    const [film] = await knex('film')
      .select('*')
      .limit(1);
    notStoredStarshipsIds = starshipsIds;
    apiKey = userApiKey.api_key;
    targetFilm = film;
    expectedRedirectionPath = `/api/v1/films?id=${targetFilm.id}&apiKey=${apiKey}`;
    done();
  });
  test('Add new starships', async () => {
    const response = await request(App)
      .post(`/api/v1/films/add/items?id=${targetFilm.id}&apiKey=${apiKey}`)
      .send({ fieldName: 'starships', itemsIds: notStoredStarshipsIds });
    const storedStarshipsIds: string[] = await knex('starships_in_films')
      .select('starship_id')
      .where({ film_id: targetFilm.id })
      .whereIn('starship_id', notStoredStarshipsIds)
      .then((pl: { starship_id: string }[]) => pl.map(({ starship_id }) => starship_id));
    expect(response.status).toEqual(302);
    expect(response.text.split(' ')[3]).toBe(expectedRedirectionPath);
    expect(notStoredStarshipsIds).toStrictEqual(storedStarshipsIds);
  });
  test('Remove planets', async () => {
    const response = await request(App)
      .post(`/api/v1/films/delete/items?id=${targetFilm.id}&apiKey=${apiKey}`)
      .send({
        fieldName: 'starships',
        itemsIds: notStoredStarshipsIds
      });
    const storedStarshipsFromDB: string[] = await knex
      .select('starship_id')
      .from('starships_in_films')
      .where({ film_id: targetFilm.id })
      .whereIn('starship_id', notStoredStarshipsIds)
      .then((rs: { planet_id: string }[]) => rs.map(({ planet_id }) => planet_id));
    expect(isEmpty(storedStarshipsFromDB)).toBeTruthy();
    expect(response.text.split(' ')[3]).toBe(expectedRedirectionPath);
    expect(response.status).toBe(302);
  });
});
