/**
 * The ArchivoController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ArchivoService');
const createFile = async (request, response) => {
  await Controller.handleRequest(request, response, service.createFile);
};

const deleteFile = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteFile);
};

const getFiles = async (request, response) => {
  await Controller.handleRequest(request, response, service.getFiles);
};

const getSingleFile = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSingleFile);
};

const updateFile = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateFile);
};


module.exports = {
  createFile,
  deleteFile,
  getFiles,
  getSingleFile,
  updateFile,
};
