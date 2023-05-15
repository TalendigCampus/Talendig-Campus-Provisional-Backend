/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create technology
* The creation of a new technology.
*
* technology Technology Create technology object
* returns createTechnology_200_response
* */
const createTechnology = ({ technology }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        technology,
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
* Delete technology
* delete technology
*
* technologyId String Id of the technology
* returns EmptyResponse
* */
const deleteTechnology = ({ technologyId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        technologyId,
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
* get technology
* get technology
*
* technologyId String Id of the technology
* returns createTechnology_200_response
* */
const getSingleTechnology = ({ technologyId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        technologyId,
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
* get technologys
* get technologys
*
* technologyPagination TechnologyPagination Created technology object
* returns getTechnologys_200_response
* */
const getTechnologys = ({ technologyPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        technologyPagination,
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
* update technology
* update technology
*
* technologyId String Id of the technology
* technologyCreated TechnologyCreated Created technology object
* returns createTechnology_200_response
* */
const updateTechnology = ({ technologyId, technologyCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        technologyId,
        technologyCreated,
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
  createTechnology,
  deleteTechnology,
  getSingleTechnology,
  getTechnologys,
  updateTechnology,
};
