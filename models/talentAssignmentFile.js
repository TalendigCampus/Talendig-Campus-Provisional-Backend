const mongoose = require('mongoose');

const TalentAssignmentFileSchema = new mongoose.Schema({
  talentAssignmentId: {
    type: mongoose.Types.ObjectId,
    ref: 'TalentAssignment',
    required: [true, 'Por favor, agregar ID al que le pertenece la Tarea del talento'],
  },
  fileId: {
    type: mongoose.Types.ObjectId,
    ref: 'File',
    required: [true, 'Por favor, agregar ID al que le pertenece al Archivo'],
  },
  statusId: {
    type: mongoose.Types.ObjectId,
    trim: true,
    ref: 'Status',
    required: [true, 'Por favor, coloque un estado'],
  },
});

module.exports = mongoose.model('TalentAssignmentFile', TalentAssignmentFileSchema);
