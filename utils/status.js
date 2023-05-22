const StatusSchema = require('../models/status');

const getStatusIdByName = async (name) => {
  const statusId = await StatusSchema.findOne({ name });
  return statusId.id;
};

module.exports = {
  getStatusIdByName,
};