/**
 * The ReporteController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ReporteService');
const createReport = async (request, response) => {
  await Controller.handleRequest(request, response, service.createReport);
};

const deleteReport = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteReport);
};

const getReports = async (request, response) => {
  await Controller.handleRequest(request, response, service.getReports);
};

const getSingleReport = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSingleReport);
};

const updateReport = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateReport);
};


module.exports = {
  createReport,
  deleteReport,
  getReports,
  getSingleReport,
  updateReport,
};
