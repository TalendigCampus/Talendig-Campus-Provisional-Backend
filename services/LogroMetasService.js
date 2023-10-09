/* eslint-disable camelcase */
const { StatusCodes } = require('http-status-codes');
// const User = require('../models/user');
// const Instructor = require('../models/instructor');
const LogroMetas = require('../models/logroMetas');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const { utilsFunctions } = require('../utils');

const crearLogroMetas = async ({ formulario }) => {
  try {
    const newLogro = new LogroMetas(formulario);

    const save = (await newLogro.save()) || null;

    if (save === null) {
      return {
        code: StatusCodes.BAD_REQUEST,
        payload: {
          hasError: true,
          message: utilsFunctions.textResponseFormat(
            SHORTTEXTREPONSE.badRequest,
          ),
          content: formulario,
        },
      };
    }
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
