/**
 * The TituloController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TituloService');
const createTitle = async (request, response) => {
  await Controller.handleRequest(request, response, service.createTitle);
};

const deleteTitle = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteTitle);
};

const getSingleTitle = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSingleTitle);
};

const getTitles = async (request, response) => {
  await Controller.handleRequest(request, response, service.getTitles);
};

const updateTitle = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateTitle);
};


module.exports = {
  createTitle,
  deleteTitle,
  getSingleTitle,
  getTitles,
  updateTitle,
};
