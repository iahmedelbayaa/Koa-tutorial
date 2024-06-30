import koa from 'koa';
import cors from 'koa2-cors';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';


const app = new koa();
const router = new Router();
app.use(cors());

app.use(bodyParser());

router.get('/', async (ctx) => {
  ctx.body = 'Hello World';
});

router.post('/api', async (ctx) => {
  ctx.body = ctx.request.body;
});

app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
