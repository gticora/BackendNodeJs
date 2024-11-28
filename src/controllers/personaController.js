const { makeInvoker } = require('awilix-express');

const personaController = ({ PersonaService }) => ({
  // Crear una nueva persona
  crearPersona: async (req, res) => {
    try {
      const { nombre, apellido, edad, correo, direccion, telefono } = req.body;

      // Validar datos requeridos
      if (!nombre || !apellido || !edad || !correo || !telefono) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios' });
      }

      const persona = await PersonaService.crearPersona(req.body);
      res.status(201).json({ message: 'Persona guardada correctamente', data: persona });
    } catch (error) {
      console.error('Error al guardar la persona:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  // Obtener todas las personas
  obtenerPersonas: async (req, res) => {
    try {
      const personas = await PersonaService.obtenerPersonas();

      if (personas.length === 0) {
        return res.status(404).json({ error: 'No se encontraron personas' });
      }

      res.status(200).json(personas);
    } catch (error) {
      console.error('Error al obtener personas:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  // Obtener una persona por ID
  obtenerPersonaPorId: async (req, res) => {
    try {
      const { id } = req.params;

      const persona = await PersonaService.obtenerPersonaPorId(id);

      if (!persona) {
        return res.status(404).json({ error: 'Persona no encontrada' });
      }

      res.status(200).json(persona);
    } catch (error) {
      console.error('Error al buscar persona:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },

  // Eliminar una persona por ID
  eliminarPersona: async (req, res) => {
    try {
      const { id } = req.params;

      const persona = await PersonaService.eliminarPersona(id);

      if (!persona) {
        return res.status(404).json({ error: 'Persona no encontrada' });
      }

      res.status(200).json({ message: 'Persona eliminada correctamente', data: persona });
    } catch (error) {
      console.error('Error al eliminar persona:', error);
      res.status(500).json({ error: 'Error interno del servidor' });
    }
  },
});

module.exports = makeInvoker(personaController);
