/**
 * The BootcampController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/BootcampService');
const addBootcamp = async (request, response) => {
  await Controller.handleRequest(request, response, service.addBootcamp);
};

const addBootcampAssignment = async (request, response) => {
  await Controller.handleRequest(request, response, service.addBootcampAssignment);
};

const addBootcampAssignmentFile = async (request, response) => {
  await Controller.handleRequest(request, response, service.addBootcampAssignmentFile);
};

const addBootcampSection = async (request, response) => {
  await Controller.handleRequest(request, response, service.addBootcampSection);
};

const addBootcampSubject = async (request, response) => {
  await Controller.handleRequest(request, response, service.addBootcampSubject);
};

const addBootcampSubjectFile = async (request, response) => {
  await Controller.handleRequest(request, response, service.addBootcampSubjectFile);
};

const deleteBootcamp = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteBootcamp);
};

const deleteBootcampAssignment = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteBootcampAssignment);
};

const deleteBootcampAssignmentFile = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteBootcampAssignmentFile);
};

const deleteBootcampSection = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteBootcampSection);
};

const deleteBootcampSubject = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteBootcampSubject);
};

const deleteBootcampSubjectFile = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteBootcampSubjectFile);
};

const getAllBootcampAssignmentFiles = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllBootcampAssignmentFiles);
};

const getAllBootcampAssignments = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllBootcampAssignments);
};

const getAllBootcampSections = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllBootcampSections);
};

const getAllBootcampSubject = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllBootcampSubject);
};

const getAllBootcampSubjectFile = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllBootcampSubjectFile);
};

const getAllBootcampTalent = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllBootcampTalent);
};

const getAllBootcamps = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllBootcamps);
};

const getBootcampAssignment = async (request, response) => {
  await Controller.handleRequest(request, response, service.getBootcampAssignment);
};

const getBootcampAssignmentFile = async (request, response) => {
  await Controller.handleRequest(request, response, service.getBootcampAssignmentFile);
};

const getBootcampById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getBootcampById);
};

const getBootcampSectionById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getBootcampSectionById);
};

const getBootcampSubjectById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getBootcampSubjectById);
};

const getBootcampSubjectFileById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getBootcampSubjectFileById);
};

const updateBootcamp = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateBootcamp);
};

const updateBootcampAssignment = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateBootcampAssignment);
};

const updateBootcampAssignmentFile = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateBootcampAssignmentFile);
};

const updateBootcampSection = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateBootcampSection);
};

const updateBootcampSubject = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateBootcampSubject);
};

const updateBootcampSubjectFile = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateBootcampSubjectFile);
};


module.exports = {
  addBootcamp,
  addBootcampAssignment,
  addBootcampAssignmentFile,
  addBootcampSection,
  addBootcampSubject,
  addBootcampSubjectFile,
  deleteBootcamp,
  deleteBootcampAssignment,
  deleteBootcampAssignmentFile,
  deleteBootcampSection,
  deleteBootcampSubject,
  deleteBootcampSubjectFile,
  getAllBootcampAssignmentFiles,
  getAllBootcampAssignments,
  getAllBootcampSections,
  getAllBootcampSubject,
  getAllBootcampSubjectFile,
  getAllBootcampTalent,
  getAllBootcamps,
  getBootcampAssignment,
  getBootcampAssignmentFile,
  getBootcampById,
  getBootcampSectionById,
  getBootcampSubjectById,
  getBootcampSubjectFileById,
  updateBootcamp,
  updateBootcampAssignment,
  updateBootcampAssignmentFile,
  updateBootcampSection,
  updateBootcampSubject,
  updateBootcampSubjectFile,
};
