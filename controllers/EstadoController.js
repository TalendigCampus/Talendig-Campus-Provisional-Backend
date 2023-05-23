/**
 * The EstadoController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/EstadoService');
const createStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.createStatus);
};

const deleteStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteStatus);
};

const getSingleStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSingleStatus);
};

const getStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.getStatus);
};

const updateStatus = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateStatus);
};


module.exports = {
  createStatus,
  deleteStatus,
  getSingleStatus,
  getStatus,
  updateStatus,
};
