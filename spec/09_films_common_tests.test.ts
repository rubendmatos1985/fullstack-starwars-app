import { Film } from '../server/models/Film';

import { IUserEntity } from '../server/models/User';

import { knex } from '../server/DB';

import { CommonPostRequestsTests } from './commons/post_queries';

describe('Film: common tests', () => {
  let apiKey: string;
  let film: Film;
  let characters: string[];
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
    done();
  });
  test('Add with wrong body.itemsIds values', async () =>
    await CommonPostRequestsTests.Add.Body.Wrong.ItemsIdsValues(film, 'films', apiKey));
  test('Add with wrong body.fieldName values', async () =>
    await CommonPostRequestsTests.Add.Body.Wrong.FieldNameValues(film, 'films', apiKey));

  test('Wrong body keys', async () => CommonPostRequestsTests.Add.Body.Wrong.Keys(film, 'films', apiKey));

  test('Remove something with wrong body.itemsIds', async () =>
    await CommonPostRequestsTests.Remove.Body.Wrong.ItemsIds(film, 'characters', apiKey));
  test('Remove something with wrong body.fieldName', async () =>
    await CommonPostRequestsTests.Remove.Body.Wrong.FieldNames(film, characters, apiKey));
});
