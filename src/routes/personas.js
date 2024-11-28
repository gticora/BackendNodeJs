const { Router } = require('express');
const personaController = require('../controllers/personaController');

const router = Router();

router.post('/', personaController('crearPersona'));
router.get('/', personaController('obtenerPersonas'));
router.get('/:id', personaController('obtenerPersonaPorId'));
router.delete('/:id', personaController('eliminarPersona'));

module.exports = router;
