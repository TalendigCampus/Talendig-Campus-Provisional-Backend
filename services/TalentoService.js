/* eslint-disable no-unused-vars */
const { StatusCodes } = require('http-status-codes');
const Service = require('./Service');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const { textResponseFormat } = require('../utils/utilsFunctions');

/**
* Add a new talent to the store
* Add a new talent to the store
*
* talent Talent Create a new talent in the store
* returns getTalentById_200_response
* */
const addTalent = ({ talent }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talent,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Add a new talent assignment to the store
* Add a new talent assignment to the store
*
* talentAssignment TalentAssignment Create a new talent assignment in the store
* returns getTalentAssingmentById_200_response
* */
const addTalentAssingment = ({ talentAssignment }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentAssignment,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Add a new talent assignment file to the store
* Add a new talent assignment file to the store
*
* talentAssignmentFile TalentAssignmentFile Create a new talent assignment file in the store
* returns updateTalentAssignmentFile_200_response
* */
const addTalentAssingmentFile = ({ talentAssignmentFile }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentAssignmentFile,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* create a talentBootcamp relationship
* Add a new talentBootcamp to the store
*
* talentBootcamp TalentBootcamp Create a addTalentBootcamp in the store
* returns addTalentBootcamp_200_response
* */
const addTalentBootcamp = ({ talentBootcamp }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentBootcamp,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create a talent process with institution
* Create a talent process from the store
*
* talentInstitution TalentInstitution talent institution process by filter and pagination (optional)
* returns createATalentInstitutionProcess_200_response
* */
const createATalentInstitutionProcess = ({ talentInstitution }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentInstitution,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create a talent instructor recommendation with recruiter
* Create a talent recommendation from the store
*
* talentInstructor TalentInstructor Create talent instructor recommendation by filter and pagination (optional)
* returns getAllTalentInstructorRecommendation_200_response
* */
const createATalentInstructorRecommendation = ({ talentInstructor }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentInstructor,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Create a talent process with recruiter
* Create a of talents process from the store
*
* talentRecruiter TalentRecruiter Create talent recruiter process by filter and pagination (optional)
* returns createATalentRecruiterProcess_200_response
* */
const createATalentRecruiterProcess = ({ talentRecruiter }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentRecruiter,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete a talent instructor recommendation with recruiter by Id
* Delete a talent instructor recommendation with recruiter by Id
*
* talentInstructorId String Id talent instructor recommendation to delete
* returns EmptyResponse
* */
const deleteATalentInstructorRecommendationById = ({ talentInstructorId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentInstructorId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete a talent process with recruiter
* Delete a talent process with recruiter
*
* talentRecruiterId String Talent recruiter id to delete
* returns EmptyResponse
* */
const deleteAllTalentRecruiterProcess = ({ talentRecruiterId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentRecruiterId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete a talent process with institution
* Delete a talent process with institution
*
* talentInstitutionId String Talent institution id to delete
* returns EmptyResponse
* */
const deleteAllTalentinstitutionProcess = ({ talentInstitutionId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentInstitutionId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Deletes a talent
* delete a talent
*
* talentId String Talent id to delete
* returns EmptyResponse
* */
const deleteTalent = ({ talentId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Deletes a talent assignment
* delete a talent assignment
*
* talentAssignmentId String Talent Assignment id to delete
* returns EmptyResponse
* */
const deleteTalentAssingment = ({ talentAssignmentId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentAssignmentId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Deletes a talent assignment file
* delete a talent assignment file
*
* talentAssignmentFileId String Talent Assignment File id to delete
* returns EmptyResponse
* */
const deleteTalentAssingmentFile = ({ talentAssignmentFileId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentAssignmentFileId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Deletes an existing talent bootcamp
* delete a talent bootcamp
*
* talentBootcampId String talent bootcamp id to delete
* returns EmptyResponse
* */
const deleteTalentBootcamp = ({ talentBootcampId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentBootcampId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Find a talent instructor recommendation with recruiter by Id
* Returns a single talent instructor
*
* talentInstructorId String ID of talent to return
* returns getATalentInstructorRecommendationById_200_response
* */
const getATalentInstructorRecommendationById = ({ talentInstructorId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentInstructorId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all talent assignment files
* Get a list of talents assignment files from the store
*
* talentAssignmentFilePagination TalentAssignmentFilePagination Get talent assignment files by filter and pagination (optional)
* returns getAllTalentAssignmentFiles_200_response
* */
const getAllTalentAssignmentFiles = ({ talentAssignmentFilePagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentAssignmentFilePagination,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all talent assignment
* Get a list of talents assignment from the store
*
* talentAssignmentPagination TalentAssignmentPagination Get talent assignment by filter and pagination (optional)
* returns getAllTalentAssignments_200_response
* */
const getAllTalentAssignments = ({ talentAssignmentPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentAssignmentPagination,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all talent bootcamp
* Get a list of talents bootcamp from the store
*
* talentBootcampPagination TalentBootcampPagination Get talent bootcamp by filter and pagination (optional)
* returns getAllBootcampTalent_200_response
* */
const getAllTalentBootcamp = ({ talentBootcampPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentBootcampPagination,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all talent process with institution
* Get a list of talents process from the store
*
* talentInstitutionPagination TalentInstitutionPagination Get talent institution process by filter and pagination (optional)
* returns getAllTalentInstitutionProcess_200_response
* */
const getAllTalentInstitutionProcess = ({ talentInstitutionPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentInstitutionPagination,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all talent instructor recommendation with recruiter
* Get a list of talents recommendation from the store
*
* talentInstructorPagination TalentInstructorPagination Get talent instructor recommendation by filter and pagination (optional)
* returns getAllTalentInstructorRecommendation_200_response
* */
const getAllTalentInstructorRecommendation = ({ talentInstructorPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentInstructorPagination,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all talent process with recruiter
* Get a list of talents process from the store
*
* talentRecruiterPagination TalentRecruiterPagination Get talent recruiter process by filter and pagination (optional)
* returns getAllTalentRecruiterProcess_200_response
* */
const getAllTalentRecruiterProcess = ({ talentRecruiterPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentRecruiterPagination,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all talents
* Get a list of talents from the store
*
* talentPagination TalentPagination Get list of talents with filter and pagination (optional)
* returns getAllTalents_200_response
* */
const getAllTalents = ({ talentPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentPagination,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Find talent bootcamp by ID
* Returns a single talent bootcamp
*
* talentBootcampId String ID of talent bootcamp to return
* returns addTalentBootcamp_200_response
* */
const getSingleTalentBootcamp = ({ talentBootcampId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentBootcampId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Find talent assignment by ID
* Returns a single talent assignment
*
* talentAssignmentId String ID of talent assignment to return
* returns getTalentAssingmentById_200_response
* */
const getTalentAssingmentById = ({ talentAssignmentId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentAssignmentId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Find talent assignment file by ID
* Returns a single talent assignment file
*
* talentAssignmentFileId String ID of talent assignment file to return
* returns getTalentAssingmentById_200_response
* */
const getTalentAssingmentFileById = ({ talentAssignmentFileId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentAssignmentFileId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Find talent by ID
* Returns a single talent
*
* talentId String ID of talent to return
* returns getTalentById_200_response
* */
const getTalentById = ({ talentId }) => {
  const talent = null;
  const entityName = 'Talento';

  if (!talent) {
    throw new CustomAPIError.NotFoundError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }

  return {
    payload: {
      hasError: false,
      message: 'Talento encontrado',
      content: talent,
    },
  };
};
/**
* Find a talent process with recruiter by ID
* Returns a single talent
*
* talentRecruiterId String ID of talent recuiter to return
* returns createATalentRecruiterProcess_200_response
* */
const getTalentRecruiterProcessById = ({ talentRecruiterId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentRecruiterId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Find a talent process with institution by ID
* Returns a single talent
*
* talentInstitutionId String ID of talent institution to return
* returns createATalentInstitutionProcess_200_response
* */
const getTalentinstitutionProcessById = ({ talentInstitutionId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentInstitutionId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update a talent instructor recommendation with recruiter by Id
* Update a talent instructor recommendation with recruiter by Id
*
* talentInstructorId String ID of talent instructor to update
* talentInstructor TalentInstructor Update an existent talent instructor in the store
* returns getATalentInstructorRecommendationById_200_response
* */
const updateATalentInstructorRecommendationById = ({ talentInstructorId, talentInstructor }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentInstructorId,
        talentInstructor,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update an existing talent
* Update an existing talent by Id
*
* talentId String ID of talent to update
* talentCreated TalentCreated Update an existent talent in the store
* returns getTalentById_200_response
* */
const updateTalent = ({ talentId, talentCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentId,
        talentCreated,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update an existing talent assignment
* Update an existing talent assingment by Id
*
* talentAssignmentId String ID of talent assignment to update
* talentAssignmentCreated TalentAssignmentCreated Update an existent talent assignment in the store
* returns getTalentAssingmentById_200_response
* */
const updateTalentAssignment = ({ talentAssignmentId, talentAssignmentCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentAssignmentId,
        talentAssignmentCreated,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update an existing talent assignment file
* Update an existing talent assingment file by Id
*
* talentAssignmentFileId String ID of talent assignment file to update
* talentAssignmentFileCreated TalentAssignmentFileCreated Update an existent talent assignment file in the store
* returns updateTalentAssignmentFile_200_response
* */
const updateTalentAssignmentFile = ({ talentAssignmentFileId, talentAssignmentFileCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentAssignmentFileId,
        talentAssignmentFileCreated,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update an existing talent bootcamp
* Update an existing talent bootcamp by Id
*
* talentBootcampId String ID of talent bootcamp to update
* talentBootcampCreated TalentBootcampCreated Update an existent talent bootcamp in the store
* returns addTalentBootcamp_200_response
* */
const updateTalentBootcamp = ({ talentBootcampId, talentBootcampCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentBootcampId,
        talentBootcampCreated,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update a talent process with recruiter by ID
* Update an existing talent by Id
*
* talentRecruiterId String ID of talent recruiter to update
* talentRecruiterCreated TalentRecruiterCreated Update an existent talent recruiter in the store
* returns createATalentRecruiterProcess_200_response
* */
const updateTalentRecruiterProcess = ({ talentRecruiterId, talentRecruiterCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentRecruiterId,
        talentRecruiterCreated,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update a talent process with institution by ID
* Update an existing talent by Id
*
* talentInstitutionId String ID of talent institution to update
* talentInstitutionCreated TalentInstitutionCreated Update an existent talent institution in the store
* returns createATalentInstitutionProcess_200_response
* */
const updateTalentinstitutionProcess = ({ talentInstitutionId, talentInstitutionCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        talentInstitutionId,
        talentInstitutionCreated,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

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
