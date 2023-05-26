/* eslint-disable no-unused-vars */
const Service = require('./Service');
const Institution = require('../models/institution.js');
const Intership = require('../models/intership.js');
const IntershipTalent = require('../models/intershipTalent.js');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const { textResponseFormat } = require('../utils/utilsFunctions');
const utility = require('../utils');

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
const deleteInstitutionById = async ({ institutionId }) => {

  const institution = await utility.institutionUtils.getInstitutionById(institutionId);
  const entityName = 'Intership';

  if (!institution) {
    throw new CustomAPIError.NotFoundError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }
  await utility.userUtils.deleteUserById(institution.userId);

  return {
    payload: {
      hasError: false,
      message: utility.utilsFunctions.textResponseFormat(entityName,SHORTTEXTREPONSE.deleted),
      content: {},
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
const deleteIntershipById = async ({ intershipId }) => {
  const intership = await utility.intershipUtils.getIntershipById(intershipId);
  const entityName = 'Intership';

  if (!intership) {
    throw new CustomAPIError.NotFoundError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }
  await utility.intershipUtils.deleteIntershipById(intership._id);

  return {
    payload: {
      hasError: false,
      message: utility.utilsFunctions.textResponseFormat(entityName,SHORTTEXTREPONSE.deleted),
      content: {},
    },
  };
};
/**
* Delete intershipTalent
* Delete a intershipTalent by userId
*
* intershipTalentId String Id that need to be deleted
* returns EmptyResponse
* */
const deleteIntershipTalentById = async ({ intershipTalentId }) => {
  const intershipTalent = await utility.intershipUtils.getIntershipTalentById(intershipTalentId);
  const entityName = 'IntershipTalent';

  if (!intershipTalent) {
    throw new CustomAPIError.NotFoundError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }
  await utility.intershipUtils.deleteIntershipTalentById(intershipTalent._id);

  return {
    payload: {
      hasError: false,
      message: utility.utilsFunctions.textResponseFormat(entityName,SHORTTEXTREPONSE.deleted),
      content: {},
    },
  };
};
/**
* Find institution by ID
* Returns a single institution
*
* institutionId String ID of institution to return
* returns createInstitution_200_response
* */
const getInstitutionById = async ({ institutionId }) => {

  const institutionData = await utility.institutionUtils.getInstitutionById(institutionId);
  const entityName = 'Institution';

  if (!institutionId) {
    throw new CustomAPIError.NotFoundError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }

  return {
    payload: {
      hasError: false,
      message: '',
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
const getIntershipById = ({ intershipId }) => {

  const intershipData = utility.intershipUtils.getIntershipById(intershipId);
  const entityName = 'Intership';

  if (!intershipData) {
    throw new CustomAPIError.NotFoundError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }

  return {
    payload: {
      hasError: false,
      message: '',
      content: intershipData,
    },
  };
};
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
const getIntershipTalentCreatedById = ({ intershipTalentId }) => {

  const intershipTalentData = utility.intershipUtils.getIntershipTalentById(intershipTalentId);
  const entityName = 'IntershipTalent';

  if (!intershipTalentData) {
    throw new CustomAPIError.NotFoundError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }

  return {
    payload: {
      hasError: false,
      message: '',
      content: intershipTalentData,
    },
  };
};
/**
* Update an existing institution
* Update an existing institution by Id
*
* institutionId String Id of institution that need to be update
* institutionCreated InstitutionCreated Update an existent institution in the store
* returns createInstitution_200_response
* */
const updateInstitution = async ({ institutionId, institutionCreated }) => {

  const entityName = 'Institution';

  if (institutionId !== institutionCreated._id) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.errorId);
  }

  const { _id, ...values } = institutionCreated;

  const updated = await Institution.updateOne({ _id }, values);

  if (updated.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  const institutionUpdated = await utility.institutionUtils.getInstitutionById(institutionId);

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(entityName, SHORTTEXTREPONSE.updated),
      content: institutionUpdated,
    },
  };
};
/**
* Update an existing intership
* Update an existing intership by Id
*
* intershipId String ID of intership to update
* intershipCreated IntershipCreated Update an existent intership in the store (optional)
* returns createIntership_200_response
* */
const updateIntershipId = async ({ intershipId, intershipCreated }) => {

  const entityName = 'Instership';

  if (intershipId !== intershipCreated._id) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.errorId);
  }

  const { _id, ...values } = intershipCreated;

  const updated = await Intership.updateOne({ _id }, values);

  if (updated.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  const intershipUpdated = await utility.intershipUtils.getIntershipById(intershipId);

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(entityName, SHORTTEXTREPONSE.updated),
      content: intershipUpdated,
    },
  };
};
/**
* Update an existing intershipTalent
* Update an existing intershipTalent by Id
*
* intershipTalentId String ID of intershipTalent to update
* intershipTalentCreated IntershipTalentCreated Update an existent intershipTalent in the store (optional)
* returns createIntershipTalent_200_response
* */
const updateIntershipTalentId = async ({ intershipTalentId, intershipTalentCreated }) => {

  const entityName = 'IntershipTalent';

  if (intershipTalentId !== intershipTalentCreated._id) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.errorId);
  }

  const { _id, ...values } = intershipTalentCreated;

  const updated = await IntershipTalent.updateOne({ _id }, values);

  if (updated.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  const intershipTalentUpdated = await utility.intershipUtils.getIntershipTalentById(intershipTalentId);

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(entityName, SHORTTEXTREPONSE.updated),
      content: intershipTalentUpdated,
    },
  };
};

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
