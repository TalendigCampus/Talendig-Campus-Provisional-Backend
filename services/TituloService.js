/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create title
* The creation of a new title.
*
* title Title Create title object
* returns createTitle_200_response
* */
const createTitle = ({ title }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        title,
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
* Delete title
* delete title
*
* titleId String Id of the title
* returns EmptyResponse
* */
const deleteTitle = ({ titleId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        titleId,
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
* get title
* get title
*
* titleId String Id of the title
* returns createTitle_200_response
* */
const getSingleTitle = ({ titleId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        titleId,
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
* get titles
* get titles
*
* titlePagination TitlePagination Created title object
* returns getTitles_200_response
* */
const getTitles = ({ titlePagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        titlePagination,
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
* update title
* update title
*
* titleId String Id of the title
* titleCreated TitleCreated Created title object
* returns createTitle_200_response
* */
const updateTitle = ({ titleId, titleCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        titleId,
        titleCreated,
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
  createTitle,
  deleteTitle,
  getSingleTitle,
  getTitles,
  updateTitle,
};
