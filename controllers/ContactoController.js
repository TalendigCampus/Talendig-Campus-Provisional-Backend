/**
 * The ContactoController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/ContactoService');
const createUserContact = async (request, response) => {
  await Controller.handleRequest(request, response, service.createUserContact);
};

const deleteUserContact = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteUserContact);
};

const getUserContact = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserContact);
};

const getUserContacts = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserContacts);
};

const updateUserContact = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateUserContact);
};


module.exports = {
  createUserContact,
  deleteUserContact,
  getUserContact,
  getUserContacts,
  updateUserContact,
};
