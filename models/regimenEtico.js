const mongoose = require('mongoose');

const regimenEticoSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: 'User',
      required: [
        true,
        'Porfavor, introduzca el id del usuario que lleno el formulario',
      ],
    },
    instructorId: {
      type: mongoose.Types.ObjectId,
      ref: 'Instructor',
      required: [
        true,
        'Porfavor, introduzca el id del usuario que lleno el formulario',
      ],
    },
    lealtad: {
      type: Number,
      min: 0,
      max: 3,
      required: [
        true,
        'Porfavor, introduzca un valor del 0 al 3 en este campo',
      ],
    },
    transparencia: {
      type: Number,
      min: 0,
      max: 3,
      required: [
        true,
        'Porfavor, introduzca un valor del 0 al 3 en este campo',
      ],
    },
    colaboracion: {
      type: Number,
      min: 0,
      max: 3,
      required: [
        true,
        'Porfavor, introduzca un valor del 0 al 3 en este campo',
      ],
    },
    relaciones_interpersonales: {
      type: Number,
      min: 0,
      max: 3,
      required: [
        true,
        'Porfavor, introduzca un valor del 0 al 3 en este campo',
      ],
    },
    cumplimiento_normas: {
      type: Number,
      min: 0,
      max: 3,
      required: [
        true,
        'Porfavor, introduzca un valor del 0 al 3 en este campo',
      ],
    },
  },
  { timestamps: true },
);

module.exports = mongoose.model('RegimenEtico', regimenEticoSchema);
