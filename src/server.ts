import koa from 'koa';
import cors from 'koa2-cors';
import router from './router/router';
import bodyParser from 'koa-bodyparser';
import KoaLogger from 'koa-logger';


const app = new koa();
app.use(router.routes());
app.use(router.allowedMethods());
app.use(KoaLogger());
app.use(cors());

app.use(bodyParser());


app.listen(3000, () => {
  console.log('Server running on port 3000');
});
