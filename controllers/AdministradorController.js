/**
 * The AdministradorController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/AdministradorService');
const addAdministrator = async (request, response) => {
  await Controller.handleRequest(request, response, service.addAdministrator);
};

const deleteAdministrator = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAdministrator);
};

const getAdministratorById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAdministratorById);
};

const updateAdministrator = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateAdministrator);
};


module.exports = {
  addAdministrator,
  deleteAdministrator,
  getAdministratorById,
  updateAdministrator,
};
