const FileSchema = require('../models/file');

const getFileById = async (fileId) => FileSchema.findById(fileId);

const isFileActive = async (fileId) => {
  const file = await getFileById(fileId);

  return file;
};

module.exports = {
  getFileById,
  isFileActive,
};
