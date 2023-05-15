/**
 * The InstructorController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/InstructorService');
const addInstructor = async (request, response) => {
  await Controller.handleRequest(request, response, service.addInstructor);
};

const addInstructorBootcamp = async (request, response) => {
  await Controller.handleRequest(request, response, service.addInstructorBootcamp);
};

const deleteBootcampinstructor = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteBootcampinstructor);
};

const deleteInstructorBootcamp = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteInstructorBootcamp);
};

const getAllInstructor = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllInstructor);
};

const getAllInstructorBootcamp = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllInstructorBootcamp);
};

const getInstructorBootcampById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getInstructorBootcampById);
};

const getInstructorById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getInstructorById);
};

const updateInstructor = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateInstructor);
};

const updateInstructorBootcamp = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateInstructorBootcamp);
};


module.exports = {
  addInstructor,
  addInstructorBootcamp,
  deleteBootcampinstructor,
  deleteInstructorBootcamp,
  getAllInstructor,
  getAllInstructorBootcamp,
  getInstructorBootcampById,
  getInstructorById,
  updateInstructor,
  updateInstructorBootcamp,
};
