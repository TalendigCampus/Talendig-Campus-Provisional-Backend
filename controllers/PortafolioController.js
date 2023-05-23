/**
 * The PortafolioController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/PortafolioService');
const createPortfolio = async (request, response) => {
  await Controller.handleRequest(request, response, service.createPortfolio);
};

const deleteportfolio = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteportfolio);
};

const getPortfolio = async (request, response) => {
  await Controller.handleRequest(request, response, service.getPortfolio);
};

const getPortfolios = async (request, response) => {
  await Controller.handleRequest(request, response, service.getPortfolios);
};

module.exports = {
  createPortfolio,
  deleteportfolio,
  getPortfolio,
  getPortfolios,
};
