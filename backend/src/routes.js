const routes = require('express').Router();

// Controllers
const userController = require('./controllers/userController');

// Routes
routes.post('/digimons', userController.index);

module.exports = routes;
