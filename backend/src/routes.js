const express = require('express');
const OngController = require('./controllers/OngController');
const IncidentsController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController')
const routes = express.Router();

routes.get('/ongs', OngController.index );

routes.post('/sessions', SessionController.create);
routes.post('/ongs', OngController.create);

routes.post ('/incidents', IncidentsController.create);

routes.get('/incidents', IncidentsController.index);
routes.delete('/incidents/:id',IncidentsController.delete);

routes.get('/profile', ProfileController.index);
module.exports = routes;