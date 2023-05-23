/**
 * The PortafolioController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ExperienciaLaboralService');

const createWorkExperience = async (request, response) => {
  await Controller.handleRequest(request, response, service.createWorkExperience);
};

const deleteWorkExperience = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteWorkExperience);
};

const updateWorkExperience = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateWorkExperience);
};

const getWorkExperience = async (request, response) => {
  await Controller.handleRequest(request, response, service.getWorkExperience);
};

const getWorkExperiences = async (request, response) => {
  await Controller.handleRequest(request, response, service.getWorkExperiences);
};

module.exports = {
  createWorkExperience,
  deleteWorkExperience,
  getWorkExperience,
  getWorkExperiences,
  updateWorkExperience,
};