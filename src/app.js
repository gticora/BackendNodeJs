const express = require('express');
const { scopePerRequest } = require('awilix-express');
const cors = require('cors');  // Importar el middleware de CORS
const container = require('./container');
const personaRoutes = require('./routes/personas');

const app = express();

// Middleware
app.use(express.json());

// Inyección de dependencias por solicitud
app.use(scopePerRequest(container));

// Rutas
app.use('/api/personas', personaRoutes);

module.exports = app;
