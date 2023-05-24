/* eslint-disable no-unused-vars */
const { StatusCodes } = require('http-status-codes');
const { isEmail } = require('validator');
const Service = require('./Service');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const { textResponseFormat } = require('../utils/utilsFunctions');
const { getStatusIdByName } = require('../utils/status');
const userFunctions = require('../utils/user');
const UserSchema = require('../models/user');
const Pagination = require('../utils/pagination');

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
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.noBodyRequest);
  }

  const preUser = user;
  preUser.avatar = user.name[0].toUpperCase() + user.lastName[0].toUpperCase();
  preUser.statusId = await getStatusIdByName('active');

  const userCreated = await UserSchema.create(preUser);

  if (!userCreated) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    code: StatusCodes.CREATED,
    payload: {
      hasError: false,
      message: textResponseFormat(userName, SHORTTEXTREPONSE.created),
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
  const userExists = await userFunctions.getUserById(userId);

  if (!userExists) {
    throw new CustomAPIError.NotFoundError(textResponseFormat(userName, SHORTTEXTREPONSE.notFound));
  }

  const statusId = await getStatusIdByName('inactive');
  const userDeleted = await UserSchema.updateOne({ _id: userId }, { statusId });

  if (userDeleted.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    payload: {
      hasError: false,
      message: textResponseFormat(userName, SHORTTEXTREPONSE.deleted),
      content: {},
    },
  };
};
/**
* Get all users
* Get a list of users from the store
*
* userPagination UserPagination Get list of users with filter and pagination (optional)
* returns getAllUsers_200_response
* */
const getAllUsers = async ({ userPagination }) => {
  const { filter, pagination } = userPagination;

  const paginationClass = new Pagination(pagination);
  let queryPagination = paginationClass.queryPagination();

  let users = [];
  let count = [];

  try {
    users = await UserSchema.find(filter, null, queryPagination);
    count = await UserSchema.find(filter, null, queryPagination).countDocuments();
  } catch (error) {
    console.log(error);
  }

  queryPagination = { quantity: count, page: paginationClass.page };

  return {
    payload: {
      hasError: false,
      message: '',
      content: users,
      pagination: new Pagination(queryPagination),
    },
  };
};
/**
* Find user by ID
* Returns a single user
*
* userId String ID of user to return
* returns getUserById_200_response
* */
const getUserById = async ({ userId }) => {
  const user = await userFunctions.getUserById(userId);

  if (!user) {
    throw new CustomAPIError.NotFoundError(textResponseFormat(userName, SHORTTEXTREPONSE.notFound));
  }

  return {
    payload: {
      hasError: false,
      message: '',
      content: user,
    },
  };
};
/**
* Login user
* Log an user in
*
* credentials Credentials Log users in to use the app (optional)
* returns EmptyResponse
* */
const logInUser = async ({ credentials }) => {
  const { email, password } = credentials;

  if (!email || !password) {
    throw new CustomAPIError.BadRequestError('Todos los campos son obligatorios');
  }

  if (!isEmail(email)) {
    throw new CustomAPIError.BadRequestError('Introduzca un correo valido');
  }

  const user = await UserSchema.findOne({ email, password });

  if (!user) {
    throw new CustomAPIError.NotFoundError('Estas credenciales no coinciden con un usuario registrado');
  }

  return {
    payload: {
      hasError: false,
      message: '',
      content: {
        email: user.email,
        fullName: `${user.name} ${user.lastName}`,
      },
    },
  };
};
/**
* Logout user
* Log an user out
*
* userToken String userToken of user that need to be Logged Out
* returns EmptyResponse
* */
const logOutUser = ({ userToken }) => ({
  payload: {
    hasError: false,
    message: '',
    content: 'Se ha cerrado la sesión del usuario',
  },
});
/**
* Update an existing user
* Update an existing user by Id
*
* userId String userId of user that need to be updated
* userCreated UserCreated Update an existent user in the store
* returns getUserById_200_response
* */
const updateUser = async ({ userId, userCreated }) => {
  if (userId !== userCreated._id) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.errorId);
  }

  const { _id, ...values } = userCreated;

  const updated = await UserSchema.updateOne({ _id }, values);

  if (updated.modifiedCount !== 1) {
    throw new CustomAPIError.NotFoundError(textResponseFormat(userName, SHORTTEXTREPONSE.notFound));
  }

  const userUpdated = await userFunctions.getUserById(userId);

  return {
    payload: {
      hasError: false,
      message: textResponseFormat(userName, SHORTTEXTREPONSE.updated),
      content: userUpdated,
    },
  };
};

module.exports = {
  addUser,
  deleteUsuario,
  getAllUsers,
  getUserById,
  logInUser,
  logOutUser,
  updateUser,
};
