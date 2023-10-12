/* eslint-disable camelcase */
const { StatusCodes } = require('http-status-codes');
const AspectoMejora = require('../models/aspectoMejora');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const { utilsFunctions } = require('../utils');

const CrearAspectoMejora = async ({ formulario }) => {
  // console.log(formulario);
  const {
    firmaEvaluador,
    firmaServidor,
    condicion_trabajo,
    comentarios,
    calificacion_plan_mejora,
    areas_mejora,
    puntos_fuertes,
    userId,
    instructorId,
  } = formulario;

  try {
    const newAspectoMejora = new AspectoMejora({
      userId,
      instructorId,
      areas_mejora,
      puntos_fuertes,
      calificacion_plan_mejora,
      comentarios,
      condicion_trabajo,
      firmaEvaluador,
      firmaServidor,
    });

    await newAspectoMejora.save();
    // console.log(saved);

    return {
      code: StatusCodes.CREATED,
      payload: {
        hasError: false,
        message: utilsFunctions.textResponseFormat(
          'Regimen etico',
          SHORTTEXTREPONSE.created,
        ),
        content: newAspectoMejora,
      },
    };
  } catch (error) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.serverError);
  }
};

module.exports = CrearAspectoMejora;
