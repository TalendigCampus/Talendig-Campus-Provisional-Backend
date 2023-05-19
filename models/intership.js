const mongoose = require('mongoose');
const validator = require('validator');

const intership = new mongoose.Schema({
    institutionId:{
        type: String,
        required: [true, 'Por favor de digitar idiomas'],
    },
        groupName:{
            type: String,
            required: [true, 'Por favor de digitar grupo de pasantia'],
        },
        workField:{
            type: String,
            required: [true, 'Por favor de digitar area de trabajo'],
        },
        description: {
            type: String,
            required: [true, 'Por favor de digitar descripcion del grupo'],
            maxlength: 200,
        },
        statusId:{
            type: String,
            required: [true, 'Por favor de digitar'],
        },
},
    {timestamps: true}
);

module.exports = mongoose.model('Intership', intership);