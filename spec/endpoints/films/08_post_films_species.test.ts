import { Film } from '../../../server/models/Film';

import { knex } from '../../../server/DB';

import request from 'supertest';

import App from '../../../server/app';

import { isEmpty } from 'ramda';

describe('Post species in Films', () => {
  let apiKey: string;
  let notStoredSpeciesIds: string[];
  let targetFilm: Film;
  let expectedRedirectionPath;
  beforeAll(async (done) => {
    const [userApiKey]: { api_key: string }[] = await knex('user')
      .select('api_key')
      .limit(1);
    const speciesIds: string[] = await knex('specie')
      .select('id')
      .whereNotIn('id', function() {
        this.select('specie.id')
          .from('specie')
          .join('species_in_films', 'species_in_films.specie_id', 'specie.id')
          .join('film', 'film.id', 'species_in_films.film_id');
      })
      .limit(3)
      .then((pl: { id: string }[]) => pl.map((p) => p.id));
    const [film] = await knex('film')
      .select('*')
      .limit(1);
    notStoredSpeciesIds = speciesIds;
    apiKey = userApiKey.api_key;
    targetFilm = film;
    expectedRedirectionPath = `/api/v1/films?id=${targetFilm.id}&apiKey=${apiKey}`;
    done();
  });
  test('Add new species', async () => {
    const response = await request(App)
      .post(`/api/v1/films/add/items?id=${targetFilm.id}&apiKey=${apiKey}`)
      .send({ fieldName: 'species', itemsIds: notStoredSpeciesIds });
    const storedspeciesIds: string[] = await knex('species_in_films')
      .select('specie_id')
      .where({ film_id: targetFilm.id })
      .whereIn('specie_id', notStoredSpeciesIds)
      .then((pl: { specie_id: string }[]) => pl.map(({ specie_id }) => specie_id));
    expect(response.status).toEqual(302);
    expect(response.text.split(' ')[3]).toBe(expectedRedirectionPath);
    expect(notStoredSpeciesIds).toStrictEqual(storedspeciesIds);
  });
  test('Remove species', async () => {
    const response = await request(App)
      .post(`/api/v1/films/delete/items?id=${targetFilm.id}&apiKey=${apiKey}`)
      .send({
        fieldName: 'species',
        itemsIds: notStoredSpeciesIds
      });
    const storedSpeciesFromDB: string[] = await knex
      .select('specie_id')
      .from('species_in_films')
      .where({ film_id: targetFilm.id })
      .whereIn('specie_id', notStoredSpeciesIds)
      .then((rs: { specie_id: string }[]) => rs.map(({ specie_id }) => specie_id));
    expect(isEmpty(storedSpeciesFromDB)).toBeTruthy();
    expect(response.text.split(' ')[3]).toBe(expectedRedirectionPath);
    expect(response.status).toBe(302);
  });
});
