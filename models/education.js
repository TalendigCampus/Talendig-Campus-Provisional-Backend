const mongoose = require('mongoose');
const AddressSchema = require('./commons/address');

const EducationSchema = new mongoose.Schema({
  schoolName: {
    type: String,
    required: [
      true,
      'Por favor, selecciona un nombre para el centro educativo',
    ],
    trim: true,
  },
  startDate: {
    type: Date,
    required: [true, 'Por favor, selecciona una fecha de inicio'],
  },
  endDate: {
    type: Date,
  },
  degreeAchived: {
    type: String,
    required: [true, 'Por favor, selecciona un grado alcanzado'],
    trim: true,
  },
  address: AddressSchema,
});

module.exports = mongoose.model('Education', EducationSchema);
