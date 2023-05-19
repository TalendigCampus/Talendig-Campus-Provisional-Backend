const mongoose = require('mongoose');

const TitleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Por favor, coloque un nombre'],
      minlength: 3,
      trim: true,
    },
    userId: {
      type: [mongoose.Types.ObjectId],
      ref: 'User',
      required: [true, 'Por favor, agregar ID al que le pertenece el titulo'],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('Title', TitleSchema);
