import { knex, IDBResponse } from '../server/DB';
import request from 'supertest';
import App from '../server/app';
import { Status } from '../server/middlewares/helpers';
import { Authentication } from '../server/middlewares/authentication';
import { IPeople } from '../server/models/People';
import { IPeopleViewModel } from '../server/models/ViewModels/PeopleViewModel';
import { Validation } from '../server/middlewares/validation';
import uuid from 'uuid';

describe('People Controller', () => {
  let apiKey: string;
  beforeAll(async (done) => {
    const [objWithKey]: { api_key: string }[] = await knex('user')
      .select('api_key')
      .limit(1);
    apiKey = objWithKey.api_key;
    done();
  });
  test('fail if api key is not in query', async () => {
    const response = await request(App).get('/api/v1/people');
    const url: URL = new URL(JSON.parse(JSON.stringify(response)).req.url);
    expect(JSON.parse(response.text)).toStrictEqual({
      status: Status.Error,
      message: Authentication.ErrorMessages.ApiKey.NotProvided(url.host)
    });
  });
  test('testing api key query', async () => {
    const response = await request(App).get(`/api/v1/people?apiKey=${apiKey}`);
    expect(response.status).toEqual(200);
  });
  test('request all people', async () => {
    const response = await request(App).get(`/api/v1/people?apiKey=${apiKey}`);
    const people: string[] = (JSON.parse(response.text) as IDBResponse<IPeopleViewModel[]>).message.map(
      (p) => p.id
    );
    const peopleFromDB: string[] = await knex('people')
      .select('id')
      .then((rs: { id: string }[]) => rs.map((v) => v.id));
    expect(response.status).toEqual(200);
    expect(people).toStrictEqual(peopleFromDB);
  });
  test('get people by id', async () => {
    const [dbPeople]: IPeople[] = await knex('people')
      .select('*')
      .limit(1);
    const response = await request(App).get(`/api/v1/people?id=${dbPeople.id}&apiKey=${apiKey}`);
    const [peopleFromResponse]: IPeopleViewModel[] = JSON.parse(response.text) as IPeopleViewModel[];
    expect(response.status).toEqual(200);
    expect(dbPeople.id).toBe(peopleFromResponse.id);
  });
  test('passing wrong id format !== uuid', async () => {
    const mock = jest.fn();
    const wrongId = mock
      .mockReturnValueOnce(1232345)
      .mockReturnValueOnce(null)
      .mockReturnValueOnce('qwfasdfasdg');
    const [resNums, resNull, resString] = await Promise.all(
      Array(3)
        .fill(0)
        .map(async (v) => await request(App).get(`/api/v1/people?id=${wrongId()}&apiKey=${apiKey}`))
    );
    const rNums = JSON.parse(resNums.text);
    const rNull = JSON.parse(resNull.text);
    const rString = JSON.parse(resString.text);

    [resNums, resNull, resString].forEach((res) => expect(res.status).toEqual(400));
    [rNums, rNull, rString].forEach((r) => {
      expect(r.status).toEqual(Status.Error);
      expect(r.message).toStrictEqual(Validation.ErrorMessages.Query.InvalidIdFormat);
    });
  });
  test('passing not existent id', async () => {
    const falseId = uuid();
    const response = await request(App).get(`/api/v1/people?id=${falseId}&apiKey=${apiKey}`);
    expect(response.status).toBe(200);
    expect(response.text).toBe(JSON.stringify([]));
  });
  test('get people by name', async () => {
    const [pattern]: string[] = await knex('people')
      .select('name')
      .limit(1)
      .then((p: { name: string }[]) => p.map((v) => v.name));
    const [people]: IPeople[] = await knex('people').where('name', 'like', `%${pattern}%`);
    const response = await request(App).get(`/api/v1/people?name=${pattern}&apiKey=${apiKey}`);
    const {
      status,
      message: [peopleFromResponse]
    } = <IDBResponse<IPeopleViewModel[]>>JSON.parse(response.text);
    expect(response.status).toEqual(200);
    expect(status).toEqual(Status.Successfull);
    expect(people.id).toBe(peopleFromResponse.id);
    expect(people.name).toBe(peopleFromResponse.name);
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
        .map(async (v) => await request(App).get(`/api/v1/people?name=${pattern()}&apiKey=${apiKey}`))
    );
    responses.forEach((rs) => {
      expect(rs.status).toBe(400);
    });
  });
});
