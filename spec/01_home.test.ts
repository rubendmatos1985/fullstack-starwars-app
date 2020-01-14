import request from 'supertest';
import App from '../server/app';
import { buildHomeData } from '../server/Controllers/HomeController';
import { Request } from 'express';
describe('Home', () => {
  test('GET /home', async () => {
    const response = await request(App).get('/home');
    expect(response.status).toBe(200);
  });
  test('redirect from to /home', async () => {
    const response = await request(App).get('/');
    expect(response.status).toBe(302);
    expect(response.header.location).toBe('/home');
    expect(response.redirect).toBe(true);
  });

  test('app return api info object', async () => {
    const response = await request(App).get('/home');
    const formattedResponse = JSON.parse(JSON.stringify(response));
    const homeDataFromResponse = formattedResponse.text;
    const url = new URL(formattedResponse.req.url);
    const fakeRequest = {
      get: (s: string) => url.host,
      protocol: url.protocol.split(':')[0]
    };
    const homeData = buildHomeData(fakeRequest as Request);
    expect(homeDataFromResponse).toBe(JSON.stringify(homeData));
  });
});
