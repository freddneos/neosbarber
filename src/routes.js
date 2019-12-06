import { Router } from 'express';
import User from './app/models/User';

const routes = new Router();

function testMid(req, res, next) {
  console.log('URL ->  ', req.url);
  next();
}
// testing insert
routes.get('/', testMid, async (req, res) => {
  const user = await User.create({
    name: 'Fredd',
    email: 'fredd@neosdev.com.br',
    password_hash: '123321223'
  });

  return res.json(user);
});

export default routes;
