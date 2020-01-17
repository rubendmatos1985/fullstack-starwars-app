import { knex } from '../server/DB';
import { Film } from '../server/models/Film';
import request from 'supertest';
import App from '../server/app';
import { isEmpty } from 'ramda';

describe('Post vehicles in Films', () => {
  let apiKey: string;
  let notStoredVehiclesIds: string[];
  let targetFilm: Film;
  let expectedRedirectionPath;
  beforeAll(async (done) => {
    const [userApiKey]: { api_key: string }[] = await knex('user')
      .select('api_key')
      .limit(1);
    const vehiclesIds: string[] = await knex('vehicle')
      .select('id')
      .whereNotIn('id', function() {
        this.select('vehicle.id')
          .from('vehicle')
          .join('vehicles_in_films', 'vehicles_in_films.vehicle_id', 'vehicle.id')
          .join('film', 'film.id', 'vehicles_in_films.film_id');
      })
      .limit(3)
      .then((pl: { id: string }[]) => pl.map((p) => p.id));
    const [film] = await knex('film')
      .select('*')
      .limit(1);
    notStoredVehiclesIds = vehiclesIds;
    apiKey = userApiKey.api_key;
    targetFilm = film;
    expectedRedirectionPath = `/api/v1/films?id=${targetFilm.id}&apiKey=${apiKey}`;
    done();
  });
  test('Add new vehicles', async () => {
    const response = await request(App)
      .post(`/api/v1/films/add/items?id=${targetFilm.id}&apiKey=${apiKey}`)
      .send({ fieldName: 'vehicles', itemsIds: notStoredVehiclesIds });
    const storedVehiclesIds: string[] = await knex('vehicles_in_films')
      .select('vehicle_id')
      .where({ film_id: targetFilm.id })
      .whereIn('vehicle_id', notStoredVehiclesIds)
      .then((pl: { vehicle_id: string }[]) => pl.map(({ vehicle_id }) => vehicle_id));
    expect(response.status).toEqual(302);
    expect(response.text.split(' ')[3]).toBe(expectedRedirectionPath);
    expect(notStoredVehiclesIds).toStrictEqual(storedVehiclesIds);
  });
  test('Remove vehicles', async () => {
    const response = await request(App)
      .post(`/api/v1/films/delete/items?id=${targetFilm.id}&apiKey=${apiKey}`)
      .send({
        fieldName: 'vehicles',
        itemsIds: notStoredVehiclesIds
      });
    const storedvehiclesFromDB: string[] = await knex
      .select('vehicle_id')
      .from('vehicles_in_films')
      .where({ film_id: targetFilm.id })
      .whereIn('vehicle_id', notStoredVehiclesIds)
      .then((rs: { vehicle_id: string }[]) => rs.map(({ vehicle_id }) => vehicle_id));
    expect(isEmpty(storedvehiclesFromDB)).toBeTruthy();
    expect(response.text.split(' ')[3]).toBe(expectedRedirectionPath);
    expect(response.status).toBe(302);
  });
});
