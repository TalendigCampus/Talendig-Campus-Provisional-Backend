const { StatusCodes } = require('http-status-codes');
const CalidadForm = require('../models/CalidadForm');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const { utilsFunctions } = require('../utils');
// const { EncontrarUsuarios: findUser } = require('../services/RegimenEticoService');

// findUser();

const CrearCalidadForm = async ({ form }) => {
  try {
    const {
      userId,
      instructorId,
      proposal,
      continuousImprovement,
      responsability,
      accurate,
      focus,
      adaptability,
      interest,
      communication,
      quality,
    } = form;

    
    const values = Object.values(form); 
    
    const totalPoints = Math.round(values.reduce((acc, i) => acc + i));
    

    const findGrade = (totalPoints) => {
      if (totalPoints <= 59) return 'Grado 1';
      if (totalPoints >= 60 && totalPoints <= 69) return 'Grado 2';
      if (totalPoints >= 70 && totalPoints <= 79) return 'Grado 3';
      if (totalPoints >= 80 && totalPoints <= 89) return 'Grado 4';
      if (totalPoints >= 90 && totalPoints <= 100) return 'Grado 5';
    }
     
    const grade = findGrade(totalPoints);
    
    if (values.some((item) => typeof item !== 'number')) {
      return {
        code: StatusCodes.BAD_REQUEST,
        payload: {
          hasError: false,
          message: utilsFunctions.textResponseFormat(
            'Orientado a la calidad',
            SHORTTEXTREPONSE.badRequest,
          ),
          content: 'Error',
        },
      };
    }
    const newCalidad = new CalidadForm({
      userId,
      instructorId,
      proposal,
      continuousImprovement,
      responsability,
      accurate,
      focus,
      adaptability,
      interest,
      communication,
      quality,
      totalPoints,
      grade
    });

    newCalidad.save();
    
  } catch (error) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.serverError);
  }
};

module.exports = { CrearCalidadForm };
