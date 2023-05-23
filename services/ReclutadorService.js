/* eslint-disable no-unused-vars */
const { StatusCodes } = require('http-status-codes');
const Service = require('./Service');
const Recruiter = require('../models/recruiter');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const { textResponseFormat } = require('../utils/utilsFunctions');
/**
 * Create recruiter
 * The creation of a new recruiter.
 *
 * recruiter Recruiter Created recruiter object (optional)
 * returns createRecruiter_200_response
 * */
const createRecruiter = async ({ recruiter }) => {
  const entityName = 'Reclutador';

  if (!recruiter) {
    throw new CustomAPIError.BadRequestError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.noBodyRequest),
    );
  }

  const recuiter = await Recruiter.create(recruiter);

  return {
    code: StatusCodes.CREATED,
    payload: {
      hasError: false,
      message: 'Reclutador creado',
      content: recuiter,
    },
  };
};
/**
 * Delete recruiter by recruiterId
 * Delete a single recruiter.
 *
 * recruiterId String The name that needs to be deleted
 * returns EmptyResponse
 * */
const deleteRecruiter = async ({ recruiterId }) => {
  const entityName = 'Reclutador';

  const recruiter = await Recruiter.findOne({ _id: recruiterId });

  if (!recruiter) {
    throw new CustomAPIError.NotFoundError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }

  await recruiter.remove();

  return {
    payload: {
      hasError: false,
      message: 'Reclutador eliminado',
      content: recuiter,
    },
  };
};
/**
 * Get recruiters
 * Get recruiters
 *
 * recruiterPagination RecruiterPagination Get recruiter object (optional)
 * returns getRecruiter_200_response
 * */
const getRecruiter = ({ recruiterPagination }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          recruiterPagination,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * Get recruiter by recruiterId
 * get a single recruiter
 *
 * recruiterId String The Id of the recruiter to be fetched.
 * returns createRecruiter_200_response
 * */
const getRecruiterById = ({ recruiterId }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          recruiterId,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });
/**
 * Update recruiter by recruiterId
 * Update the recruiter by their Id.
 *
 * recruiterId String Id of the recuriter that need to be updated
 * recruiterCreated RecruiterCreated Update an existent recruiter (optional)
 * returns createRecruiter_200_response
 * */
const updateRecruiter = ({ recruiterId, recruiterCreated }) =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(
        Service.successResponse({
          recruiterId,
          recruiterCreated,
        })
      );
    } catch (e) {
      reject(
        Service.rejectResponse(e.message || 'Invalid input', e.status || 405)
      );
    }
  });

module.exports = {
  createRecruiter,
  deleteRecruiter,
  getRecruiter,
  getRecruiterById,
  updateRecruiter,
};
