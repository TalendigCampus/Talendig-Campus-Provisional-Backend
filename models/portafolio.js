const mongoose = require('mongoose');
const validator = require('validator');

const portfolio = new mongoose.Schema({
        userId:{
            type: String,
            required: [true, 'Por favor de digitar userId'],
        },
        projectId:{
            type: String,
            required: [true, 'Por favor de digitar projectId'],
        },
        createdDate:{
            type: Date,
            required: [true, 'Por favor de digitar fecha cuando fue creado'],
        },
        modifiedDate:{
            type: Date,
            required: [true, 'Por favor de digitar fecha cuando fue modificaado'],
        },
},
    {timestamps: true}
);

module.exports = mongoose.model('Portfolio', portfolio);