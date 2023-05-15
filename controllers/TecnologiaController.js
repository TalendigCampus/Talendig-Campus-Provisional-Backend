/**
 * The TecnologiaController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TecnologiaService');
const createTechnology = async (request, response) => {
  await Controller.handleRequest(request, response, service.createTechnology);
};

const deleteTechnology = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteTechnology);
};

const getSingleTechnology = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSingleTechnology);
};

const getTechnologys = async (request, response) => {
  await Controller.handleRequest(request, response, service.getTechnologys);
};

const updateTechnology = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateTechnology);
};


module.exports = {
  createTechnology,
  deleteTechnology,
  getSingleTechnology,
  getTechnologys,
  updateTechnology,
};
