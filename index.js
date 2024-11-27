require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Inicializa la aplicación
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB Atlas
const mongoURI = process.env.MONGO_URI || 'mongodb+srv://gaticora:TNR0OV8e98nl98uw@cluster0.ocrgk.mongodb.net/RegistroPersonas?retryWrites=true&w=majority';

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conexión a MongoDB exitosa'))
  .catch(err => console.error('Error conectando a MongoDB:', err));

// Define el esquema de datos para la colección 'personas'
const PersonaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  correo: { type: String, required: true },
  direccion: {
    calle: { type: String, required: true },
    numero: { type: Number, required: true },
    ciudad: { type: String, required: true },
    pais: { type: String, required: true }
  },
  telefono: { type: String, required: true }
}, { timestamps: true });

// Modelo de Mongoose para 'personas'
const Persona = mongoose.model('Persona', PersonaSchema);

// Ruta para manejar el POST (Crear una nueva persona)
app.post('/api/personas', async (req, res) => {
  try {
    const { nombre, apellido, edad, correo, direccion, telefono } = req.body;

    // Validar datos
    if (!nombre || !apellido || !edad || !correo || !direccion || !telefono) {
      return res.status(400).json({ error: 'Todos los campos son obligatorios' });
    }

    // Guardar en la base de datos
    const persona = new Persona({ nombre, apellido, edad, correo, direccion, telefono });
    await persona.save();

    res.status(201).json({ message: 'Persona guardada correctamente', data: persona });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al guardar los datos' });
  }
});

// Ruta para manejar el GET (Obtener todas las personas)
app.get('/api/personas', async (req, res) => {
  try {
    const personas = await Persona.find();
    res.status(200).json(personas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los datos' });
  }
});

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
