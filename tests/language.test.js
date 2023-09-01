/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable space-in-parens */
const LanguageSchema = require('../models/lenguaje');
const connectDB = require('../db/connect');
const {
  api,
  base_url,
  closeConexion,
  conexionString,
  expressServer,
} = require('./test-config');
const { initialLanguages } = require('./helpers');

beforeAll(async () => {
  await expressServer.launch();
  await connectDB(conexionString);
  await LanguageSchema.deleteMany({});

  // eslint-disable-next-line no-restricted-syntax
  for (const language of initialLanguages) {
    const newLanguage = new LanguageSchema({ name: language.name });
    // eslint-disable-next-line no-await-in-loop
    await newLanguage.save();
  }
});

describe('API endpoint language', () => {
  test('get all status', async () => {
    await api
      .post(`${base_url}/language/get`)
      .send({ filter: {}, pagination: { quantity: 20, page: 1 } })
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('language should be contain Spanish', async () => {
    const { body: allStatus } = await api
      .post(`${base_url}/language/get`)
      .send({ filter: {}, pagination: { quantity: 20, page: 1 } });

    const { content } = allStatus;

    const newArr = content.map((status) => status.name);
    expect(newArr).toContain('Spanish');
  });

  test('status should be send 400', async () => {
    await api
      .post(`${base_url}/language/get`)
      .send({ filter: {} })
      .expect(400)
      .expect('Content-Type', /application\/json/);
  });

  test('create status', async () => {
    await api
      .post(`${base_url}/language/create`)
      .send({ name: 'English' })
      .expect(201)
      .expect('Content-Type', /application\/json/);
  });
});

afterAll(async () => {
  await closeConexion;
  await expressServer.close({ server: expressServer.httpServer });
});
