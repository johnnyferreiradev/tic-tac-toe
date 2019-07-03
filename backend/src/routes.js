const express = require('express');
const routes = express.Router();

const RankingController = require('./controllers/RankingController');
const LoginController = require('./controllers/LoginController');

routes.post('/login', LoginController.login);
routes.post('/signup', LoginController.signup);

routes.get('/ranking', RankingController.index);
routes.post('/ranking', RankingController.store);
routes.get('/ranking/:name', RankingController.show);
routes.put('/ranking/:id', RankingController.update);


module.exports = routes;