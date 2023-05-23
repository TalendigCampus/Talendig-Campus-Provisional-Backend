/* eslint-disable no-unused-vars */
const { StatusCodes } = require('http-status-codes');
const Service = require('./Service');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const { textResponseFormat } = require('../utils/utilsFunctions');
const { getStatusIdByName } = require('../utils/status');
const UserSchema = require('../models/user');

const userName = 'Usuario';

/**
* Add a new usuario to the store
* Add a new usuario to the store
*
* user User Create a new usuario in the store
* returns getUserById_200_response
* */
const addUser = async ({ user }) => {
  if (!user) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.serverError);
  }

  const preUser = user;
  preUser.avatar = user.name[0].toUpperCase() + user.lastName[0].toUpperCase();
  preUser.statusId = await getStatusIdByName('active');

  const userCreated = await UserSchema.create(preUser);

  if (!userCreated) {
    
  }

  return {
    code: StatusCodes.CREATED,
    payload: {
      hasError: false,
      message: textResponseFormat(userName, SHORTTEXTREPONSE.found),
      content: userCreated,
    },
  };
};
/**
* Deletes a usuario
* delete a usuario
*
* userId String Usuario id to delete
* returns EmptyResponse
* */
const deleteUsuario = async ({ userId }) => {
  const statusId = await getStatusIdByName('inactive');
  const userDeleted = await UserSchema.findByIdAndUpdate(userId, { statusId });

  if (userDeleted) {

  }

  // return {
  //   payload: {
  //     hasError: false,
  //     message: textResponseFormat(userName, SHORTTEXTREPONSE.deleted),
  //     content: {},
  //   },
  // };
};
/**
* Get all users
* Get a list of users from the store
*
* userPagination UserPagination Get list of users with filter and pagination (optional)
* returns getAllUsers_200_response
* */
const getAllUsers = ({ userPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userPagination,
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
* Find user by ID
* Returns a single user
*
* userId String ID of user to return
* returns getUserById_200_response
* */
const getUserById = ({ userId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userId,
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
* Login user
* Log an user in
*
* credentials Credentials Log users in to use the app (optional)
* returns EmptyResponse
* */
const logInUser = ({ credentials }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        credentials,
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
* Logout user
* Log an user out
*
* userToken String userToken of user that need to be Logged Out
* returns EmptyResponse
* */
const logOutUser = ({ userToken }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userToken,
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
* Update an existing user
* Update an existing user by Id
*
* userId String userId of user that need to be updated
* userCreated UserCreated Update an existent user in the store
* returns getUserById_200_response
* */
const updateUser = ({ userId, userCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        userId,
        userCreated,
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
  addUser,
  deleteUsuario,
  getAllUsers,
  getUserById,
  logInUser,
  logOutUser,
  updateUser,
};
