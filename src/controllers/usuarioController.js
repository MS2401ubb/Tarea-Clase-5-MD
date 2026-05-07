/**
 * Controlador de Usuarios
 * Maneja las peticiones HTTP relacionadas con usuarios
 */

const { sendSuccess, sendError } = require('../handlers/responseHandler');
const usuarioService = require('../services/usuarioService');
const { createUsuarioSchema, updateUsuarioSchema, getUsuarioPorIdSchema } = require('../validations/usuarioValidation');

/**
 * POST /usuarios
 * Crea un nuevo usuario
 */
const crearUsuario = (req, res) => {
  try {
    // Validamos los datos de entrada
    const { error, value } = createUsuarioSchema.validate(req.body);

    if (error) {
      return sendError(
        res,
        'Error en validación de datos',
        400,
        error.details.map(err => err.message)
      );
    }

    // Llamamos al servicio para crear el usuario
    const usuarioCreado = usuarioService.crearUsuario(value);

    // Respondemos con éxito
    return sendSuccess(
      res,
      usuarioCreado,
      'Usuario creado exitosamente',
      201
    );
  } catch (error) {
    return sendError(res, 'Error al crear usuario', 500);
  }
};

/**
 * GET /usuarios
 * Obtiene todos los usuarios
 */
const obtenerTodosLosUsuarios = (req, res) => {
  try {
    const usuarios = usuarioService.obtenerTodosLosUsuarios();
    return sendSuccess(
      res,
      usuarios,
      'lista de usuarios mostrada exitosamente',
      200
    );
    
  } catch (error) {
    return sendError(res, 'Error al obtener usuarios', 500);
  }
};

/**
 * GET /usuarios/:id
 * Obtiene un usuario específico por ID
 */
const obtenerUsuarioPorId = (req, res) => {
  try {
    const {error, value} = getUsuarioPorIdSchema.validate({id: parseInt(req.params.id)});
    if(error){
      return sendError(
        res,
        'Error en validación de parametro',
        400,
        error.details.map(err => err.message)
      );
    }
    const usuarioEncontrado = usuarioService.obtenerUsuarioPorId(value.id);
    if(usuarioEncontrado==null){
      return sendError(
        res,
        'Usuario no encontrado',
        404);
    }else{
      return sendSuccess(
        res,
        usuarioEncontrado,
        'Usuario encontrado'
      );
    }


  } catch (error) {
    return sendError(res, 'Error al obtener usuario', 500);
  }
};

/**
 * PATCH /usuarios/:id
 * Actualiza un usuario existente
 * 
 * TODO: Completa esta función
 */
const actualizarUsuario = (req, res) => {
  try {
    const { error: paramsError, value: valParam} = getUsuarioPorIdSchema.validate({id: parseInt(req.params.id)});
    if(paramsError){
      return sendError(
        res,
        'Error en validación de parametros ID',
        400,
        paramsError.details.map(err => err.message)
      )
    }
    const { error: bodyError, value: valBody } = updateUsuarioSchema.validate(req.body);
    if(bodyError){
      return sendError(
        res,
        'Error en validación de datos USUARIO a actualizar',
        400,
        bodyError.details.map(err => err.message)
      );
    }
    const usuarioActualizado = usuarioService.actualizarUsuario(valParam.id,valBody);
    console.log(usuarioActualizado)
    if(usuarioActualizado == null){
      return sendError(
        res,
        'Usuario no encontrado',
        404
      );
    }else{
      return sendSuccess(
        res,
        usuarioActualizado,
        'Usuario actualizado'
      );
    }

  } catch (error) {
    return sendError(res, 'Error al actualizar usuario', 500);
  }
};

module.exports = {
  crearUsuario,
  obtenerTodosLosUsuarios,
  obtenerUsuarioPorId,
  actualizarUsuario
};
