const express = require('express');

const HeroController = require('../controllers/HeroController');
const ComicController = require('../controllers/ComicController');
const SerieController = require('../controllers/SerieController');
const StorieController = require('../controllers/StorieController');
const EventController = require('../controllers/EventController');

const routes = express.Router ();

routes.post( '/v1/public/characters', HeroController.store);
routes.get( '/v1/public/characters', HeroController.index);
routes.get( '/v1/public/characters/:hero_id', HeroController.indexHero);

routes.get('/v1/public/characters/:hero_id/comics', ComicController.index);
routes.post('/v1/public/characters/:hero_id/comics', ComicController.store);

routes.get('/v1/public/characters/:hero_id/series', SerieController.index);
routes.post('/v1/public/characters/:hero_id/series', SerieController.store);

routes.get('/v1/public/characters/:hero_id/stories', StorieController.index);
routes.post('/v1/public/characters/:hero_id/stories', StorieController.store);

routes.get('/v1/public/characters/:hero_id/events', EventController.index);
routes.post('/v1/public/characters/:hero_id/events', EventController.store);

module.exports = routes;