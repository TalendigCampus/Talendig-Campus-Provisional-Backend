/**
 * The TalentoController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/TalentoService');
const addTalent = async (request, response) => {
  await Controller.handleRequest(request, response, service.addTalent);
};

const addTalentAssingment = async (request, response) => {
  await Controller.handleRequest(request, response, service.addTalentAssingment);
};

const addTalentAssingmentFile = async (request, response) => {
  await Controller.handleRequest(request, response, service.addTalentAssingmentFile);
};

const addTalentBootcamp = async (request, response) => {
  await Controller.handleRequest(request, response, service.addTalentBootcamp);
};

const createATalentInstitutionProcess = async (request, response) => {
  await Controller.handleRequest(request, response, service.createATalentInstitutionProcess);
};

const createATalentInstructorRecommendation = async (request, response) => {
  await Controller.handleRequest(request, response, service.createATalentInstructorRecommendation);
};

const createATalentRecruiterProcess = async (request, response) => {
  await Controller.handleRequest(request, response, service.createATalentRecruiterProcess);
};

const deleteATalentInstructorRecommendationById = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteATalentInstructorRecommendationById);
};

const deleteAllTalentRecruiterProcess = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAllTalentRecruiterProcess);
};

const deleteAllTalentinstitutionProcess = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteAllTalentinstitutionProcess);
};

const deleteTalent = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteTalent);
};

const deleteTalentAssingment = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteTalentAssingment);
};

const deleteTalentAssingmentFile = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteTalentAssingmentFile);
};

const deleteTalentBootcamp = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteTalentBootcamp);
};

const getATalentInstructorRecommendationById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getATalentInstructorRecommendationById);
};

const getAllTalentAssignmentFiles = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllTalentAssignmentFiles);
};

const getAllTalentAssignments = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllTalentAssignments);
};

const getAllTalentBootcamp = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllTalentBootcamp);
};

const getAllTalentInstitutionProcess = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllTalentInstitutionProcess);
};

const getAllTalentInstructorRecommendation = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllTalentInstructorRecommendation);
};

const getAllTalentRecruiterProcess = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllTalentRecruiterProcess);
};

const getAllTalents = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllTalents);
};

const getSingleTalentBootcamp = async (request, response) => {
  await Controller.handleRequest(request, response, service.getSingleTalentBootcamp);
};

const getTalentAssingmentById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getTalentAssingmentById);
};

const getTalentAssingmentFileById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getTalentAssingmentFileById);
};

const getTalentById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getTalentById);
};

const getTalentRecruiterProcessById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getTalentRecruiterProcessById);
};

const getTalentinstitutionProcessById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getTalentinstitutionProcessById);
};

const updateATalentInstructorRecommendationById = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateATalentInstructorRecommendationById);
};

const updateTalent = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateTalent);
};

const updateTalentAssignment = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateTalentAssignment);
};

const updateTalentAssignmentFile = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateTalentAssignmentFile);
};

const updateTalentBootcamp = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateTalentBootcamp);
};

const updateTalentRecruiterProcess = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateTalentRecruiterProcess);
};

const updateTalentinstitutionProcess = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateTalentinstitutionProcess);
};


module.exports = {
  addTalent,
  addTalentAssingment,
  addTalentAssingmentFile,
  addTalentBootcamp,
  createATalentInstitutionProcess,
  createATalentInstructorRecommendation,
  createATalentRecruiterProcess,
  deleteATalentInstructorRecommendationById,
  deleteAllTalentRecruiterProcess,
  deleteAllTalentinstitutionProcess,
  deleteTalent,
  deleteTalentAssingment,
  deleteTalentAssingmentFile,
  deleteTalentBootcamp,
  getATalentInstructorRecommendationById,
  getAllTalentAssignmentFiles,
  getAllTalentAssignments,
  getAllTalentBootcamp,
  getAllTalentInstitutionProcess,
  getAllTalentInstructorRecommendation,
  getAllTalentRecruiterProcess,
  getAllTalents,
  getSingleTalentBootcamp,
  getTalentAssingmentById,
  getTalentAssingmentFileById,
  getTalentById,
  getTalentRecruiterProcessById,
  getTalentinstitutionProcessById,
  updateATalentInstructorRecommendationById,
  updateTalent,
  updateTalentAssignment,
  updateTalentAssignmentFile,
  updateTalentBootcamp,
  updateTalentRecruiterProcess,
  updateTalentinstitutionProcess,
};
