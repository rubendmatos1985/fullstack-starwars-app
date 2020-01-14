import { Controller } from './Controller';
import { Router, Request, Response } from 'express';
import { Status } from '../middlewares/helpers';

interface ApiUrls {
  people: string;
  planets: string;
  films: string;
  species: string;
  vehicles: string;
  starships: string;
}

export class HomeController extends Controller {
  constructor() {
    const router = () => {
      const r = Router();
      r.get('/', this.GetHome);
      return r;
    };
    super(router);
    this.Pathname = 'home';
  }

  private apiData(req: Request): ApiUrls {
    const url = (name: string) =>
      `${req.protocol}://${req.get('host')}/api/v1/${name}`;
    return {
      people: url('people'),
      planets: url('planets'),
      films: url('films'),
      species: url('species'),
      vehicles: url('vehicles'),
      starships: url('starships')
    };
  }

  private async GetHome(req: Request, res: Response) {
    const data = this.apiData(req);
    return res.json({
      status: Status.Successfull,
      endpoints: data,
      resources: {
        type: 'GET',
        urls: {
          get_all: `https://${req.get(
            'host'
          )}/api/v1/<resource>?id=<resource_id>&apiKey=<your_api_key>`,
          get_by_id: `https://${req.get(
            'host'
          )}/api/v1/<resource>?id=<resource_id>&apiKey=<your_api_key>`,
          get_by_name: `https://${req.get(
            'host'
          )}/api/v1/<resource>?name=<resource_name>&apiKey=<your_api_key>`
        },
        scopes: ['read']
      },
      signin: {
        url: `https://${req.get('host')}/user/signin`,
        body: {
          name: 'string',
          email: 'string',
          password: 'string'
        },
        type: 'POST',
        scopes: 'read'
      },
      add: {
        type: 'POST',
        url: `https://${req.get(
          'host'
        )}/api/v1/<resource>/add?id=<resource_id>&apiKey=<your_api_key>`,
        body: {
          fieldName: 'string',
          itemsIds: ['string']
        },
        scopes: ['read', 'write']
      },
      delete: {
        delete_items: {
          type: 'POST',
          url: `https://${req.get(
            'host'
          )}/api/v1/<resource>/delete/items?id=<resource id>&apiKey=<your_api_key>`,
          body: {
            fieldName: 'string',
            itemsIds: ['string']
          },
          scopes: ['read', 'write']
        },
        delete_entity: {
          type: 'POST',
          url: `https://${req.get(
            'host'
          )}/api/v1/<resource>/delete?id=<resource id>&apiKey=<your_api_key>`,
          scopes: ['read', 'write']
        }
      },
      create: {
        type: 'POST',
        url: `https://${req.get(
          'host'
        )}/api/v1/<resource>/create?apiKey=<your_api_key>`,
        scopes: ['read', 'write']
      }
    });
  }
}
