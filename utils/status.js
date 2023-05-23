const StatusSchema = require('../models/status');

const getStatusIdByName = async (name) => {
  const statusId = await StatusSchema.findOne({ name });
  return statusId.id;
};

const getStatusById = async (statusId) => StatusSchema.findById(statusId);

module.exports = {
  getStatusIdByName,
  getStatusById,
};