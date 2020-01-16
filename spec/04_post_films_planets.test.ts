import { knex } from '../server/DB';

describe('Post Planets in Films', () => {
  let apiKey: string;
  let notStoredPlanetsIds: string[];
  beforeAll(async () => {
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
    notStoredPlanetsIds = planetsIds;
    apiKey = userApiKey.api_key;
  });
  test('Add new planets', () => {
    console.log(apiKey);
    console.log(notStoredPlanetsIds);
    expect(true).toBe(true);
  });
});
