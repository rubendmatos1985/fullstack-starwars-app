import { knex } from '../server/DB';
import request from 'supertest';
import App from '../server/app';
import { Film } from '../server/models/Film';
import { isEmpty } from 'ramda';
describe('Post Planets in Films', () => {
  let apiKey: string;
  let notStoredPlanetsIds: string[];
  let targetFilm: Film;
  let expectedRedirectionPath;
  beforeAll(async (done) => {
    const [userApiKey]: { api_key: string }[] = await knex('user')
      .select('api_key')
      .limit(1);
    const planetsIds: string[] = await knex('planet')
      .select('id')
      .whereNotIn('id', function() {
        this.select('planet.id')
          .from('planet')
          .join('planets_in_films', 'planets_in_films.planet_id', 'planet.id')
          .join('film', 'film.id', 'planets_in_films.film_id');
      })
      .limit(3)
      .then((pl: { id: string }[]) => pl.map((p) => p.id));
    const [film] = await knex('film')
      .select('*')
      .limit(1);
    notStoredPlanetsIds = planetsIds;
    apiKey = userApiKey.api_key;
    targetFilm = film;
    expectedRedirectionPath = `/api/v1/films?id=${targetFilm.id}&apiKey=${apiKey}`;
    done();
  });
  test('Add new planets', async () => {
    const response = await request(App)
      .post(`/api/v1/films/add?id=${targetFilm.id}&apiKey=${apiKey}`)
      .send({ fieldName: 'planets', itemsIds: notStoredPlanetsIds });
    const storedPlanetsIds: string[] = await knex('planets_in_films')
      .select('planet_id')
      .where({ film_id: targetFilm.id })
      .whereIn('planet_id', notStoredPlanetsIds)
      .then((pl: { planet_id: string }[]) => pl.map(({ planet_id }) => planet_id));
    expect(response.status).toEqual(302);
    expect(response.text.split(' ')[3]).toBe(expectedRedirectionPath);
    expect(notStoredPlanetsIds).toStrictEqual(storedPlanetsIds);
  });
  test('Remove planets', async () => {
    const response = await request(App)
      .post(`/api/v1/films/delete/items?id=${targetFilm.id}&apiKey=${apiKey}`)
      .send({
        fieldName: 'planets',
        itemsIds: notStoredPlanetsIds
      });
    const storedPlanetsFromDB: string[] = await knex
      .select('planet_id')
      .from('planets_in_films')
      .where({ film_id: targetFilm.id })
      .whereIn('planet_id', notStoredPlanetsIds)
      .then((rs: { planet_id: string }[]) => rs.map(({ planet_id }) => planet_id));
    expect(isEmpty(storedPlanetsFromDB)).toBeTruthy();
    expect(response.text.split(' ')[3]).toBe(expectedRedirectionPath);
    expect(response.status).toBe(302);
  });
});
