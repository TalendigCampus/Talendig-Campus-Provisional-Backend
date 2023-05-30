/* eslint-disable no-unused-vars */
const { StatusCodes } = require('http-status-codes');
const Service = require('./Service');
const Lenguaje = require('../models/lenguaje');
const CustomAPIError = require('../errors/index');
const LanguageSchema = require('../models/lenguaje');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const utility = require('../utils');
const {
  utilsFunctions,
  recruiterUtils,
  userUtils,
  Pagination,
} = require('../utils');

const languageName = 'Language';

/**
 * Create language
 * The creation of a new language.
 *
 * language Language Create language object
 * returns createLanguage_200_response
 * */
const createLanguage = async ({ language }) => {
  if (!language) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.noBodyRequest);
  }

  const languageCreated = await LanguageSchema.create(language);

  return {
    code: StatusCodes.CREATED,
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        languageName,
        SHORTTEXTREPONSE.created,
      ),
      content: languageCreated,
    },
  };
};
/**
 * Delete language
 * delete language
 *
 * languageId String Id of the language
 * returns EmptyResponse
 * */

const deleteLanguage = async ({ languageId }) => {
  const language = await LanguageSchema.findById(languageId);

  if (!language) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(
        languageName,
        SHORTTEXTREPONSE.notFound,
      ),
    );
  }

  await LanguageSchema.deleteOne({ _id: languageId });

  const testLanguage = await LanguageSchema.countDocuments({ _id: languageId });

  if (testLanguage) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        languageName,
        SHORTTEXTREPONSE.deleted,
      ),
      content: {},
    },
  };
};
/**
 * get languages
 * get language.
 *
 * languagePagination LanguagePagination Created language object
 * returns getLanguages_200_response
 * */
const getLanguages = async ({ languagePagination }) => {
  const { filter, pagination } = languagePagination;

  const paginationClass = new Pagination(pagination);
  let queryPagination = paginationClass.queryPagination();

  const language = await LanguageSchema.find(filter, null, queryPagination);
  const count = await LanguageSchema.countDocuments(filter);

  queryPagination = { quantity: count, page: paginationClass.page };

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        languageName,
        SHORTTEXTREPONSE.found,
      ),
      content: language,
      pagination: new Pagination(queryPagination),
    },
  };
};
/**
 * get language
 * get language.
 *
 * languageId String Id of the language
 * returns createLanguage_200_response
 * */
const getSingleLanguage = async ({ languageId }) => {
  const language = await LanguageSchema.findById(languageId);

  if (!language) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(
        languageName,
        SHORTTEXTREPONSE.notFound,
      ),
    );
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        languageName,
        SHORTTEXTREPONSE.found,
      ),
      content: language,
    },
  };
};
/**
 * update language
 * update language
 *
 * languageId String Id of the language
 * languageCreated LanguageCreated Created language object
 * returns createLanguage_200_response
 * */
const updateLanguage = async ({ languageId, languageCreated }) => {
  if (languageId !== languageCreated._id) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.errorId);
  }

  const language = await LanguageSchema.findById(languageId);

  if (!language) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(
        languageName,
        SHORTTEXTREPONSE.notFound,
      ),
    );
  }

  const { _id, ...values } = languageCreated;

  const updated = await LanguageSchema.updateOne({ _id }, values);

  if (updated.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(
        languageName,
        SHORTTEXTREPONSE.updated,
      ),
      content: language,
    },
  };
};

module.exports = {
  createLanguage,
  deleteLanguage,
  getLanguages,
  getSingleLanguage,
  updateLanguage,
};
