/* eslint-disable camelcase */
/* eslint-disable no-undef */
/* eslint-disable space-in-parens */
const StatusSchema = require('../models/status');
const connectDB = require('../db/connect');
const {
  api,
  conexionString,
  expressServer,
  base_url,
  closeConexion,
} = require('./test-config');
const { initialStatus } = require('./helpers');

beforeAll(async () => {
  await expressServer.launch();
  await connectDB(conexionString);
  await StatusSchema.deleteMany({});

  // eslint-disable-next-line no-restricted-syntax
  for (const status of initialStatus) {
    const newStatus = new StatusSchema({ name: status.name });
    // eslint-disable-next-line no-await-in-loop
    await newStatus.save();
  }
});

describe('API endpoint status', () => {
  test('get all status', async () => {
    await api
      .post(`${base_url}/status/get`)
      .send({ filter: {}, pagination: { quantity: 20, page: 1 } })
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('status should be contain hello', async () => {
    const { body: allStatus } = await api
      .post(`${base_url}/status/get`)
      .send({ filter: {}, pagination: { quantity: 20, page: 1 } });

    const { content } = allStatus;

    const newArr = content.map((status) => status.name);
    expect(newArr).toContain('hello');
  });

  test('status should be send 400', async () => {
    await api
      .post(`${base_url}/status/get`)
      .send({ filter: {} })
      .expect(400)
      .expect('Content-Type', /application\/json/);
  });

  test('create status ok', async () => {
    await api
      .post(`${base_url}/status/create`)
      .send({ name: 'new' })
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const { body: allStatus } = await api
      .post(`${base_url}/status/get`)
      .send({ filter: {}, pagination: { quantity: 20, page: 1 } });

    const { content } = allStatus;

    const newArr = content.map((status) => status.name);

    expect(content).toHaveLength(initialStatus.length + 1);
    expect(newArr).toContain('new');
  });

  test('create status without name should be respond with 400', async () => {
    await api
      .post(`${base_url}/status/create`)
      .expect(400)
      .send({})
      .expect('Content-Type', /application\/json/);

    const { body: allStatus } = await api
      .post(`${base_url}/status/get`)
      .send({ filter: {}, pagination: { quantity: 20, page: 1 } });

    const { content } = allStatus;

    const newArr = content.map((status) => status.name);

    expect(content).toHaveLength(initialStatus.length);
    expect(newArr).not.toContain('new');
  });
});

afterAll(async () => {
  await closeConexion;
  await expressServer.close({ server: expressServer.httpServer });
});
