import request from 'supertest';
import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from '../../src/router/router';

const app = new Koa();
app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

describe('Router Tests with Jest', () => {
    it('GET / should return "Hello World"', async () => {
        const response = await request(app.callback()).get('/');
        expect(response.status).toBe(200);
        expect(response.text).toBe('Hello World');
    });

    it('POST /api should echo the request body', async () => {
        const testData = { key: 'value' };
        const response = await request(app.callback()).post('/api').send(testData);
        expect(response.status).toBe(200);
        expect(response.body).toEqual(testData);
    });
});