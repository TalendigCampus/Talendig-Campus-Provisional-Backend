const mongoose = require('mongoose');

const TalentSchema = new mongoose.Schema({
  gender: {
    type: String,
    enum: ['Femenino', 'Masculino', 'Otros'],
    default: 'Otros',
  },
  languages: {
    type: [mongoose.Types.ObjectId],
    ref: 'Language',
    required: [true, 'Por favor, selecciona un idioma'],
  },
  contacts: {
    type: [mongoose.Types.ObjectId],
    ref: 'Contact',
    required: [true, 'Por favor, selecciona un contacto de emergencia'],
  },
  birthdate: {
    type: String,
    format: Date,
    required: [true, 'Por favor seleccione una fecha de nacimiento'],
  },
  education: {
    type: [mongoose.Types.ObjectId],
    ref: 'Education',
    required: [true, 'Por favor seleccione un tipo de educacion'],
  },
  workExperience: {
    type: [mongoose.Types.ObjectId],
    ref: 'WorkExperience',
  },
});

module.exports = mongoose.model('Talent', TalentSchema);
