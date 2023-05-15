/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create report
* The creation of a new report.
*
* report Report Create report object
* returns createReport_200_response
* */
const createReport = ({ report }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        report,
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
* Delete report
* delete report
*
* reportId String Id of the report
* returns EmptyResponse
* */
const deleteReport = ({ reportId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        reportId,
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
* get reports
* get reports
*
* reportPagination ReportPagination Created report object
* returns getReports_200_response
* */
const getReports = ({ reportPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        reportPagination,
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
* get report
* get report
*
* reportId String Id of the report
* returns createReport_200_response
* */
const getSingleReport = ({ reportId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        reportId,
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
* update report
* update report
*
* reportId String Id of the report
* reportCreated ReportCreated Created report object
* returns createReport_200_response
* */
const updateReport = ({ reportId, reportCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        reportId,
        reportCreated,
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
  createReport,
  deleteReport,
  getReports,
  getSingleReport,
  updateReport,
};
