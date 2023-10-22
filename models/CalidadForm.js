const mongoose = require('mongoose');
const { Schema, Types, model } = mongoose;

const CalidadFormSchema = new mongoose.Schema({

    //Orientacion a la calidad
    userId: {
        type: Types.ObjectId,
        ref: 'User',
        required: [
          true,
          'Porfavor, introduzca el id del usuario que lleno el formulario',
        ],
      },
      instructorId: {
        type: Types.ObjectId,
        ref: 'Instructor',
        required: [
          true,
          'Porfavor, introduzca el id del usuario que lleno el formulario',
        ],
      },
    proposal: {
        type : Number,
        required : true
    },
    continuousImprovement: {
        type : Number,
        required : true
    },
    responsability: {
        type : Number,
        required : true
    },
    accurate: {
        type : Number,
        required : true
    },
    focus: {
        type : Number,
        required : true
    },
    adaptability: {
        type : Number,
        required : true
    },
    interest: {
        type : Number,
        required : true
    },
    communication: {
        type : Number,
        required : true
    },
    quality: {
        type : Number,
        required : true
    },
    totalPoints: {
        type :Number ,
        min: 0,
        max: 100,
        default : 0,
        required : true
    },
    grade: {
        type : String,
        required : true
    }

},
    {
    timestamps: true,
    versionKey: false
    }
);

module.exports = mongoose.model('CalidadForm', CalidadFormSchema);