import request from 'supertest';
import App from '../server/app';
import { knex } from '../server/DB';
import { Film } from '../server/models/Film';
import { Status } from '../server/middlewares/helpers';
import { IUserEntity } from '../server/models/User';
import uuid from 'uuid';

describe('Films Controller', () => {
  let apiKey;
  beforeAll(async (done) => {
    const user: IUserEntity[] = await knex('public.user');
    apiKey = user[0].api_key;
    done();
  });

  test('success if api key is in query', async () => {
    const filmToCompare: Film[] = await knex('film')
      .select('*')
      .limit(1);

    const response = await request(App).get(`/api/v1/films?apiKey=${apiKey}`);
    const formattedResponse: Film[] = JSON.parse(response.text);
    expect(formattedResponse[0].id).toBe(filmToCompare[0].id);
  });
  test('get all films', async () => {
    const idsFromDB: { id: string }[] = await knex('film').select('id');
    const response = await request(App).get(`/api/v1/films?apiKey=${apiKey}`);
    const idsFromResponse: { id: string }[] = JSON.parse(response.text).map(({ id }) => ({ id }));
    expect(idsFromResponse).toStrictEqual(idsFromDB);
  });
  test('get film by id', async () => {
    const [filmFromDB]: { id: string }[] = await knex('film')
      .select('id')
      .limit(1);
    const response = await request(App).get(`/api/v1/films?id=${filmFromDB.id}&apiKey=${apiKey}`);
    const [filmFromResponse]: { id: string }[] = JSON.parse(response.text).map(({ id }) => ({ id }));
    expect(filmFromDB).toStrictEqual(filmFromResponse);
  });
  test('passing wrong id format != uuid', async () => {
    const response = await request(App).get(`/api/v1/films?id=123456&apiKey=${apiKey}`);
    const expectedMessage = { status: Status.Error, message: 'Invalid id' };
    const message = JSON.parse(response.text);
    expect(response.status).toEqual(400);
    expect(message).toStrictEqual(expectedMessage);
  });
  test('passing not existent id', async () => {
    const falseId = uuid();
    const response = await request(App).get(`/api/v1/films?id=${falseId}&apiKey=${apiKey}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify([]));
  });

  test('get film by name', async () => {
    const pattern: string = 'Clones';
    const [film]: Film[] = await knex('film').where('title', 'like', `%${pattern}%`);
    const response = await request(App).get(`/api/v1/films?name=${pattern}&apiKey=${apiKey}`);
    const [filmFromResponse]: Film[] = JSON.parse(response.text);
    expect(film.id).toBe(filmFromResponse.id);
  });
  test('get film with two parameters in query get just the first', async () => {
    const pattern: string = 'Clones';
    const [film]: Film[] = await knex('film').where('title', 'like', `%${pattern}%`);
    const response = await request(App).get(`/api/v1/films?id=${film.id}&name=${pattern}&apiKey=${apiKey}`);
    const [filmFromResponse]: Film[] = JSON.parse(response.text);
    expect(response.status).toBe(200);
    expect(film.id).toBe(filmFromResponse.id);
  });
  test('passing wrong format to name', async () => {
    const mock = jest.fn();
    const pattern = mock
      .mockReturnValueOnce(12345)
      .mockReturnValueOnce(uuid())
      .mockReturnValueOnce(null);
    const responses = await Promise.all(
      Array(3)
        .fill(0)
        .map(async (v) => await request(App).get(`/api/v1/films?name=${pattern()}&apiKey=${apiKey}`))
    );
    responses.forEach((rs) => {
      expect(rs.status).toBe(400);
    });
  });
});
