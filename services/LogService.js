/* eslint-disable no-unused-vars */
const Service = require('./Service');
const logSchema = require('../models/log');
const utility = require('../utils');

/**
* Create log
* The creation of a new log.
*
* log Log Create log object
* returns createLog_200_response
* */
const createLog = ({ log }) => {

  const logData = {};
  const entityName = 'Log'

  if (!log) {
    throw new CustomAPIError.BadRequestError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }
    logData = logSchema.create(log);
  return {
    payload: {
      hasError: false,
      message: '',
      content: logData,
    },
  };
};
/**
* Delete log
* delete log
*
* logId String Id of the log
* returns EmptyResponse
* */
const deleteLog = async ({ logId }) => {

  const log = await utility.logUtils.getLogById(logId);
  const entityName = 'Log';

  if (!log) {
    throw new CustomAPIError.NotFoundError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }
  await utility.logUtils.deleteLogById(log._id);

  return {
    payload: {
      hasError: false,
      message: utility.utilsFunctions.textResponseFormat(entityName,SHORTTEXTREPONSE.deleted),
      content: {},
    },
  };
  
}; 
/**
* get logs
* get logs
*
* logPagination LogPagination Created log object
* returns getLogs_200_response
* */
const getLogs = ({ logPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        logPagination,
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
* get log
* get log.
*
* logId String Id of the log
* returns createUserContact_200_response
* */
const getSingleLog = ({ logId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        logId,
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
* update log
* update log.
*
* logId String Id of the log
* contactCreated ContactCreated Created log object
* returns createUserContact_200_response
* */
const updateLog = ({ logId, contactCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        logId,
        contactCreated,
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
  createLog,
  deleteLog,
  getLogs,
  getSingleLog,
  updateLog,
};
