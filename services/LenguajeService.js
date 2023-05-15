/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Create language
* The creation of a new language.
*
* language Language Create language object
* returns createLanguage_200_response
* */
const createLanguage = ({ language }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        language,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete language
* delete language
*
* languageId String Id of the language
* returns EmptyResponse
* */
const deleteLanguage = ({ languageId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        languageId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* get languages
* get language.
*
* languagePagination LanguagePagination Created language object
* returns getLanguages_200_response
* */
const getLanguages = ({ languagePagination }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        languagePagination,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* get language
* get language.
*
* languageId String Id of the language
* returns createLanguage_200_response
* */
const getSingleLanguage = ({ languageId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        languageId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* update language
* update language
*
* languageId String Id of the language
* languageCreated LanguageCreated Created language object
* returns createLanguage_200_response
* */
const updateLanguage = ({ languageId, languageCreated }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        languageId,
        languageCreated,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

module.exports = {
  createLanguage,
  deleteLanguage,
  getLanguages,
  getSingleLanguage,
  updateLanguage,
};
