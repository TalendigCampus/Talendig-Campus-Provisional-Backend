const initialStatus = [
  {
    name: 'hola',
  },
  {
    name: 'adios',
  },
  {
    name: 'hello',
  },
];

const initialLanguages = [
  {
    name: 'Spanish',
  },

  {
    name: 'Japanese',
  },
];

const instructorBody = {
  userId: '650c566d33d491669553127b',
  instructorId: '650c5e97733fc0d37b8bbb3b',
  lealtad: 2,
  transparencia: 0,
  colaboracion: 1,
  relaciones_interpersonales: 0,
  cumplimiento_normas: 3,
};

const logroMetasBody = {
  userId: '650c566d33d491669553127b',
  instructorId: '650c5e97733fc0d37b8bbb3b',
  institucion: '65296fbb7189553d2356fe42',
  firmaServidor: 'http://google.com',
  firmaSupervisor: 'http://google.com',
  indicadorCuando: ['asdas', 'abc', 'hola'],
  indicadorCuanto: ['hello', 'world'],
  metas: ['hola', 'mundo'],
  observaciones: ['observacion1', 'observacion2'],
  ponderacion: [30, 35],
  unidadOrganizativa: 'Talendig',
  calificacion: [30, 25],
  cargoSupervisor: 'Profesor',
  cargoServidor: 'Estudiante',
};

module.exports = {
  initialStatus,
  initialLanguages,
  instructorBody,
  logroMetasBody,
};
