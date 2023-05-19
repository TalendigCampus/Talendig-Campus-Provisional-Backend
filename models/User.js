const mongoose = require('mongoose');
const AddressSchema = require('./commons/address');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor, coloque un nombre'],
    minlength: 3,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Por favor, coloque un apellido'],
    minlength: 3,
    trim: true,
  },
  prhotoUrl: {
    type: String,
    trim: true,
  },
  idCard: {
    type: String,
    trim: true,
    required: [true, 'Por favor, coloque una identificación'],
    minlength: 5,
    unique: true,
  },
  avatar: {
    type: String,
    required: [true, 'Por favor, coloque un avatar'],
    minlength: 2,
    maxlength: 2,
  },
  phoneNumber: {
    type: String,
    required: [true, 'Por favor, coloque un número de contacto'],
    validate: {
      validator: (phoneNumber) => /\d{10}/.test(phoneNumber),
      message: 'Por favor, coloque un número valido',
    },
  },
  address: AddressSchema,

  //   email: {
  //     type: String,
  //     required: [true, 'Please provide email'],
  //     validate: {
  //       validator: validator.isEmail,
  //       message: 'Please provide a valid email',
  //     },
  //     unique: true,
  //   },
  //   password: {
  //     type: String,
  //     required: [true, 'Please provide password'],
  //     minlength: 6,
  //     select: false,
  //   },
  //   lastName: {
  //     type: String,
  //     trim: true,
  //     maxlength: 20,
  //     default: 'lastName',
  //   },
  //   location: {
  //     type: String,
  //     trim: true,
  //     maxlength: 20,
  //     default: 'my city',
  //   },
});

module.exports = mongoose.model('User', UserSchema);
