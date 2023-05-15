/**
 * The UsuarioController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/UsuarioService');
const addUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.addUser);
};

const deleteUsuario = async (request, response) => {
  await Controller.handleRequest(request, response, service.deleteUsuario);
};

const getAllUsers = async (request, response) => {
  await Controller.handleRequest(request, response, service.getAllUsers);
};

const getUserById = async (request, response) => {
  await Controller.handleRequest(request, response, service.getUserById);
};

const logInUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.logInUser);
};

const logOutUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.logOutUser);
};

const updateUser = async (request, response) => {
  await Controller.handleRequest(request, response, service.updateUser);
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
