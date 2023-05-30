const mongoose = require('mongoose');

const TalentBootcampSchema = new mongoose.Schema({
  talentId: {
    type: mongoose.Types.ObjectId,
    ref: 'Talent',
    required: [true, 'Por favor, agregar ID al que le pertenece el Talento'],
  },
  bootcampId: {
    type: mongoose.Types.ObjectId,
    ref: 'Bootcamp',
    required: [true, 'Por favor, agregar ID al que le pertenece el Bootcamp'],
  },
  rating: {
    comments: {
      type: String,
      trim: true,
    },
    score: {
      type: Number,
      enum: [1, 2, 3, 4, 5],
      default: 1,
    },
  },
  recommendedFromBootcamp: {
    type: Boolean,
  },
  statusId: {
    type: mongoose.Types.ObjectId,
    trim: true,
    ref: 'Status',
    required: [true, 'Por favor, coloque un estado'],
  },
});

module.exports = mongoose.model('TalentBootcamp', TalentBootcampSchema);
