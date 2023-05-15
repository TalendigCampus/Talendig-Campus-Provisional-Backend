/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create recruiter
* The creation of a new recruiter.
*
* recruiter Recruiter Created recruiter object (optional)
* returns createRecruiter_200_response
* */
const createRecruiter = ({ recruiter }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        recruiter,
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
* Delete recruiter by recruiterId
* Delete a single recruiter.
*
* recruiterId String The name that needs to be deleted
* returns EmptyResponse
* */
const deleteRecruiter = ({ recruiterId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        recruiterId,
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
* Get recruiters
* Get recruiters
*
* recruiterPagination RecruiterPagination Get recruiter object (optional)
* returns getRecruiter_200_response
* */
const getRecruiter = ({ recruiterPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        recruiterPagination,
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
* Get recruiter by recruiterId
* get a single recruiter
*
* recruiterId String The Id of the recruiter to be fetched. 
* returns createRecruiter_200_response
* */
const getRecruiterById = ({ recruiterId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        recruiterId,
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
* Update recruiter by recruiterId
* Update the recruiter by their Id.
*
* recruiterId String Id of the recuriter that need to be updated
* recruiterCreated RecruiterCreated Update an existent recruiter (optional)
* returns createRecruiter_200_response
* */
const updateRecruiter = ({ recruiterId, recruiterCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        recruiterId,
        recruiterCreated,
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
  createRecruiter,
  deleteRecruiter,
  getRecruiter,
  getRecruiterById,
  updateRecruiter,
};
