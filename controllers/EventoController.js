/**
 * The EventoController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/EventoService');
const createEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.createEvent);
};

const deleteEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteEvent);
};

const getEvents = async (request, response) => {
  await Controller.handleRequest(request, response, service.getEvents);
};

const getSingleEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSingleEvent);
};

const updateEvent = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateEvent);
};


module.exports = {
  createEvent,
  deleteEvent,
  getEvents,
  getSingleEvent,
  updateEvent,
};
