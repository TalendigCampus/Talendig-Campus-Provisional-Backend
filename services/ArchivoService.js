/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create file
* The creation of a new file.
*
* file File Create file object
* returns createFile_200_response
* */
const createFile = ({ file }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        file,
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
* Delete file
* delete file
*
* fileId String Id of the file
* returns EmptyResponse
* */
const deleteFile = ({ fileId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        fileId,
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
* get files
* get files.
*
* filePagination FilePagination Created contact object
* returns getFiles_200_response
* */
const getFiles = ({ filePagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        filePagination,
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
* get single file.
* get single file.
*
* fileId String Id of the file
* returns createFile_200_response
* */
const getSingleFile = ({ fileId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        fileId,
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
* update file
* update file.
*
* fileId String Id of the file
* fileCreated FileCreated Created contact object
* returns createFile_200_response
* */
const updateFile = ({ fileId, fileCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        fileId,
        fileCreated,
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
  createFile,
  deleteFile,
  getFiles,
  getSingleFile,
  updateFile,
};
