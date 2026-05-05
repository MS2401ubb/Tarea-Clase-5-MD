/**
 * Rutas de Usuarios
 * Aquí definimos los endpoints relacionados con usuarios
 */

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// POST /usuarios - Crear un nuevo usuario
router.post('/', usuarioController.crearUsuario);

// GET /usuarios - Obtener todos los usuarios
// TODO: Descomenta cuando implementes esta función
router.get('/', usuarioController.obtenerTodosLosUsuarios);

// GET /usuarios/:id - Obtener un usuario específico
// TODO: Descomenta cuando implementes esta función
// router.get('/:id', usuarioController.obtenerUsuarioPorId);

// PATCH /usuarios/:id - Actualizar un usuario
// TODO: Descomenta cuando implementes esta función
// router.patch('/:id', usuarioController.actualizarUsuario);

module.exports = router;
