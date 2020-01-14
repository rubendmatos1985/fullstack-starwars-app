import request from 'supertest';
import { buildHomeData } from '../server/Controllers/HomeController';
import { Request } from 'express';
import App from '../server/app';
describe('app', () => {
  test('GET /home', async () => {
    const response = await request(App).get('/home');
    expect(response.status).toBe(200);
  });
  test('redirect from / -> /home', async () => {
    const response = await request(App).get('/');
    expect(response.status).toBe(302);
    expect(response.header.location).toBe('/home')
    expect(response.redirect).toBe(true)
  });

});
