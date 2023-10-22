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

const aspectoMejoraBody = {
  userId: '650c566d33d491669553127b',
  instructorId: '650c5e97733fc0d37b8bbb3b',
  puntos_fuertes: ['hola mundo', 'hello world', 'good', 'great'],
  areas_mejora: ['Awesome', 'Amazing', 'Not found'],
  comentarios: ['first comment', 'Second comment', 'Third Comment'],
  condicion_trabajo: ['condicion1', 'condicion2', 'condicion3'],
  firmaEvaluador: 'http://google.com',
  firmaServidor: 'http://google.com',
  calificacion_plan_mejora: true,
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

const competenciasBody = {
  userId: '650c566d33d491669553127b',
  instructorId: '650c5e97733fc0d37b8bbb3b',
  proposal: 11.10,
  continuousImprovement: 0,
  responsability: 8.25,
  accurate: 11.10,
  focus: 2.75,
  adaptability: 11.10,
  interest: 11.10,
  communication: 5.50,
  quality: 2.75,
};

module.exports = {
  initialStatus,
  initialLanguages,
  instructorBody,
  aspectoMejoraBody,
  logroMetasBody,
  competenciasBody,
};
