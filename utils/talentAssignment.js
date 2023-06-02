const TalentAssignmentSchema = require('../models/file');
const statusFunctions = require('./status');

const getTalentAssignmentById = async (talentAssignmentId) => TalentAssignmentSchema.findById(talentAssignmentId);

const isTalentAssignmentActive = async (talentAssignmentId) => {
  const talentAssignment = await getTalentAssignmentById(talentAssignmentId);

  if (!talentAssignment) {
    return false;
  }

  return statusFunctions.isActive(talentAssignment.statusId);
};

module.exports = {
    getTalentAssignmentById,
    isTalentAssignmentActive,
};
