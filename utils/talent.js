const TalentSchema = require('../models/talent');
const { isUserActive } = require('./user');

const getTalentById = async (talentId) => TalentSchema.findById(talentId);

const isTalentActive = async (talentId) => {
  const talent = await getTalentById(talentId);

  if (!talent) {
    return false;
  }

  const status = await isUserActive(talentId);

  return status;
};

module.exports = {
  getTalentById,
  isTalentActive,
};
