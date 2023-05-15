/**
 * The ProyectoController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ProyectoService');
const createProject = async (request, response) => {
  await Controller.handleRequest(request, response, service.createProject);
};

const deleteproject = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteproject);
};

const getProject = async (request, response) => {
  await Controller.handleRequest(request, response, service.getProject);
};

const getProjects = async (request, response) => {
  await Controller.handleRequest(request, response, service.getProjects);
};

const updateProject = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateProject);
};


module.exports = {
  createProject,
  deleteproject,
  getProject,
  getProjects,
  updateProject,
};
