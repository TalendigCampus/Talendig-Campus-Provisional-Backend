/* eslint-disable no-unused-vars */
const { StatusCodes } = require('http-status-codes');
const Profile = require('../models/profile');
const Service = require('./Service');
const CustomAPIError = require('../errors/index');
const ProfileSchema = require('../models/profile');
const {
  utilsFunctions,
  recruiterUtils,
  userUtils,
  Pagination,
} = require('../utils');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');

const profileName = 'Profile';

/**
 * Create profile
 * The creation of a new profile.
 *
 * profile Profile Create profile object
 * returns createProfile_200_response
 * */

const createProfile = async ({ profile }) => {
  if (!profile) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.noBodyRequest);
  }

  const profileCreated = await ProfileSchema.create(profile);

  return {
    code: StatusCodes.CREATED,
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        profileName,
        SHORTTEXTREPONSE.created,
      ),
      content: profileCreated,
    },
  };
};
/**
 * Delete profile
 * delete profile
 *
 * profileId String Id of the profile
 * returns EmptyResponse
 * */

const deleteProfile = async ({ profileId }) => {
  const profile = await ProfileSchema.findById(profileId);

  if (!profile) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(profileName, SHORTTEXTREPONSE.notFound),
    );
  }

  await ProfileSchema.deleteOne({ _id: profileId });

  const testProfile = await ProfileSchema.countDocuments({ _id: profileId });

  if (testProfile) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        profileName,
        SHORTTEXTREPONSE.deleted,
      ),
      content: {},
    },
  };
};
/**
 * get profiles
 * get profiles
 *
 * profilePagination ProfilePagination Created profile object
 * returns getProfiles_200_response
 * */

const getProfiles = async ({ profilePagination }) => {
  const { filter, pagination } = profilePagination;

  const paginationClass = new Pagination(pagination);
  let queryPagination = paginationClass.queryPagination();

  const profile = await ProfileSchema.find(filter, null, queryPagination);
  const count = await ProfileSchema.countDocuments(filter);

  queryPagination = { quantity: count, page: paginationClass.page };

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        profileName,
        SHORTTEXTREPONSE.found,
      ),
      content: profile,
      pagination: new Pagination(queryPagination),
    },
  };
};
/**
 * get profile
 * get profile.
 *
 * profileId String Id of the profile
 * returns createProfile_200_response
 * */

const getSingleProfile = async ({ profileId }) => {
  const profile = await ProfileSchema.findById(profileId);

  if (!profile) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(profileName, SHORTTEXTREPONSE.notFound),
    );
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        profileName,
        SHORTTEXTREPONSE.found,
      ),
      content: profile,
    },
  };
};
/**
 * update profile
 * update profile
 *
 * profileId String Id of the profile
 * profileCreated ProfileCreated Created profile object
 * returns createProfile_200_response
 * */
const updateProfile = async ({ profileId, profileCreated }) => {
  if (profileId !== profileCreated._id) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.errorId);
  }

  const profile = await ProfileSchema.findById(profileId);

  if (!profile) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(profileName, SHORTTEXTREPONSE.notFound),
    );
  }

  const { _id, ...values } = profileCreated;

  const updated = await ProfileSchema.updateOne({ _id }, values);

  if (updated.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        profileName,
        SHORTTEXTREPONSE.updated,
      ),
      content: profile,
    },
  };
};

module.exports = {
  createProfile,
  deleteProfile,
  getProfiles,
  getSingleProfile,
  updateProfile,
};
