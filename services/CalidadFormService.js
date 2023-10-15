const { StatusCodes } = require('http-status-codes');
const CalidadForm = require('../models/CalidadForm');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const { utilsFunctions } = require('../utils');

const CrearCalidadForm = async ({ form }) => {
  try {
    const {
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

    const totalPoints =
      proposal +
      continuousImprovementresponsability + accurate +
      focus +
      adaptability +
      interest +
      communication +
      quality;
    
    const { grade } = () =>{
        if(totalPoints <= 59 ){
            return "Grado 1";

        } else if (totalPoints >=60 && totalPoints <= 69){
            return "Grado 2";
        } else if (totalPoints >= 70 && totalPoints <=79){
            return "Grado 3";
        } else if (totalPoints >= 80 && totalPoints <= 89){
            return "Grado 4";
        } else if (totalPoints >= 90 && totalPoints <= 100){
            return "Grado 5";
        } else {
            return 0;
        }
    }
    
    const newCalidad = new CalidadForm({
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

    return {
      code: StatusCodes.CREATED,
      payload: {
        hasError: false,
        message: utilsFunctions.textResponseFormat(
          'Orientado a la calidad',
          SHORTTEXTREPONSE.created,
        ),
        content: newCalidad,
      },
    };
  } catch (error) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.serverError);
  }
};

module.exports = { CrearCalidadForm };
