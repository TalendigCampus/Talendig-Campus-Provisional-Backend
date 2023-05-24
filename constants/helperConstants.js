const SUCCESSREPONSETYPE = {
  normalResponse: 'normalResponse',
  extendedResponse: 'extendedResponse',
};

const SHORTTEXTREPONSE = {
  notFound: '{placeholder} no encontrado.',
  found: '{placeholder} encontrado.',
  deleted: '{placeholder} ha sido eliminado.',
  updated: '{placeholder} ha sido editado.',
  serverError: 'Error en el servidor.',
  noBodyRequest: 'Esta solicitud necesita un cuerpo.',
  created: '{placeholder} creado.',
  errorId: 'El id de la ruta no coincide con elid en el cuerpo.',
};

module.exports = {
  SUCCESSREPONSETYPE,
  SHORTTEXTREPONSE,
};
