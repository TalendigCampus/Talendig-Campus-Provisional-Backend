const mongoose = require('mongoose');
const validator = require('validator');

const portfolioSchema = new mongoose.Schema({
        userId:{
            type: mongoose.Types.ObjectId,
            required: [true, 'Por favor de digitar userId'],
        },
        projectId:{
            type: mongoose.Types.ObjectId,
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

module.exports = mongoose.model('portfolios', portfolioSchema);