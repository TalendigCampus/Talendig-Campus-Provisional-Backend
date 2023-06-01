const mongoose = require('mongoose');

const TalentInstructorchema = new mongoose.Schema({
  talentId: {
    type: mongoose.Types.ObjectId,
    ref: 'Talent',
    required: [true, 'Por favor, agregar ID al que le pertenece el Talento'],
  },
  instructorId: {
    type: mongoose.Types.ObjectId,
    ref: 'Instructor',
    required: [true, 'Por favor, agregar ID al que le pertenece el Instructor'],
  },
  rating: {
    comments: {
      type: String,
      trim: true,
    },
    recommended: {
      type: Boolean,
      required: [true, 'Por favor, coloque si el talento es recomendado o no'],
    },
  },
  statusId: {
    type: mongoose.Types.ObjectId,
    trim: true,
    ref: 'Status',
    required: [true, 'Por favor, coloque un estado'],
  },
});

module.exports = mongoose.model('TalentBootcamp', TalentInstructorchema);
