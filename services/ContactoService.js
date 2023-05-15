/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create contact for user
* The creation of a new contact.
*
* contact Contact Created contact object
* returns createUserContact_200_response
* */
const createUserContact = ({ contact }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        contact,
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
* Delete contact for user
* delete of user contact.
*
* contactId String Id of the contact
* returns EmptyResponse
* */
const deleteUserContact = ({ contactId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        contactId,
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
* get contacts for user
* get user contacts.
*
* contactId String Id of the contact
* returns createUserContact_200_response
* */
const getUserContact = ({ contactId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        contactId,
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
* get contacts for user
* get user contacts.
*
* contactPagination ContactPagination Created contact object
* returns getUserContacts_200_response
* */
const getUserContacts = ({ contactPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        contactPagination,
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
* update contact for user
* update user contact.
*
* contactId String Id of the contact
* contactCreated ContactCreated Created contact object
* returns createUserContact_200_response
* */
const updateUserContact = ({ contactId, contactCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        contactId,
        contactCreated,
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
  createUserContact,
  deleteUserContact,
  getUserContact,
  getUserContacts,
  updateUserContact,
};
