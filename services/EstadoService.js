/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* create a state
* create a new state
*
* state State Create state object
* returns createState_200_response
* */
const createStatus = ({ state }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        state,
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
* delete a state
* delete a state
*
* stateId String id of the state
* returns EmptyResponse
* */
const deleteStatus = ({ stateId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        stateId,
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
* get state for user
* get state.
*
* stateId String Id of the state
* returns createState_200_response
* */
const getSingleStatus = ({ stateId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        stateId,
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
* get states info
* state info
*
* statePagination StatePagination Created state object
* returns getStates_200_response
* */
const getStatus = ({ statePagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        statePagination,
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
* update a state
* update a state
*
* stateId String Id of the state
* stateCreated StateCreated Created contact object
* returns createState_200_response
* */
const updateStatus = ({ stateId, stateCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        stateId,
        stateCreated,
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
  createStatus,
  deleteStatus,
  getSingleStatus,
  getStatus,
  updateStatus,
};
