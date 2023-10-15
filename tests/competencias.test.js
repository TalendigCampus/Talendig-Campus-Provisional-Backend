/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable space-in-parens */
const Competencias = require('../models/CalidadForm');
const connectDB = require('../db/connect');
const {
  api,
  base_url,
  closeConexion,
  conexionString,
  expressServer,
} = require('./test-config');

const { competenciasBody } = require('./helpers');

beforeAll(async () => {
  await expressServer.launch();
  await connectDB(conexionString);
  await Competencias.deleteMany({});
});

describe('API endpoint calidadForm', () => {
  test('crear nuevo calidadForm', async () => {
    await api
      .post(`${base_url}/calidadForm`)
      .send(competenciasBody)
      .expect('Content-Type', /application\/json/)
      .expect(201);
  });
  test('el nuevo calidadForm debe retornarse en formato json', async () => {
    const { body: aspectoMejora } = await api
      .post(`${base_url}/calidadForm`)
      .send({ ...competenciasBody });

    const { payload } = aspectoMejora;
    // const newArr = content.map((rgm) => rgm.lealtad);
    // console.log(regimen);
    expect(payload.content.accurate).toBe(11.1);
    // expect(payload.content.areas_mejora).toContain('Awesome');
  });

  //   test('deberia dar error al no encontrar el usuario o instuctor', async () => {
  //     const { body } = await api
  //       .post(`${base_url}/calidadForm`)
  //       .send({ ...competenciasBody, userId: '' })
  //       .expect(400);

  //     console.log(body);
  //   });

  test('deberia dar error al no poner la informacion requerida', async () => {
    await api.post(`${base_url}/calidadForm`).send({}).expect(400);
  });

  test('deberia dar error al poner informacion erronea', async () => {
    await api
      .post(`${base_url}/calidadForm`)
      .send({ ...competenciasBody, accurate: 'hola' })
      .expect(400);
  });
});

afterAll(async () => {
  await closeConexion;
  await expressServer.close({ server: expressServer.httpServer });
});
