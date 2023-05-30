const { StatusCodes } = require('http-status-codes');
const { isEmail } = require('validator');
// const Service = require('./Service');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const {
  userUtils, Pagination, statusUtils, utilsFunctions,
} = require('../utils/index');
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
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.noBodyRequest);
  }

  const preUser = user;
  preUser.avatar = user.name[0].toUpperCase() + user.lastName[0].toUpperCase();
  preUser.statusId = await statusUtils.getStatusIdByName('active');

  const userCreated = await UserSchema.create(preUser);

  if (!userCreated) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    code: StatusCodes.CREATED,
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(userName, SHORTTEXTREPONSE.created),
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
const deleteUser = async ({ userId }) => {
  const userExists = await userUtils.getUserById(userId);

  if (!userExists) {
    throw new CustomAPIError.NotFoundError(utilsFunctions
      .textResponseFormat(userName, SHORTTEXTREPONSE.notFound));
  }

  const statusId = await statusUtils.getStatusIdByName('inactive');
  const userDeleted = await UserSchema.updateOne({ _id: userId }, { statusId });

  if (userDeleted.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(userName, SHORTTEXTREPONSE.deleted),
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
  let count = 0;

  try {
    users = await UserSchema.find(filter, null, queryPagination);
    count = await UserSchema.countDocuments(filter);
  } catch (error) {
    throw new Error(error);
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
  const user = await userUtils.getUserById(userId);

  if (!user) {
    throw new CustomAPIError.NotFoundError(utilsFunctions
      .textResponseFormat(userName, SHORTTEXTREPONSE.notFound));
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
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  const userUpdated = await userUtils.getUserById(userId);

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(userName, SHORTTEXTREPONSE.updated),
      content: userUpdated,
    },
  };
};

module.exports = {
  addUser,
  deleteUser,
  getAllUsers,
  getUserById,
  logInUser,
  logOutUser,
  updateUser,
};
