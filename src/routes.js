const { Router } = require('express');

// const User = require('./app/models/User');

const routes = new Router();

routes.get('/', (req, res) => res.json({ Message: 'Hello World' }));

// routes.get('/', async (req, res) => {
//   const user = await User.create({
//     name: 'Lucas Cruz',
//     email: 'lucascruzati@gmail.com',
//     password_hash: '123',
//     provider: true,
//   });

//   return res.json(user);
// });

export default routes;
