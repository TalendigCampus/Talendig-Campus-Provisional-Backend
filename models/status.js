const mongoose = require('mongoose');

const StateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor, coloque un nombre'],
    minlength: 3,
    trim: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('State', StateSchema);
