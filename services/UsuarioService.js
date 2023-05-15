/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Add a new usuario to the store
* Add a new usuario to the store
*
* user User Create a new usuario in the store
* returns getUserById_200_response
* */
const addUser = ({ user }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        user,
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
* Deletes a usuario
* delete a usuario
*
* userId String Usuario id to delete
* returns EmptyResponse
* */
const deleteUsuario = ({ userId }) => new Promise(
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
