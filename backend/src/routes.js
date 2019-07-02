const express = require('express');
const routes = express.Router();

const RankingController = require('./controllers/RankingController');

routes.get('/ranking', RankingController.index);
routes.post('/ranking', RankingController.store);


module.exports = routes;