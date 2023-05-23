/**
 * The PortafolioController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/EducacionService');

const createEducation = async (request, response) => {
  await Controller.handleRequest(request, response, service.createEducation);
};

const deleteEducation = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteEducation);
};

const updateEducation = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateEducation);
};

const getEducation = async (request, response) => {
  await Controller.handleRequest(request, response, service.getEducation);
};

const getEducations = async (request, response) => {
  await Controller.handleRequest(request, response, service.getEducations);
};

module.exports = {
  createEducation,
  deleteEducation,
  getEducation,
  getEducations,
  updateEducation,
};
