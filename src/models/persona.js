const mongoose = require('mongoose');

const PersonaSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  apellido: { type: String, required: true },
  edad: { type: Number, required: true },
  correo: { type: String, required: true },
  direccion: {
    calle: { type: String, required: true },
    numero: { type: Number, required: true },
    ciudad: { type: String, required: true },
    pais: { type: String, required: true },
  },
  telefono: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Persona', PersonaSchema);
