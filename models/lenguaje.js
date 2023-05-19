const mongoose = require('mongoose');

const LanguageSchema = new mongoose.Schema(
  {
    statusId: {
      type: mongoose.Types.ObjectId,
      trim: true,
      ref: 'Status',
      required: [true, 'Por favor, coloque un estado'],
    },
    name: {
      type: String,
      required: [true, 'Por favor, coloque un idioma'],
      minlength: 3,
      maxlength: 50,
      trim: true,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Language', LanguageSchema);
