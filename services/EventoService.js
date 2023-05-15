/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create event for user
* The creation of a new event.
*
* event Event Create event object
* returns createEvent_200_response
* */
const createEvent = ({ event }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        event,
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
* Delete event
* delete event.
*
* eventId String Id of the event
* returns EmptyResponse
* */
const deleteEvent = ({ eventId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        eventId,
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
* get events
* get events.
*
* eventPagination EventPagination Created event object
* returns getEvents_200_response
* */
const getEvents = ({ eventPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        eventPagination,
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
* get single event
* get single event
*
* eventId String Id of the event
* returns createEvent_200_response
* */
const getSingleEvent = ({ eventId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        eventId,
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
* update event for user
* update event.
*
* eventId String Id of the contact
* eventCreated EventCreated Created contact object
* returns createEvent_200_response
* */
const updateEvent = ({ eventId, eventCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        eventId,
        eventCreated,
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
  createEvent,
  deleteEvent,
  getEvents,
  getSingleEvent,
  updateEvent,
};
