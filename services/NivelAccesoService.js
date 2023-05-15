/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create accessLevel
* The creation of a new accessLevel.
*
* accessLevel AccessLevel Create accessLevel object
* returns createAccessLevel_200_response
* */
const createAccessLevel = ({ accessLevel }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        accessLevel,
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
* Delete accessLevel
* delete accessLevel
*
* accessLevelId String Id of the accessLevel
* returns EmptyResponse
* */
const deleteAccessLevel = ({ accessLevelId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        accessLevelId,
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
* get accessLevels
* get accessLevels
*
* accessLevelPagination AccessLevelPagination Create accessLevel object
* returns getAccessLevels_200_response
* */
const getAccessLevels = ({ accessLevelPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        accessLevelPagination,
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
* get accessLevel
* get accessLevel
*
* accessLevelId String Id of the accessLevel
* returns createAccessLevel_200_response
* */
const getSingleAccessLevel = ({ accessLevelId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        accessLevelId,
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
* update accessLevel
* update accessLevel
*
* accessLevelId String Id of the accessLevel
* accessLevelCreated AccessLevelCreated Created accessLevel object
* returns createAccessLevel_200_response
* */
const updateAccessLevel = ({ accessLevelId, accessLevelCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        accessLevelId,
        accessLevelCreated,
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
  createAccessLevel,
  deleteAccessLevel,
  getAccessLevels,
  getSingleAccessLevel,
  updateAccessLevel,
};
