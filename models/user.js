const mongoose = require('mongoose');
const validator = require('validator');
const AddressSchema = require('./commons/address');

const UserSchema = new mongoose.Schema(
  {
    titleId: {
      type: mongoose.Types.ObjectId,
      ref: 'Title',
      required: [true, 'Por favor, agregar ID del title'],
    },
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
    photoUrl: {
      type: String,
      trim: true,
      validate: {
        validator(value) {
          return validator.isURL(value);
        },
        message: 'Por favor, coloque un URL valido',
      },
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
        validator(value) {
          return validator.isMobilePhone(value, 'es-DO');
        },
        message: 'Por favor, agregue un número telefónico válido',
      },
    },
    address: AddressSchema,
    technologies: {
      type: [mongoose.Types.ObjectId],
      ref: 'Technology',
    },
    biography: {
      type: String,
      required: [true, 'Por favor, coloque una biografía'],
      trim: true,
    },
    email: {
      type: String,
      required: [true, 'Por favor, coloque un correo'],
      trim: true,
      lowercase: true,
      unique: true,
      validate: {
        validator: validator.isEmail,
        message: 'Por favor, coloque un correo valido',
      },
    },
    password: {
      type: String,
      required: [true, 'Por favor, coloque una contraseña valida'],
      trim: true,
      minlength: 5,
      select: false,
    },
    verificationToken: {
      type: String,
      trim: true,
    },
    verficationDate: {
      type: Date,
    },
    registrationDate: {
      type: Date,
    },
    resetPasswordToken: {
      type: String,
      trim: true,
    },
    resetPasswordExpirationDate: {
      type: Date,
    },
    statusId: {
      type: mongoose.Types.ObjectId,
      trim: true,
      ref: 'Status',
      required: [true, 'Por favor, coloque un estado'],
    },
    profileId: {
      type: mongoose.Types.ObjectId,
      trim: true,
      ref: 'Profile',
      required: [true, 'Por favor, coloque un perfil'],
    },
    accessLevelId: {
      type: mongoose.Types.ObjectId,
      trim: true,
      ref: 'AccessLevel',
      required: [true, 'Por favor, coloque un nivel acceso'],
    },
    refreshToken: {
      type: String,
      trim: true,
    },
    lastConnectionDate: {
      type: Date,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('User', UserSchema);
