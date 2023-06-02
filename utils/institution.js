const InstitutionSchema = require('../models/institution');
const userFunctions = require('./user');

const getInstitutionById = async (institutionId) => InstitutionSchema.findById(institutionId);

const getUserByInstitutionId = async (institutionId) => {
  const institution = await getInstitutionById(institutionId);
  if (!institution) return null;

  return userFunctions.getUserById(institution.userId);
};

const isInstitutionActive = async (institutionId) => {
  const institution = await getInstitutionById(institutionId);

  if (!institution) {
    return false;
  }

  const status = await userFunctions.isUserActive(institutionId);

  return status;
};

module.exports = {
  getInstitutionById,
  getUserByInstitutionId,
  isInstitutionActive,
};
