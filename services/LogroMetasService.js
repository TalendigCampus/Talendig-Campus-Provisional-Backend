/* eslint-disable camelcase */
const { StatusCodes } = require('http-status-codes');
// const User = require('../models/user');
// const Instructor = require('../models/instructor');
const LogroMetas = require('../models/logroMetas');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const { utilsFunctions } = require('../utils');

const crearLogroMetas = async ({ formulario }) => {
  const {
    cargoServidor,
    cargoSupervisor,
    firmaServidor,
    firmaSupervisor,
    indicadorCuando,
    indicadorCuanto,
    institucion,
    instructorId,
    metas,
    observaciones,
    periodo,
    ponderacion,
    unidadOrganizativa,
    userId,
    calificacion,
  } = formulario;

  // * calificacion total del formulario
  const calificacionBase = 65;
  try {
    if (calificacion.some((item) => item > 65)) {
      return {
        code: StatusCodes.BAD_REQUEST,
        payload: {
          hasError: true,
          message: utilsFunctions.textResponseFormat(
            SHORTTEXTREPONSE.badRequest,
          ),
          content: 'La calificaion debe ser menor o igual a 65',
        },
      };
    }

    if (ponderacion.reduce((acc, i) => acc + i) !== 65) {
      return {
        code: StatusCodes.BAD_REQUEST,
        payload: {
          hasError: true,
          message: utilsFunctions.textResponseFormat(
            SHORTTEXTREPONSE.badRequest,
          ),
          content: 'La evaluacion debe dar como total 65',
        },
      };
    }
    // * calculo de la ponderacion total
    const total = calificacion
      .map((item, i) => item * ponderacion[i])
      .reduce((acc, i) => acc + i);
    const ponderacionTotal = Math.round(total / calificacionBase);

    const calificacionTotalSuma = calificacion.reduce((acc, i) => acc + i);
    const calificacionTotal = calificacionTotalSuma / calificacion.length;

    const newLogro = new LogroMetas({
      cargoServidor,
      cargoSupervisor,
      firmaServidor,
      firmaSupervisor,
      indicadorCuando,
      indicadorCuanto,
      institucion,
      instructorId,
      metas,
      observaciones,
      periodo,
      ponderacion,
      ponderacionTotal,
      unidadOrganizativa,
      userId,
      calificacion,
      calificacionTotal,
    });
    // console.log(newLogro);
    newLogro.save();
    // console.log(save);

    return {
      code: StatusCodes.CREATED,
      payload: {
        hasError: false,
        message: utilsFunctions.textResponseFormat(
          'Logro metas',
          SHORTTEXTREPONSE.created,
        ),
        content: newLogro,
      },
    };
  } catch (error) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.serverError);
  }
};

module.exports = crearLogroMetas;
