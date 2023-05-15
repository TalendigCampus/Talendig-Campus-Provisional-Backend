const mongoose = require('mongoose');

const connectDB = (url) => mongoose.connect(url).then(console.log('connection stablished correctly!'));

module.exports = connectDB;
