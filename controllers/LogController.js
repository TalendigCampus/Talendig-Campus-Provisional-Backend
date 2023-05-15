/**
 * The LogController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/LogService');
const createLog = async (request, response) => {
  await Controller.handleRequest(request, response, service.createLog);
};

const deleteLog = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteLog);
};

const getLogs = async (request, response) => {
  await Controller.handleRequest(request, response, service.getLogs);
};

const getSingleLog = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSingleLog);
};

const updateLog = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateLog);
};


module.exports = {
  createLog,
  deleteLog,
  getLogs,
  getSingleLog,
  updateLog,
};
