const RecruiterSchema = require('../models/recruiter');
const userFunctions = require('./user');

const getRecruiterById = async (recruiterId) => RecruiterSchema.findById(recruiterId);

const getUserByRecruiterId = async (recruiterId) => {
  const recruiter = await getRecruiterById(recruiterId);
  if (!recruiter) return null;

  return userFunctions.getUserById(recruiter.userId);
};

const isRecruiterActive = async (talentId) => {
  const recruiter = await getRecruiterById(talentId);

  if (!recruiter) {
    return false;
  }

  const status = await userFunctions.isUserActive(recruiter.statusId);

  return status;
};

module.exports = {
  getRecruiterById,
  getUserByRecruiterId,
  isRecruiterActive,
};
