/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create portfolio
* Add portfolio
*
* portfolio Portfolio Create portfolio (optional)
* returns createPortfolio_200_response
* */
const createEducation = ({ education }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        education,
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
* delete a portfolio
* delete a portfolio
*
* portfolioId String id of the portfolio
* returns EmptyResponse
* */
const deleteEducation = ({ educationId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        educationId,
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
* get a portfolio
* get a portfolio
*
* portfolioId String id of the portfolio
* returns createPortfolio_200_response
* */
const getEducation = ({ educationId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        educationId,
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
* Get portfolios
* Show portfolios
*
* portfolioPagination PortfolioPagination Get portfolios (optional)
* returns getPortfolios_200_response
* */
const getEducations = ({ educationPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        educationPagination,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

const updateEducation = ({ educationId, educationCreated }) => {

};

module.exports = {
  createEducation,
  deleteEducation,
  getEducation,
  getEducations,
  updateEducation,
};
