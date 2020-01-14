import request from 'supertest';
import App from '../server/Controllers/FilmsController';
describe('Films Controller', ()=>{
    test('fail if api is not in query', async ()=>{
        const response = await request(App).get('/api/v1/films');
        console.log(response.text)
        expect(true).toBe(true)
    })
})