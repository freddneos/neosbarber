import { Router } from 'express';

const routes = new Router();

function testMid(req, res, next) {
  console.log('URL ->  ', req.url);
  next();
}

routes.get('/', testMid, (req, res) => res.json({ message: 'hello world' }));

export default routes;
