/* eslint-disable no-unused-vars */
const { StatusCodes } = require('http-status-codes');
const Service = require('./Service');
const StatusSchema = require('../models/status');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const { utilsFunctions, Pagination } = require('../utils');

const statusName = 'Estado';
/**
 * create a state
 * create a new state
 *
 * state State Create state object
 * returns createState_200_response
 * */
const createStatus = async ({ status }) => {
  if (!status) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.noBodyRequest);
  }

  const newStatus = await StatusSchema.create(status);

  return {
    code: StatusCodes.CREATED,
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        statusName,
        SHORTTEXTREPONSE.created,
      ),
      content: newStatus,
    },
  };
};
/**
 * delete a state
 * delete a state
 *
 * stateId String id of the state
 * returns EmptyResponse
 * */
const deleteStatus = async ({ statusId }) => {
  const status = await StatusSchema.findById(statusId);

  if (!status) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(statusName, SHORTTEXTREPONSE.notFound),
    );
  }

  await StatusSchema.deleteOne({ _id: statusId });
  const count = await StatusSchema.countDocuments({ _id: statusId }); // should be 0

  if (count) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        statusName,
        SHORTTEXTREPONSE.deleted,
      ),
      content: {},
    },
  };
};
/**
 * get state for user
 * get state.
 *
 * stateId String Id of the state
 * returns createState_200_response
 * */
const getSingleStatus = async ({ statusId }) => {
  const status = await StatusSchema.findById(statusId);

  if (!status) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(statusName, SHORTTEXTREPONSE.notFound),
    );
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        statusName,
        SHORTTEXTREPONSE.found,
      ),
      content: status,
    },
  };
};
/**
 * get states info
 * state info
 *
 * statePagination StatePagination Created state object
 * returns getStates_200_response
 * */
const getStatus = async ({ statusPagination }) => {
  const { filter, pagination } = statusPagination;

  const paginationClass = new Pagination(pagination);
  let queryPagination = paginationClass.queryPagination();

  const status = await StatusSchema.find(filter, null, queryPagination);
  const count = await StatusSchema.countDocuments(filter);

  queryPagination = { quantity: count, page: paginationClass.page };

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        statusName,
        SHORTTEXTREPONSE.found,
      ),
      content: status,
      pagination: new Pagination(queryPagination),
    },
  };
};
/**
 * update a state
 * update a state
 *
 * stateId String Id of the state
 * stateCreated StateCreated Created contact object
 * returns createState_200_response
 * */
const updateStatus = async ({ statusId, statusCreated }) => {
  if (statusId !== statusCreated._id) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.errorId);
  }

  const status = await StatusSchema.findById(statusId);

  if (!status) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(statusName, SHORTTEXTREPONSE.notFound),
    );
  }

  const { _id, ...values } = statusCreated;

  const updated = await StatusSchema.updateOne({ _id }, values);

  if (updated.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  const statusUpdated = await StatusSchema.findById(statusId);

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        statusName,
        SHORTTEXTREPONSE.updated,
      ),
      content: statusUpdated,
    },
  };
};

module.exports = {
  createStatus,
  deleteStatus,
  getSingleStatus,
  getStatus,
  updateStatus,
};
