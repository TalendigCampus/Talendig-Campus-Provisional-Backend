const mongoose = require('mongoose');
const validator = require('validator');

const intershipTalentSchema = new mongoose.Schema({
    internshipId:{
        type: String,
        required: [true, 'Por favor de digitar internshipId'],
    },
        talentId:{
            type: String,
            required: [true, 'Por favor de digitar talentId'],
        },
        workPosition:{
            type: String,
            required: [true, 'Por favor de digitar puesto de trabajo'],
        },
        responsability:{
            type: String,
            required: [true, 'Por favor de digitar resposabilidad a cumplir en el puesto'],
        },
        statusId:{
            type: String,
            required: [true, 'Por favor de digitar'],
        },
        startDate:{
            type: Date,
            required: [true, 'Por favor de digitar fecha que comenzara'],
          },
        endDate:{
            type: Date,
            required: [true, 'Por favor de digitar fecha que finalizara'],
        },
},
    {timestamps: true}
);

module.exports = mongoose.model('intershipTalents', intershipTalentSchema);