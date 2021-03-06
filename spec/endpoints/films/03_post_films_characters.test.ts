import { knex } from '../../../server/DB/index';
import request from 'supertest';
import App from '../../../server/app';
import { IUserEntity } from '../../../server/models/User';
import { Film } from '../../../server/models/Film';
import { isEmpty } from 'ramda';

describe('Post Characters in Films: add and remvove', () => {
  let apiKey: string;
  let film: Film;
  let characters: string[];
  let expectedRedirectionPath: string;
  beforeAll(async (done) => {
    const [user]: IUserEntity[] = await knex('user').limit(1);
    const [dbFilm]: Film[] = await knex('film')
      .select('film.id')
      .limit(1);
    film = dbFilm;
    const dbCharacters: string[] = await knex
      .select('id')
      .from('people')
      .whereNotIn('id', function() {
        this.select('people.id')
          .from('people')
          .join('actors', 'people.id', 'actors.people_id')
          .join('film', 'actors.film_id', 'film.id')
          .where('film.id', film.id);
      })
      .limit(3)
      .then((data: { id: string }[]) => data.map((v) => v.id));

    apiKey = user.api_key;
    characters = dbCharacters;
    expectedRedirectionPath = `/api/v1/films?id=${film.id}&apiKey=${apiKey}`;
    done();
  });
  test('Add new characters', async () => {
    const response = await request(App)
      .post(`/api/v1/films/add/items?id=${film.id}&apiKey=${apiKey}`)
      .send({
        fieldName: 'characters',
        itemsIds: characters
      });
    const storedActorsFromDB: string[] = await knex
      .select('people_id')
      .from('actors')
      .where({ film_id: film.id })
      .whereIn('people_id', characters)
      .then((rs: { people_id: string }[]) => rs.map((v) => v.people_id));

    expect(storedActorsFromDB).toStrictEqual(characters);
    expect(response.text.split(' ')[3]).toBe(expectedRedirectionPath);
    expect(response.status).toBe(302);
  });

  test('Remove characters', async () => {
    const response = await request(App)
      .post(`/api/v1/films/delete/items?id=${film.id}&apiKey=${apiKey}`)
      .send({
        fieldName: 'characters',
        itemsIds: characters
      });
    const storedActorsFromDB: string[] = await knex
      .select('people_id')
      .from('actors')
      .where({ film_id: film.id })
      .whereIn('people_id', characters)
      .then((rs: { people_id: string }[]) => rs.map((v) => v.people_id));
    expect(isEmpty(storedActorsFromDB)).toBeTruthy();
    expect(response.text.split(' ')[3]).toBe(expectedRedirectionPath);
    expect(response.status).toBe(302);
  });
});
