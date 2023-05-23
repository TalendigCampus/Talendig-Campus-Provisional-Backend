/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create portfolio
* Add portfolio
*
* portfolio Portfolio Create portfolio (optional)
* returns createPortfolio_200_response
* */
const createWorkExperience = ({ education }) => new Promise(
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
const deleteWorkExperience = ({ educationId }) => new Promise(
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
const getWorkExperience = ({ educationId }) => new Promise(
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
const getWorkExperiences = ({ educationPagination }) => new Promise(
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

const updateWorkExperience = ({ educationId, educationCreated }) => {

};

module.exports = {
  createWorkExperience,
  deleteWorkExperience,
  getWorkExperience,
  getWorkExperiences,
  updateWorkExperience,
};
