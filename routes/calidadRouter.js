const { Router } = require('express');

const calidadRouter = Router();
const CalidadFormService = require('../services/CalidadFormService');
const { EncontrarUsuarios } = require('../services/RegimenEticoService');
const CustomAPIError = require('../errors/custom-api');

calidadRouter.post('/calidadForm', async (req, res) => {
  const { CrearCalidadForm } = CalidadFormService;
  const { userId, instructorId } = req.body;
  try {
    await EncontrarUsuarios(userId, instructorId);
    const response = await CrearCalidadForm({ form: req.body });
    // console.log(req.body);
    return res.status(response.code).json(response);
  } catch (error) {
    if (error instanceof CustomAPIError) return res.status(400).json(error);
    return res.status(500).json(error);
  }
});

module.exports = calidadRouter;
