/* eslint-disable no-unused-vars */
const { StatusCodes } = require('http-status-codes');
const Service = require('./Service');
const TechnologySchema = require('../models/technology');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const { utilsFunctions, Pagination } = require('../utils');

const technologyName = 'Tecnologia';

/**
 * Create technology
 * The creation of a new technology.
 *
 * technology Technology Create technology object
 * returns createTechnology_200_response
 * */
const createTechnology = async ({ technology }) => {
  if (!technology) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.noBodyRequest);
  }

  const newTechnology = await TechnologySchema.create(technology);

  return {
    code: StatusCodes.CREATED,
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        technologyName,
        SHORTTEXTREPONSE.created,
      ),
      content: newTechnology,
    },
  };
};
/**
/**
* Delete technology
* delete technology
*
* technologyId String Id of the technology
* returns EmptyResponse
* */
const deleteTechnology = async ({ technologyId }) => {
  const technology = await TechnologySchema.findById(technologyId);

  if (!technology) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(
        technologyName,
        SHORTTEXTREPONSE.notFound,
      ),
    );
  }

  await TechnologySchema.deleteOne({ _id: technologyId });
  const count = await TechnologySchema.countDocuments({ _id: technologyId }); // should be 0

  if (count) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        technologyName,
        SHORTTEXTREPONSE.deleted,
      ),
      content: {},
    },
  };
};
/**
 * get technology
 * get technology
 *
 * technologyId String Id of the technology
 * returns createTechnology_200_response
 * */
const getSingleTechnology = async ({ technologyId }) => {
  const technology = await TechnologySchema.findById(technologyId);

  if (!technology) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(
        technologyName,
        SHORTTEXTREPONSE.notFound,
      ),
    );
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        technologyName,
        SHORTTEXTREPONSE.found,
      ),
      content: technology,
    },
  };
};
/**
 * get technologys
 * get technologys
 *
 * technologyPagination TechnologyPagination Created technology object
 * returns getTechnologys_200_response
 * */
const getTechnologys = async ({ technologyPagination }) => {
  const { filter, pagination } = technologyPagination;

  const paginationClass = new Pagination(pagination);
  let queryPagination = paginationClass.queryPagination();

  const technology = await TechnologySchema.find(filter, null, queryPagination);
  const count = await TechnologySchema.countDocuments(filter);

  queryPagination = { quantity: count, page: paginationClass.page };

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        technologyName,
        SHORTTEXTREPONSE.found,
      ),
      content: technology,
      pagination: new Pagination(queryPagination),
    },
  };
};
/**
 * update technology
 * update technology
 *
 * technologyId String Id of the technology
 * technologyCreated TechnologyCreated Created technology object
 * returns createTechnology_200_response
 * */
const updateTechnology = async ({ technologyId, technologyCreated }) => {
  if (technologyId !== technologyCreated._id) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.errorId);
  }

  const technology = await TechnologySchema.findById(technologyId);

  if (!technology) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(
        technologyName,
        SHORTTEXTREPONSE.notFound,
      ),
    );
  }

  const { _id, ...values } = technologyCreated;

  const updated = await TechnologySchema.updateOne({ _id }, values);

  if (updated.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  const technologyUpdated = await TechnologySchema.findById(technologyId);

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        technologyName,
        SHORTTEXTREPONSE.updated,
      ),
      content: technologyUpdated,
    },
  };
};

module.exports = {
  createTechnology,
  deleteTechnology,
  getSingleTechnology,
  getTechnologys,
  updateTechnology,
};
