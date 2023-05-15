/**
 * The ReclutadorController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ReclutadorService');
const createRecruiter = async (request, response) => {
  await Controller.handleRequest(request, response, service.createRecruiter);
};

const deleteRecruiter = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteRecruiter);
};

const getRecruiter = async (request, response) => {
  await Controller.handleRequest(request, response, service.getRecruiter);
};

const getRecruiterById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getRecruiterById);
};

const updateRecruiter = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateRecruiter);
};


module.exports = {
  createRecruiter,
  deleteRecruiter,
  getRecruiter,
  getRecruiterById,
  updateRecruiter,
};
