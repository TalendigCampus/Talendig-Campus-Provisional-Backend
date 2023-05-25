const mongoose = require("mongoose");
const validator = require("validator");

const institutionSchema = new mongoose.Schema(
  {
    userId: {
      type: [mongoose.Types.ObjectId],
      ref: 'User',
      required: [true, 'Por favor, agregar ID al que le pertenece el usuario'],
    },
    companyDetails: {
      type: [mongoose.Types.ObjectId],
      name: {
        type: String,
        required: [true, "Por favor, coloque un nombre"],
        minlength: 3,
        trim: true,
      },
      foundationDate: {
        type: Date,
        required: [
          true,
          "Por favor de digitar fecha cuando fue fundada la institucion",
        ],
      },
      rnc: {
        type: String,
        required: [true, "Por favor de digitar RNC"],
        minlength: 9,
        validate: {
          validator: validator.isNumeric(),
          message: "Please provide a valid RNC",
        },
      },
      address: AddressSchema,
      required: [true, "Por favor, agregar los datos de la compañia"],
    },
    ownerDetails: {
      type: [mongoose.Types.ObjectId],
      name: {
        type: String,
        required: [true, "Por favor, coloque un nombre"],
        minlength: 3,
        trim: true,
      },
      lastName: {
        type: String,
        required: [true, "Por favor, coloque un apellido"],
        minlength: 3,
        trim: true,
      },

      phoneNumber: {
        type: String,
        required: [true, "Por favor de digitar numero de telefono"],
      },
      rnc: {
        type: String,
        required: [true, "Por favor de digitar RNC"],
        minlength: 9,
        validate: {
          validator: validator.isNumeric(str[no_symbols]),
          message: "Please provide a valid RNC",
        },
      },
      gender: {
        type: String,
        enum: ["Femenino", "Masculino", "Otros"],
        default: "Otros",
      },
      languages: {
        type: [mongoose.Types.ObjectId],
        ref: "Language",
        required: [true, "Por favor de digitar idiomas que domina"],
      },
      contact: {
        type: [mongoose.Types.ObjectId],
        ref: "Contact",
        required: [true, "Por favor de digitar contactos de emergencia"],
      },
      birthday: {
        type: Date,
        required: [true, "Por favor de digitar fecha de nacimiento"],
      },
      education: {
        type: [mongoose.Types.ObjectId],
        ref: "Education",
      },
      workExperience: {
        type: [mongoose.Types.ObjectId],
        ref: "WorkExperience",
      },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("institutions", institutionSchema);
