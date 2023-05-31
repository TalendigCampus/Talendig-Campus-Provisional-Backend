const mongoose = require('mongoose');

const TalentAssignmentSchema = new mongoose.Schema({
  talentId: {
    type: mongoose.Types.ObjectId,
    ref: 'Talent',
    required: [true, 'Por favor, agregar ID al que le pertenece el Talento'],
  },
  assginmentId: {
    type: mongoose.Types.ObjectId,
    ref: 'Bootcamp',
    required: [true, 'Por favor, agregar ID al que le pertenece el Bootcamp'],
  },
  grade: {
    type: Number,
  },
  completedDate: {
    type: Date,
  },
  instructorComment: {
    instructorId: {
      type: mongoose.Types.ObjectId,
      ref: 'Instructor',
      required: [true, 'Por favor, agregar ID al que le pertenece el Instructor'],
    },
    comment: {
      type: String,
      trim: true,
    },
  },
  statusId: {
    type: mongoose.Types.ObjectId,
    trim: true,
    ref: 'Status',
    required: [true, 'Por favor, coloque un estado'],
  },
});

module.exports = mongoose.model('TalentAssignment', TalentAssignmentSchema);
