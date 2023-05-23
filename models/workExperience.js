const mongoose = require('mongoose');

const WorkExperienceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Por favor, digite un titulo'],
    trim: true,
  },
  companyName: {
    type: String,
    required: [true, 'Por favor, digite el nombre de una compañía'],
    trim: true,
  },
  startDate: {
    type: Date,
    required: [true, 'Por favor, selecciona una fecha de inicio'],
  },
  endDate: {
    type: Date,
  },
  directSupervisor: {
    name: {
      type: String,
      required: [true, 'Por favor, digite un nombre'],
      trim: true,
    },
    lastName: {
      type: String,
      required: [true, 'Por favor, digite un apellido'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Por favor, digite un numero telefonico'],
      trim: true,
    },
    address: {
      type: [mongoose.Types.ObjectId],
      ref: 'Address',
      required: [true, 'Por favor seleccione una direccion'],
    },
  },
});

module.exports = mongoose.model('WorkExperience', WorkExperienceSchema);
