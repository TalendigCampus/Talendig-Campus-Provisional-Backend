/* eslint-disable consistent-return */
const { Router } = require('express');

const router = Router();
const RegimenEticoService = require('../services/RegimenEticoService');
const CustomAPIError = require('../errors/custom-api');
const CrearAspectoMejora = require('../services/AspectoMejoraService');

router.post('/regimen-etico', async (req, res) => {
  const { userId } = req.body;
  const { instructorId } = req.body;

  const { CrearRegimenEtico, EncontrarUsuarios } = RegimenEticoService;
  try {
    await EncontrarUsuarios(userId, instructorId);
    const respuesta = await CrearRegimenEtico({ formulario: req.body });

    return res.status(respuesta.code).json(respuesta);
  } catch (error) {
    if (error instanceof CustomAPIError) return res.status(400).json(error);
    res.status(404).json(error);
  }
});

router.post('/aspecto-mejora', async (req, res) => {
  const { userId, instructorId } = req.body;
  const { EncontrarUsuarios } = RegimenEticoService;

  try {
    await EncontrarUsuarios(userId, instructorId);
    const response = await CrearAspectoMejora({ formulario: req.body });
    // console.log(response);

    if (response.payload.hasError) {
      return res.status(400).json({
        response: 'not found users or not created',
      });
    }

    return res.status(response.code).json(response);
  } catch (error) {
    if (error instanceof CustomAPIError) return res.status(400).json(error);
    return res.status(404).json(error);
  }
});

module.exports = router;
