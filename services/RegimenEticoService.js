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
    const newRegimen = new RegimenEtico({
      userId: formulario.userId,
      instructorId: formulario.instructorId,
      lealtad: formulario.lealtad,
      transparencia: formulario.transparencia,
      colaboracion: formulario.colaboracion,
      relaciones_interpersonales: formulario.relaciones_interpersonales,
      cumplimiento_normas: formulario.cumplimiento_normas,
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
