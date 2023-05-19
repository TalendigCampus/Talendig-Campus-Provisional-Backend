const mongoose = require('mongoose');

const RecruiterSchema = new mongoose.Schema({
  gender: {
    type: String,
    enum: ['Femenino', 'Masculino', 'Otro'],
    required: [true, 'Por favor, selecciona un género'],
  },

  languages: {
    type: [mongoose.Types.ObjectId],
    ref: 'Language',
    required: [true, 'Por favor, selecciona un idioma'],
  },

  companyDetails: {
    type: [mongoose.Types.ObjectId],
    ref: 'CompanyDetail',
    required: [true, 'Por favor, agregar los datos de la compañia'],
  },

  contacts: {
    type: [mongoose.Types.ObjectId],
    ref: 'Contact',
    required: [true, 'Por favor, agregar el contacto de emergencia'],
  },

  birthDate: {
    type: Date,
    required: [true, 'Por favor, agregar fecha de nacimiento'],
  },

  education: {
    type: [mongoose.Types.ObjectId],
    ref: 'Education',
    required: [true, 'Por favor, agregar la educación'],
  },

  workExperience: {
    type: [mongoose.Types.ObjectId],
    ref: 'WorkExperience',
    required: [true, 'Por favor, agregar la experiencia laboral'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Recruiter', RecruiterSchema);
