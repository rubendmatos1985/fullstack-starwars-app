import request from 'supertest';
import App from '../server/app';
import FilmController from '../server/Controllers/FilmsController';
import { IDBResponse, knex } from '../server/DB';
import { Film } from '../server/models/Film';
import { Status } from '../server/middlewares/helpers';
import { IUserEntity } from '../server/models/User';

describe('Films Controller', () => {
  let apiKey;
  beforeAll(async (done) => {
    const user: IUserEntity[] = await knex('public.user');
    apiKey = user[0].api_key;
    done();
  });
  test('fail if api key is not in query', async () => {
    const response = await request(App).get('/api/v1/films');
    const formattedResponse = JSON.parse(response.text);
    expect(formattedResponse.status).toBe(Status.Error);
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
    const idsFromResponse: { id: string }[] = JSON.parse(
      response.text
    ).map(({ id }) => ({ id }));
    expect(idsFromResponse).toStrictEqual(idsFromDB);
  });
  test('get film by id', async () => {
    const filmFromDB: Film[] = await knex('film')
      .select('id')
      .limit(1);
    const response = await request(App).get(
      `/api/v1/films?id=${filmFromDB[0].id}&apiKey=${apiKey}`
    );
    const filmFromResponse:{id: string}[] = JSON.parse(response.text).map(({ id }) => ({ id }));
    expect(filmFromDB[0]).toStrictEqual(filmFromResponse[0]);
  });
  test('not crash if id is not uuid', async ()=>{
    const response = await request(App).get(`/api/v1/films?id=123456&apiKey=${apiKey}`)
    const expectedMessage = { status: Status.Error, message: 'Invalid id' }
    const message =  JSON.parse(response.text)
    expect(message).toStrictEqual(expectedMessage)
  })
});
