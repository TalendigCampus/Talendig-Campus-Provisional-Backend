/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create portfolio
* Add portfolio
*
* portfolio Portfolio Create portfolio (optional)
* returns createPortfolio_200_response
* */
const createPortfolio = ({ portfolio }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        portfolio,
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
const deleteportfolio = ({ portfolioId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        portfolioId,
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
const getPortfolio = ({ portfolioId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        portfolioId,
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
const getPortfolios = ({ portfolioPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        portfolioPagination,
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
  createPortfolio,
  deleteportfolio,
  getPortfolio,
  getPortfolios,
};
