const { createContainer, asClass, asValue } = require('awilix');
const mongoose = require('mongoose');
const PersonaService = require('./services/personaService');
const PersonaModel = require('./models/persona');

// Configura el contenedor de dependencias
const container = createContainer();

container.register({
  mongoose: asValue(mongoose),
  PersonaModel: asValue(PersonaModel),
  PersonaService: asClass(PersonaService).singleton(),
});

module.exports = container;
