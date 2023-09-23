const { StatusCodes } = require('http-status-codes');
const User = require('../models/user');
const Instructor = require('../models/instructor');
const RegimenEtico = require('../models/regimenEtico');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const { utilsFunctions } = require('../utils');

const EncontrarUsuarios = async (userId, instructorId) => {
  if (!userId) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.notId);
  }

  if (!instructorId) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.notId);
  }

  const foundInstructor = await Instructor.findById(instructorId);

  if (!foundInstructor) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(
        `El instructor con el id ${instructorId}`,
        SHORTTEXTREPONSE.notFound,
      ),
    );
  }

  const foundUser = await User.findById(userId);

  if (!foundUser) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(
        `El instructor con el id ${instructorId}`,
        SHORTTEXTREPONSE.notFound,
      ),
    );
  }

  return true;
};

const CrearRegimenEtico = async ({ formulario }) => {
  try {
    const {
      userId,
      instructorId,
      lealtad,
      transparencia,
      colaboracion,
      relaciones_interpersonales,
      cumplimiento_normas,
    } = formulario;

    const suma_puntuacion =
      lealtad +
      transparencia +
      colaboracion +
      relaciones_interpersonales +
      cumplimiento_normas;

    if (
      lealtad > 3 ||
      transparencia > 3 ||
      colaboracion > 3 ||
      relaciones_interpersonales > 3 ||
      cumplimiento_normas > 3
    ) {
      return {
        code: StatusCodes.BAD_REQUEST,
        payload: {
          hasError: true,
          message: utilsFunctions.textResponseFormat(
            `${suma_puntuacion}`,
            SHORTTEXTREPONSE.badRequest,
          ),
          content: formulario,
        },
      };
    }
    const newRegimen = new RegimenEtico({
      userId,
      instructorId,
      lealtad,
      transparencia,
      colaboracion,
      relaciones_interpersonales,
      cumplimiento_normas,
      suma_puntuacion,
    });

    newRegimen.save();

    return {
      code: StatusCodes.CREATED,
      payload: {
        hasError: false,
        message: utilsFunctions.textResponseFormat(
          'Regimen etico',
          SHORTTEXTREPONSE.created,
        ),
        content: newRegimen,
      },
    };
  } catch (error) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.serverError);
  }
};

module.exports = { EncontrarUsuarios, CrearRegimenEtico };
