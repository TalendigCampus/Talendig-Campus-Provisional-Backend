const InstructorSchema = require('../models/instructor');
const userFunctions = require('./user');

const getInstructorById = async (instructorId) => InstructorSchema.findById(instructorId);

const getUserByInstructorId = async (instructorId) => {
  const instructor = await getInstructorById(instructorId);
  if (!instructor) return null;

  return userFunctions.getUserById(instructor.userId);
};

const isRecruiterActive = async (institutionId) => {
  const institution = await getInstructorById(institutionId);

  if (!institution) {
    return false;
  }

  const status = await userFunctions.isUserActive(institutionId);

  return status;
};

module.exports = {
  getInstructorById,
  getUserByInstructorId,
  isRecruiterActive,
};
