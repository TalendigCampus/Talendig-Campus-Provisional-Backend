const mongoose = require('mongoose');

const StatusSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Por favor, coloque un nombre'],
    minlength: 3,
    trim: true,
    unique: true,
  },
}, { timestamps: true });

module.exports = mongoose.model('Status', StatusSchema);
