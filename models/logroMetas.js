const { Schema, model, Types } = require('mongoose');

const LogroMetasSchema = new Schema(
  {
    institucion: {
      type: Types.ObjectId,
      required: true,
    },
    periodo: {
      type: Date,
      required: true,
    },

    unidadOrganizativa: {
      type: String,
      required: true,
    },

    userId: {
      type: Types.ObjectId,
      ref: 'User',
      required: [
        true,
        'Porfavor, introduzca el id del usuario que lleno el formulario',
      ],
    },
    instructorId: {
      type: Types.ObjectId,
      ref: 'Instructor',
      required: [
        true,
        'Porfavor, introduzca el id del usuario que lleno el formulario',
      ],
    },

    cargoServidor: {
      type: String,
      required: [true, 'favor de introducir su cargo actual'],
    },

    cargoSupervisor: {
      type: String,
      required: [true, 'favor de introducir su cargo actual'],
    },
    metas: {
      type: String,
      required: [true, 'Favor de introducir sus metas actuales'],
    },
    indicadorCuanto: {
      type: Number,
    },
    indicadorCuando: {
      type: Number,
    },
    ponderacion: {
      type: Number,
    },
    calificacion: {
      type: Number,
    },
    observaciones: {
      type: String,
    },
    fechaEvaluacion: {
      type: Date,
      required: true,
      default: Date.now(),
    },

    fechaAcuerdo: {
      type: Date,
      required: true,
      default: Date.now(),
    },

    firmaServidor: {
      type: String,
      required: true,
    },

    firmaSupervisor: {
      type: String,
      required: true,
    },
  },
  { timestamps: true, versionKey: false },
);

const LogroMetasModel = model('LogroMetas', LogroMetasSchema);

module.exports = LogroMetasModel;
