const mongoose = require('mongoose');
const validator = require('validator');
const AddressSchema = require('./commons/address');

const InstructorSchema = new mongoose.Schema(
  {
    gender: {
      type: String,
      enum: ['Femenino', 'Masculino', 'Otro'],
      required: [true, 'Por favor, selecciona un género'],
    },

    languages: {
      type: [mongoose.Types.ObjectId],
      ref: 'Languaje',
      required: [true, 'Por favor, selecciona un idioma'],
    },

    emergencyContacts: {
      type: [mongoose.Types.ObjectId],
      ref: 'Contact',
      required: [true, 'Por favor, agregar el contacto de emergencia'],
    },

    lastName: {
      type: String,
      trim: true,
      maxLength: 50,
      required: [true, 'Por favor ingrese su apellido.'],
    },

    phone: {
      type: String,
      required: [true, 'Por favor ingrese su apellido.'],
    },

    address: AddressSchema,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Instructor', InstructorSchema);
