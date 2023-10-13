const { Router } = require('express');

const router = Router();
const RegimenEticoService = require('../services/RegimenEticoService');
const CustomAPIError = require('../errors/custom-api');
const crearLogroMetas = require('../services/LogroMetasService');

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
    return res.status(404).json(error);
  }
});

router.post('/logro-metas', async (req, res) => {
  const { EncontrarUsuarios } = RegimenEticoService;
  const { userId, instructorId } = req.body;

  try {
    const find = await EncontrarUsuarios(userId, instructorId);
    if (find) {
      const response = await crearLogroMetas({ formulario: req.body });
      return res.status(response.code).json(response);
    }
    return res.status(400).json(false);
  } catch (error) {
    if (error instanceof CustomAPIError) return res.status(400).json(error);
    return res.status(500).json(error);
  }
});

module.exports = router;
