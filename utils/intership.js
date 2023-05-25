const IntershipSchema = require('../models/intership');
const IntershipTalentSchema = require('../models/intershipTalent');
const userFunctions = require('./user');

const getIntershipById = async (intershipId) => IntershipSchema.findById(intershipId);

const getIntershipTalentById = async (intershipTalentId) => IntershipTalentSchema.findById(intershipTalentId);


module.exports = {
    getIntershipById,
    getIntershipTalentById,
};
