const { Router } = require('express');

const router = Router();
const RegimenEticoService = require('../services/RegimenEticoService');
const CustomAPIError = require('../errors/custom-api');

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

module.exports = router;
