import request, { Response } from 'supertest';
import App from '../../server/app';
import { Status } from '../../server/middlewares/helpers';
import { Validation } from '../../server/middlewares/validation';
import { IEntity } from '../../server/models/Entity';

export namespace CommonPostRequestsTests {
  export namespace Add {
    export namespace Body {
      export namespace Wrong {
        export const ItemsIdsValues = async (item: IEntity, endpoint: string, apiKey: string) => {
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
        };
        export const FieldNameValues = async (item: IEntity, endpoint: string, apiKey: string) => {
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
        };
        export const Keys = async (item: IEntity, endpoint: string, apiKey: string) => {
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
        };
      }
    }
  }
  export namespace Remove {
    export namespace Body {
      export namespace Wrong {
        export const ItemsIds = async (item: IEntity, fieldName: string, apiKey: string) => {
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
        };
        export const FieldNames = async (entity: IEntity, itemsIds: string[], apiKey: string) => {
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
        };
      }
    }
  }

  export namespace Query {
    export namespace Wrong {
      export const ApiKeyNotPresent = async (endpoint: string) => {
        const response = await request(App).get(`/api/v1/${endpoint}`);
        const formattedResponse = JSON.parse(response.text);
        expect(formattedResponse.status).toBe(Status.Error);
      };
    }
  }
}
