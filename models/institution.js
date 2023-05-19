const mongoose = require('mongoose');
const validator = require('validator');

const institution = new mongoose.Schema({
    foundationDate:{
        type: Date,
        required: [true, 'Por favor de digitar fecha cuando fue fundada la institucion'],
    },
    originatedFrom:{
        type: String,
        required: [true, 'Por favor de digitar donde se encuentra la institucion de origen'],
    },
    ownerDetails:{
        type: [mongoose.Types.ObjectId],
        directSupervisor:{
            type: mongoose.Types.ObjectId,
            ref: 'DirectSupervisor',
            required: [true, 'Por favor de digitar datos del supervisor'],
        },
        phoneNumber:{
          type: String,
          required: [true, 'Por favor de digitar numero de telefono'],
        },
        rnc:{
          type: String,
          required: [true, 'Por favor de digitar RNC'],
          minlength: 9,
          validate: {
                  validator: validator.isNumeric(str [no_symbols]),
                  message: 'Please provide a valid RNC',
            },
        },
        gender: {
            type: String,
            enum: ["Femenino", "Masculino", "Otros"],
            default: "Otros",
        },
        languages:{
            type: [mongoose.Types.ObjectId],
            ref: 'Language',
            required: [true, 'Por favor de digitar idiomas que domina'],
        },
        contact:{
            type: [mongoose.Types.ObjectId],
            ref: 'Contact',
            required: [true, 'Por favor de digitar contactos de emergencia'],
        },
        birthday:{
          type: Date,
          required: [true, 'Por favor de digitar fecha de nacimiento'],
        },
        education:{
            type: [mongoose.Types.ObjectId],
            ref: 'Education',
        },
        workExperience:{
            type: [mongoose.Types.ObjectId],
            ref: 'WorkExperience',
        },
    }
},
    {timestamps: true}
);

module.exports = mongoose.model('Institution', institution);