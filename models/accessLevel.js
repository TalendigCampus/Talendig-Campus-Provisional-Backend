const mongoose = require('mongoose');

const AccessLevelSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Por favor, coloque un nombre'],
      minlength: 3,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
    statusId: {
      type: mongoose.Types.ObjectId,
      trim: true,
      ref: 'Status',
      required: [true, 'Por favor, coloque un estado'],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('AccessLevel', AccessLevelSchema);
