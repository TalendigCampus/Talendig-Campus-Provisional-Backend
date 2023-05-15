/**
 * The InstitucinController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/InstitucinService');
const createInstitution = async (request, response) => {
  await Controller.handleRequest(request, response, service.createInstitution);
};

const createIntership = async (request, response) => {
  await Controller.handleRequest(request, response, service.createIntership);
};

const createIntershipTalent = async (request, response) => {
  await Controller.handleRequest(request, response, service.createIntershipTalent);
};

const deleteInstitutionById = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteInstitutionById);
};

const deleteIntershipById = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteIntershipById);
};

const deleteIntershipTalentById = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteIntershipTalentById);
};

const getInstitutionById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getInstitutionById);
};

const getInstitutions = async (request, response) => {
  await Controller.handleRequest(request, response, service.getInstitutions);
};

const getIntership = async (request, response) => {
  await Controller.handleRequest(request, response, service.getIntership);
};

const getIntershipById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getIntershipById);
};

const getIntershipTalent = async (request, response) => {
  await Controller.handleRequest(request, response, service.getIntershipTalent);
};

const getIntershipTalentCreatedById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getIntershipTalentCreatedById);
};

const updateInstitution = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateInstitution);
};

const updateIntershipId = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateIntershipId);
};

const updateIntershipTalentId = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateIntershipTalentId);
};


module.exports = {
  createInstitution,
  createIntership,
  createIntershipTalent,
  deleteInstitutionById,
  deleteIntershipById,
  deleteIntershipTalentById,
  getInstitutionById,
  getInstitutions,
  getIntership,
  getIntershipById,
  getIntershipTalent,
  getIntershipTalentCreatedById,
  updateInstitution,
  updateIntershipId,
  updateIntershipTalentId,
};
