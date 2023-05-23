const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Por favor, coloque un idioma'],
      minlength: 3,
      maxlength: 50,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Language', LanguageSchema);
