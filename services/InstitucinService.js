/* eslint-disable no-unused-vars */
const Service = require('./Service');
const Institution = require('../models/institution.js');
const Intership = require('../models/intership.js');
const IntershipTalent = require('../models/intershipTalent.js');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const { textResponseFormat } = require('../utils/utilsFunctions');
/**
* Create institution
* add a new instritution
*
* institution Institution Created institution object (optional)
* returns createInstitution_200_response
* */
const createInstitution = ({ institution }) => {

  const institutionData = {};

  if (!institution) {
    throw new CustomAPIError.BadRequestError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }
    institutionData = Institution.create(institution);
  return {
    payload: {
      hasError: false,
      message: 'Institution Creado',
      content: institutionData,
    },
  };
};
/**
* Create intership
* Create intership
*
* intership Intership Created intership object (optional)
* returns createIntership_200_response
* */
const createIntership = ({ intership }) => {

  const intershipData = {};
  const entityName = 'Intership';

  if (!intership) {
    throw new CustomAPIError.BadRequestError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }
  intershipData = Intership.create(intership);
  return {
    payload: {
      hasError: false,
      message: 'Intership Creado',
      content: intershipData,
    },
  };
};
/**
* Create intershipTalent
* Create intershipTalent
*
* intershipTalent IntershipTalent Created intershipTalent object (optional)
* returns createIntershipTalent_200_response
* */
const createIntershipTalent = ({ intershipTalent }) => {

  const intershipTalendigData = {};
  const entityName = 'Intership';

  if (!intershipTalent) {
    throw new CustomAPIError.BadRequestError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }
  intershipTalendigData = IntershipTalent.create(intershipTalent);

  return {
    payload: {
      hasError: false,
      message: 'Intership Creado',
      content: intershipTalendigData,
    },
  };
}; 
/**
* Delete institution
* Delete a institution by userId
*
* institutionId String Id of institution that need to be deleted
* returns createInstitution_200_response
* */
const deleteInstitutionById = ({ institutionId }) => {

  const intershipTalendigData = {};
  const entityName = 'Intership';

  if (!intershipTalent) {
    throw new CustomAPIError.NotFoundError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }
  intershipTalendigData = IntershipTalent.findByIdAndDelete(institutionId);

  return {
    payload: {
      hasError: false,
      message: 'Intership Creado',
      content: intershipTalendigData,
    },
  };
}; 
/**
* Delete intership
* Delete a intership by userId
*
* intershipId String Id that need to be deleted
* returns EmptyResponse
* */
const deleteIntershipById = ({ intershipId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        intershipId,
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
* Delete intershipTalent
* Delete a intershipTalent by userId
*
* intershipTalentId String Id that need to be deleted
* returns EmptyResponse
* */
const deleteIntershipTalentById = ({ intershipTalentId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        intershipTalentId,
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
* Find institution by ID
* Returns a single institution
*
* institutionId String ID of institution to return
* returns createInstitution_200_response
* */
const getInstitutionById = ({ institutionId }) => {

  const institutionData = {};
  const entityName = 'Institution';

  if (!institutionId) {
    throw new CustomAPIError.NotFoundError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }

  institutionData = institutionId;

  return {
    payload: {
      hasError: false,
      message: 'Institution obtenido',
      content: institutionData,
    },
  };
};
/**
* Get institution
* Get institutions
*
* institutionPagination InstitutionPagination Get institutions object (optional)
* returns getInstitutions_200_response
* */
const getInstitutions = ({ institutionPagination }) => {

  const institutionData = {};
  const entityName = 'Institution';

  if (!institutionData) {
    throw new CustomAPIError.NotFoundError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }

  return {
    payload: {
      hasError: false,
      message: 'Institutions obtenidos',
      content: institutionData,
    },
  };
};
/**
* Get intership
* Get intership
*
* intershipPagination IntershipPagination Get intership object (optional)
* returns getIntership_200_response
* */
const getIntership = ({ intershipPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        intershipPagination,
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
* Find intership by ID
* Returns a single intership
*
* intershipId String ID of institution to return
* returns createIntership_200_response
* */
const getIntershipById = ({ intershipId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        intershipId,
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
* Get intershipTalent
* Get intershipTalent
*
* intershipTalentPagination IntershipTalentPagination Get intershipTalent object (optional)
* returns getIntershipTalent_200_response
* */
const getIntershipTalent = ({ intershipTalentPagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        intershipTalentPagination,
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
* Find intershipTalent by ID
* Returns a single intership
*
* intershipTalentId String ID of intershipTalent to return
* returns createIntershipTalent_200_response
* */
const getIntershipTalentCreatedById = ({ intershipTalentId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        intershipTalentId,
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
* Update an existing institution
* Update an existing institution by Id
*
* institutionId String Id of institution that need to be update
* institutionCreated InstitutionCreated Update an existent institution in the store
* returns createInstitution_200_response
* */
const updateInstitution = ({ institutionId, institutionCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        institutionId,
        institutionCreated,
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
* Update an existing intership
* Update an existing intership by Id
*
* intershipId String ID of intership to update
* intershipCreated IntershipCreated Update an existent intership in the store (optional)
* returns createIntership_200_response
* */
const updateIntershipId = ({ intershipId, intershipCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        intershipId,
        intershipCreated,
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
* Update an existing intershipTalent
* Update an existing intershipTalent by Id
*
* intershipTalentId String ID of intershipTalent to update
* intershipTalentCreated IntershipTalentCreated Update an existent intershipTalent in the store (optional)
* returns createIntershipTalent_200_response
* */
const updateIntershipTalentId = ({ intershipTalentId, intershipTalentCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        intershipTalentId,
        intershipTalentCreated,
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
  createInstitution,
  createIntership,
  createIntershipTalent,
  deleteInstitutionById,
  deleteIntershipById,
  deleteIntershipTalentById,
  getInstitutionById,
  getInstitutions,
  getIntership,
  getIntershipById,
  getIntershipTalent,
  getIntershipTalentCreatedById,
  updateInstitution,
  updateIntershipId,
  updateIntershipTalentId,
};
