const mongoose = require('mongoose');

const CalidadFormSchema = new mongoose.Schema({

    //Orientacion a la calidad
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
    {timestamps: true}
);

module.export = mongoose.model('CalidadForm', CalidadFormSchema);