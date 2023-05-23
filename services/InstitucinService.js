/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create institution
* add a new instritution
*
* institution Institution Created institution object (optional)
* returns createInstitution_200_response
* */
const createInstitution = ({ institution }) => {

  const institutionData = {};
  const entityName = 'Institution';

  // Check if the name is not empty
  if (!institutionData.name) {
    throw new Error('El nombre de la institución es obligatorio');
  }

  // Check if the address is not empty
  if (!institutionData.address) {
    throw new Error('La dirección de la institución es obligatoria');
  }

  // Check if the phone number is not empty
  if (!institutionData.phone) {
    throw new Error('El teléfono de la institución es obligatorio');
  }

  // Check if the website is not empty
  if (!institutionData.website) {
    throw new Error('La página web de la institución es obligatoria');
  }

  // Check if the email is not empty
  if (!institutionData.email) {
    throw new Error('El correo electrónico de la institución es obligatorio');
  }

  // Check if the companyDetails is not empty
  if (!institutionData.companyDetails) {
    throw new Error('Los datos de la compañia son obligatorios');
  }

  // Check if the foundationDate is not empty
  if (!institutionData.companyDetails.foundationDate) {
    throw new Error('La fecha de fundación de la institución es obligatoria');
  }

  // Check if the rnc is not empty
  if (!institutionData.companyDetails.rnc) {
    throw new Error('El RNC es obligatorio');
  }

  // Check if the address is not empty
  if (!institutionData.companyDetails.address) {
    throw new Error('Los datos de la dirección son obligatorios');
  }

  // Check if the ownerDetails is not empty
  if (!institutionData.ownerDetails) {
    throw new Error('Los datos del propietario son obligatorios');
  }

  // Check if the name is not empty
  if (!institutionData.ownerDetails.name) {
    throw new Error('El nombre del propietario es obligatorio');
  }

  // Check if the lastName is not empty
  if (!institutionData.ownerDetails.lastName) {
    throw new Error('El apellido del propietario es obligatorio');
  }

  // Check if the phoneNumber is not empty
  if (!institutionData.ownerDetails.phoneNumber) {
    throw new Error('El número de teléfono del propietario es obligatorio');
  }

  // Check if the rnc is not empty
  if (!institutionData.ownerDetails.rnc) {
    throw new Error('El RNC del propietario es obligatorio');
  }

  // Check if the gender is not empty
  if (!institutionData.ownerDetails.gender) {
    throw new Error('El género del propietario es obligatorio');
  }

  // Check if the languages is not empty
  if (!institutionData.ownerDetails.languages) {
    throw new Error('Los idiomas que domina el propietario son obligatorios');
  }

  // Check if the contact is not empty
  if (!institutionData.ownerDetails.contact) {
    throw new Error('Los contactos de emergencia del propietario son obligatorios');
  }

  // Check if the birthday is not empty
  if (!institutionData.ownerDetails.birthday) {
    throw new Error('La fecha de nacimiento del propietario es obligatoria');
  }

  // Check if the education is not empty
  if (!institutionData.ownerDetails.education) {
    throw new Error('La educación del propietario es obligatoria');
  }

  // Check if the workExperience is not empty
  if (!institutionData.ownerDetails.workExperience) {
    throw new Error('La experiencia laboral del propietario es obligatoria');
  }

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

  if (!intershipData) {
    throw new CustomAPIError.NotFoundError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }

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

  if (!intershipTalendigData) {
    throw new CustomAPIError.NotFoundError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }

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
const deleteInstitutionById = ({ institutionId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        institutionId,
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

  if (!institutionData) {
    throw new CustomAPIError.NotFoundError(
      textResponseFormat(entityName, SHORTTEXTREPONSE.notFound),
    );
  }

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
