import request, { Response } from 'supertest';
import App from '../../server/app';
import { Status } from '../../server/middlewares/helpers';
import { Validation } from '../../server/middlewares/validation';
import { IEntity } from '../../server/models/Entity';

export namespace PostRequests {
  export namespace Body {
    export namespace Wrong {
      export const ItemsIdsValues = async (item: IEntity, apiKey: string) => {
        const response = await request(App)
          .post(`/api/v1/films/add?id=${item.id}&apiKey=${apiKey}`)
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
      export const fieldNameValues = async (item: IEntity, apiKey: string) => {
        const response = await request(App)
          .post(`/api/v1/films/add?id=${item.id}&apiKey=${apiKey}`)
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
      export const keys = async (item: IEntity, apiKey: string) => {
        const mock = jest.fn<Promise<Response>, any[]>();
        const mockedRequest = mock
          .mockReturnValueOnce(
            request(App)
              .post(`/api/v1/films/add?id=${item.id}&apiKey=${apiKey}`)
              .send({
                afdgfh: 'something', // wrong
                itemsIds: []
              })
          )
          .mockReturnValueOnce(
            request(App)
              .post(`/api/v1/films/add?id=${item.id}&apiKey=${apiKey}`)
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
