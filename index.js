require('dotenv').config();
require('express-async-errors');
const connectDB = require('./db/connect');
const config = require('./config');
const logger = require('./logger');
const ExpressServer = require('./expressServer');

const launchServer = async () => {
  try {
    this.expressServer = new ExpressServer(
      config.URL_PORT,
      config.OPENAPI_YAML,
    );
    this.expressServer.launch();
    logger.info('Express server running');
  } catch (error) {
    logger.error('Express Server failure', error.message);
    await this.close();
  }
};

const start = async () => {
  try {
    launchServer().catch((e) => logger.error(e));
    await connectDB(process.env.MONGO_URI);
  } catch (error) {
    console.log(error);
  }
};

start();
