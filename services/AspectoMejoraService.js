/* eslint-disable camelcase */
const { StatusCodes } = require('http-status-codes');
const AspectoMejora = require('../models/aspectoMejora');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const { utilsFunctions } = require('../utils');

const CrearAspectoMejora = async ({ formulario }) => {
  const {
    recomendaciones, condicion_trabajo, areas_mejora, puntos_fuertes,
  } = formulario;
  try {
    if (
      recomendaciones.length < 1
      || condicion_trabajo.length < 1
      || areas_mejora.length < 1
      || puntos_fuertes.length < 1
    ) {
      return {
        code: StatusCodes.BAD_REQUEST,
        payload: {
          hasError: false,
          message: utilsFunctions.textResponseFormat(
            'Regimen etico',
            SHORTTEXTREPONSE.created,
          ),
          content: 'Llenar los campos',
        },
      };
    }
    const newAspectoMejora = new AspectoMejora({ ...formulario });

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
