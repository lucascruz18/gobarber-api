const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => res.json({ Message: 'Hello World' }));

module.exports = routes;
