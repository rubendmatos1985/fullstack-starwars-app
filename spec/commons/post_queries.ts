import request, { Response } from 'supertest';
import App from '../../server/app';
import { Status } from '../../server/middlewares/helpers';
import { Validation } from '../../server/middlewares/validation';
import { IEntity } from '../../server/models/Entity';
import { IUserEntity } from '../../server/models/User';
import { knex } from '../../server/DB';
import { Film } from '../../server/models/Film';
import { Response as SuperAgentResponse } from 'superagent';
export const CommonPostRequestsTests = {
  Add: {
    Body: {
      Wrong: {
        ItemsIdsValues: async (item: IEntity, endpoint: string, apiKey: string) => {
          const response = await request(App)
            .post(`/api/v1/${endpoint}/add/items?id=${item.id}&apiKey=${apiKey}`)
            .send({
              fieldName: 'characters',
              itemsIds: [[]] // wrong
            });

          expect({
            status: Status.Error,
            message: Validation.ErrorMessages.Body.AddOrRemoveItems
          }).toStrictEqual(JSON.parse(response.text));
          expect(response.status).toBe(400);
        },
        FieldNameValues: async (item: IEntity, endpoint: string, apiKey: string) => {
          const response = await request(App)
            .post(`/api/v1/${endpoint}/add/items?id=${item.id}&apiKey=${apiKey}`)
            .send({
              fieldName: 12345, // wrong
              itemsIds: []
            });

          expect({
            status: Status.Error,
            message: Validation.ErrorMessages.Body.AddOrRemoveItems
          }).toStrictEqual(JSON.parse(response.text));
          expect(response.status).toBe(400);
        },
        Keys: async (item: IEntity, endpoint: string, apiKey: string) => {
          const mock = jest.fn<Promise<Response>, any[]>();
          const url: string = `/api/v1/${endpoint}/add/items?id=${item.id}&apiKey=${apiKey}`;
          const mockedRequest = mock
            .mockReturnValueOnce(
              request(App)
                .post(url)
                .send({
                  afdgfh: 'something', // wrong
                  itemsIds: []
                })
            )
            .mockReturnValueOnce(
              request(App)
                .post(url)
                .send({
                  fieldName: 'something',
                  sddfgh: [] // wrong
                })
            );
          const expectedResponse = {
            status: Status.Error,
            message: Validation.ErrorMessages.Body.AddOrRemoveItems
          };
          const response = await mockedRequest();
          const response1 = await mockedRequest();

          expect(JSON.parse(response.text)).toStrictEqual(expectedResponse);
          expect(JSON.parse(response1.text)).toStrictEqual(expectedResponse);

          expect(response.status).toBe(400);
          expect(response1.status).toBe(400);
        }
      }
    }
  },
  Remove: {
    Body: {
      Wrong: {
        ItemsIds: async (item: IEntity, fieldName: string, apiKey: string) => {
          const response = await request(App)
            .post(`/api/v1/films/delete/items?id=${item.id}&apiKey=${apiKey}`)
            .send({
              fieldName: 'characters',
              itemsIds: [[]] // wrong
            });
          expect({
            status: Status.Error,
            message: Validation.ErrorMessages.Body.AddOrRemoveItems
          }).toStrictEqual(JSON.parse(response.text));
          expect(response.status).toBe(400);
        },
        FieldNames: async (entity: IEntity, itemsIds: string[], apiKey: string) => {
          const response = await request(App)
            .post(`/api/v1/films/delete/items?id=${entity.id}&apiKey=${apiKey}`)
            .send({
              fieldName: 12345, // wrong
              itemsIds
            });
          expect({
            status: Status.Error,
            message: Validation.ErrorMessages.Body.AddOrRemoveItems
          }).toStrictEqual(JSON.parse(response.text));
          expect(response.status).toBe(400);
        }
      }
    }
  },
  Update: function<T extends IEntity>(entityName: string, endpoint: string) {
    return describe(`${entityName}: Update`, () => {
      let targetEntity: T;
      let apiKey: string;
      let entityOldNameOrTitle: string;
      beforeAll(async (done) => {
        const [user]: IUserEntity[] = await knex('user').limit(1);
        const [dbEntity]: T[] = await knex(entityName)
          .select('*')
          .limit(1);
        targetEntity = dbEntity;
        const castedEntity = (<unknown>targetEntity) as any;
        entityOldNameOrTitle = castedEntity.title ? castedEntity.title : castedEntity.name;
        apiKey = user.api_key;
        done();
      });
      test('Edit Film', async () => await ExecuteUpdate('New Name')());
      test('Return to original value', async () => await ExecuteUpdate(entityOldNameOrTitle)());

      function ExecuteUpdate(newValue: string) {
        return async () => {
          const expectedRedirectionPath = `/api/v1/${endpoint}?id=${targetEntity.id}&apiKey=${apiKey}`;
          let response: SuperAgentResponse;
          let entityFromDB: { name: string } | { title: string };
          // is a film object

          if (entityName === 'film') {
            response = await request(App)
              .post(`/api/v1/${endpoint}/update?id=${targetEntity.id}&apiKey=${apiKey}`)
              .send({
                title: newValue
              });

            const [respFromDB]: { title: string }[] = await knex(entityName)
              .select('title')
              .where({ id: targetEntity.id })
              .limit(1);
            entityFromDB = respFromDB;
          }
          // is any of the other entity objects
          else {
            response = await request(App)
              .post(`/api/v1/${endpoint}/update?id=${targetEntity.id}&apiKey=${apiKey}`)
              .send({
                name: newValue
              });
            const [respFromDB]: { title: string }[] = await knex(entityName)
              .select('name')
              .where({ id: targetEntity.id })
              .limit(1);
            entityFromDB = respFromDB;
          }
          if (entityName === 'film') {
            expect(((<unknown>entityFromDB) as any).title).toEqual(newValue);
          } else {
            expect(((<unknown>entityFromDB) as any).name).toEqual(newValue);
          }

          expect(response.status).toEqual(302);
          expect(response.text.split(' ')[3]).toBe(expectedRedirectionPath);
        };
      }
    });
  },

  Query: {
    Wrong: {
      ApiKeyNotPresent: async (endpoint: string) => {
        const response = await request(App).get(`/api/v1/${endpoint}`);
        const formattedResponse = JSON.parse(response.text);
        expect(formattedResponse.status).toBe(Status.Error);
      }
    }
  }
};
