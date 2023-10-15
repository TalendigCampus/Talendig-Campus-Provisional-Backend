const { Router } = require('express');

const calidadRouter = Router();
const CalidadFormService = require('../services/CalidadFormService');
const CustomAPIError = require('../errors/custom-api');

calidadRouter.post('/calidadForm', async (req, res) => {

  const { CrearCalidadForm } = CalidadFormService;
  try {
    const response = await CrearCalidadForm ({ form: req.body});
    console.log(req.body);
    return res.status(response.code).json(response);

  } catch (error) {
    if (error instanceof CustomAPIError) return res.status(400).json(error);
    res.status(404).json(error);
  }
});

module.exports = calidadRouter;
