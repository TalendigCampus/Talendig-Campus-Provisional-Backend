/* eslint-disable no-unused-vars */
const { StatusCodes } = require('http-status-codes');
const Service = require('./Service');
const AccessLevelSchema = require('../models/accessLevel');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const { utilsFunctions, statusUtils, Pagination } = require('../utils');

const accessLevelName = 'Nivel de acceso';

/**
* Create accessLevel
* The creation of a new accessLevel.
*
* accessLevel AccessLevel Create accessLevel object
* returns createAccessLevel_200_response
* */
const createAccessLevel = async ({ accessLevel }) => {
  if (!accessLevel) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.noBodyRequest);
  }

  const newAccessLevel = await AccessLevelSchema.create(accessLevel);

  return {
    code: StatusCodes.CREATED,
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        accessLevelName,
        SHORTTEXTREPONSE.created,
      ),
      content: newAccessLevel,
    },
  };
};
/**
* Delete accessLevel
* delete accessLevel
*
* accessLevelId String Id of the accessLevel
* returns EmptyResponse
* */
const deleteAccessLevel = async ({ accessLevelId }) => {
  const accessLevel = await AccessLevelSchema.findById(accessLevelId);

  if (!accessLevel) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(accessLevelName, SHORTTEXTREPONSE.notFound),
    );
  }

  const statusId = await statusUtils.getStatusIdByName('inactive');
  const accessLevelDeleted = await AccessLevelSchema.updateOne(
    { _id: accessLevelId },
    { statusId },
  );

  if (accessLevelDeleted.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        accessLevelName,
        SHORTTEXTREPONSE.deleted,
      ),
      content: {},
    },
  };
};
/**
* get accessLevels
* get accessLevels
*
* accessLevelPagination AccessLevelPagination Create accessLevel object
* returns getAccessLevels_200_response
* */
const getAccessLevels = async ({ accessLevelPagination }) => {
  const { filter, pagination } = accessLevelPagination;

  const paginationClass = new Pagination(pagination);
  let queryPagination = paginationClass.queryPagination();

  const accessLevels = await AccessLevelSchema.find(filter, null, queryPagination);
  const count = await AccessLevelSchema.countDocuments(filter);

  queryPagination = { quantity: count, page: paginationClass.page };

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        accessLevelName,
        SHORTTEXTREPONSE.found,
      ),
      content: accessLevels,
      pagination: new Pagination(queryPagination),
    },
  };
};
/**
* get accessLevel
* get accessLevel
*
* accessLevelId String Id of the accessLevel
* returns createAccessLevel_200_response
* */
const getSingleAccessLevel = async ({ accessLevelId }) => {
  const accessLevel = await AccessLevelSchema.findById(accessLevelId);

  if (!accessLevel) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(accessLevelName, SHORTTEXTREPONSE.notFound),
    );
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        accessLevelName,
        SHORTTEXTREPONSE.found,
      ),
      content: accessLevel,
    },
  };
};
/**
* update accessLevel
* update accessLevel
*
* accessLevelId String Id of the accessLevel
* accessLevelCreated AccessLevelCreated Created accessLevel object
* returns createAccessLevel_200_response
* */
const updateAccessLevel = async ({ accessLevelId, accessLevelCreated }) => {
  if (accessLevelId !== accessLevelCreated._id) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.errorId);
  }

  const accessLevel = await AccessLevelSchema.findById(accessLevelId);

  if (!accessLevel) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(accessLevelName, SHORTTEXTREPONSE.notFound),
    );
  }

  const { _id, ...values } = accessLevelCreated;

  const updated = await AccessLevelSchema.updateOne({ _id }, values);

  if (updated.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  const accessLevelUpdated = await AccessLevelSchema.findById(accessLevelId);

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        accessLevelName,
        SHORTTEXTREPONSE.updated,
      ),
      content: accessLevelUpdated,
    },
  };
};

module.exports = {
  createAccessLevel,
  deleteAccessLevel,
  getAccessLevels,
  getSingleAccessLevel,
  updateAccessLevel,
};
