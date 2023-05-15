/**
 * The EstadoController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/EstadoService');
const createState = async (request, response) => {
  await Controller.handleRequest(request, response, service.createState);
};

const deleteState = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteState);
};

const getSingleState = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSingleState);
};

const getStates = async (request, response) => {
  await Controller.handleRequest(request, response, service.getStates);
};

const updateState = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateState);
};


module.exports = {
  createState,
  deleteState,
  getSingleState,
  getStates,
  updateState,
};
