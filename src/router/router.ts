import Router from 'koa-router';

const router = new Router();


router.get('/', async (ctx) => {
  ctx.body = 'Hello World';
});

router.post('/api', async (ctx) => {
  ctx.body = ctx.request.body;
});


export default router;  