const mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  gender: {
    type: String,
    enum: ['Femenino', 'Masculino', 'Otros'],
    default: 'Otros',
  },
  languages: {
    type: [mongoose.Types.ObjectId],
    ref: 'language',
    required: [true, 'Por favor, selecciona un idioma'],
  },
  emergencyContacts: {
    type: [mongoose.Types.ObjectId],
    ref: 'contacts',
    required: [true, 'Por favor, selecciona un contacto de emergencia'],
  },
  birthdate: {
    type: String,
    format: Date,
    required: [true, 'Por favor seleccione una fecha de nacimiento'],
  },
  education: {
    type: [mongoose.Types.ObjectId],
    ref: 'education',
    required: [true, 'Por favor seleccione un tipo de educacion'],
  },
  workExperience: {
    type: [mongoose.Types.ObjectId],
    ref: 'workExperience',
  },
});

module.exports = mongoose.model('Administrator', AdminSchema);
