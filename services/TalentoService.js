const { StatusCodes } = require('http-status-codes');
// const Service = require('./Service');
const CustomAPIError = require('../errors/index');
const { SHORTTEXTREPONSE } = require('../constants/helperConstants');
const {
  userUtils, Pagination, utilsFunctions, talentUtils, recruiterUtils, statusUtils,
} = require('../utils/index');
const TalentSchema = require('../models/talent');
const TalentRecruiterSchema = require('../models/talentRecruiter');
const TalentBootcampSchema = require('../models/talentBootcamp');
const TalentAssignmentSchema = require('../models/talentAssignment');
const TalentAssignmentFileSchema = require('../models/talentAssignmentFile');
const TalentInstitutionSchema = require('../models/talentInstitution');
const TalentInstructorSchema = require('../models/talentInstructor');

const talentName = 'Talento';
const talentRecruiterName = 'Proceso talento reclutador';
const recruiterName = 'Recruiter';
const bootcampName = 'Bootcamp';
const talentBootcampName = 'Talento en bootcamp';
const assignmentName = 'Tarea';
const talentAssignmentName = 'Tarea del talento';
const fileName = 'Archivo';
const talentAssignmentFileName = 'Archivo de la tarea del talento';
const institutionName = 'Institución';
const talentInstitutionName = 'Proceso talento institución';
const instructorName = 'Insttructor';
const talentInstructorName = 'Proceso talento instructor';

/**
* Add a new talent to the store
* Add a new talent to the store
*
* talent Talent Create a new talent in the store
* returns getTalentById_200_response
* */
const addTalent = async ({ talent }) => {
  const user = await userUtils.getUserById(talent.userId);

  if (!user) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.userNotFound);
  }

  const talentCreated = await TalentSchema.create(talent);

  if (!talentCreated) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    code: StatusCodes.CREATED,
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentName, SHORTTEXTREPONSE.created),
      content: talentCreated,
    },
  };
};
/**
* Add a new talent assignment to the store
* Add a new talent assignment to the store
*
* talentAssignment TalentAssignment Create a new talent assignment in the store
* returns getTalentAssingmentById_200_response
* */
const addTalentAssingment = async ({ talentAssignment }) => {
  const talent = await talentUtils.isTalentActive(talentAssignment.talentId);

  if (!talent) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      talentName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const assignment = await assignmentUtils.isAssignmentActive(talentAssignment.bootcampId); // Terminar cuando el schema assignment este creado.

  if (!assignment) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      assignmentName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const talentAssignmentCreated = await TalentAssignmentSchema.create(talentAssignment);

  if (!talentAssignmentCreated) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    code: StatusCodes.CREATED,
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentAssignmentName, SHORTTEXTREPONSE.created),
      content: talentAssignmentCreated,
    },
  };
};
/**
* Add a new talent assignment file to the store
* Add a new talent assignment file to the store
*
* talentAssignmentFile TalentAssignmentFile Create a new talent assignment file in the store
* returns updateTalentAssignmentFile_200_response
* */
const addTalentAssingmentFile = async ({ talentAssignmentFile }) => {
  const talentAssignment = await talentAssignmentUtils.isTalentAssignmentActive(talentAssignmentFile.talentAssingmentId);

  if (!talentAssignment) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      talentAssignmentName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const file = await fileUtils.isFileActive(talentAssignment.fileId); // Terminar cuando el schema file este creado.

  if (!file) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      fileName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const talentAssignmentFileCreated = await TalentAssignmentFileSchema.create(talentAssignmentFile);

  if (!talentAssignmentFileCreated) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    code: StatusCodes.CREATED,
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentAssignmentFileName, SHORTTEXTREPONSE.created),
      content: talentAssignmentFileCreated,
    },
  };
};
/**
* create a talentBootcamp relationship
* Add a new talentBootcamp to the store
*
* talentBootcamp TalentBootcamp Create a addTalentBootcamp in the store
* returns addTalentBootcamp_200_response
* */
const addTalentBootcamp = async ({ talentBootcamp }) => {
  const talent = await talentUtils.isTalentActive(talentBootcamp.talentId);

  if (!talent) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      talentName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const bootcamp = await bootcampUtils.isBootcampActive(talentBootcamp.bootcampId); // Terminar cuando el schema bootcamp este creado.

  if (!bootcamp) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      bootcampName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const talentBootcampCreated = await TalentBootcampSchema.create(talentBootcamp);

  if (!talentBootcampCreated) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    code: StatusCodes.CREATED,
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentBootcampName, SHORTTEXTREPONSE.created),
      content: talentBootcampCreated,
    },
  };
};
/**
* Create a talent process with institution
* Create a talent process from the store
*
* talentInstitution TalentInstitution talent institution process by filter and pagination (optional)
* returns createATalentInstitutionProcess_200_response
* */
const createATalentInstitutionProcess = async ({ talentInstitution }) => {
  const talent = await talentUtils.isTalentActive(talentInstitution.talentId);

  if (!talent) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      talentName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const institution = await institutionUtils.isInstitutionActive(talentInstitution.institutionId); // Terminar cuando el schema bootcamp este creado.

  if (!institution) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      institutionName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const talentInstitutionCreated = await TalentInstitutionSchema.create(talentInstitution);

  if (!talentInstitutionCreated) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    code: StatusCodes.CREATED,
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentInstitutionName, SHORTTEXTREPONSE.created),
      content: talentInstitutionCreated,
    },
  };
};
/**
* Create a talent instructor recommendation with recruiter
* Create a talent recommendation from the store
*
* talentInstructor TalentInstructor Create talent instructor recommendation by filter and pagination (optional)
* returns getAllTalentInstructorRecommendation_200_response
* */
const createATalentInstructorRecommendation = async ({ talentInstructor }) => {
  const talent = await talentUtils.isTalentActive(talentInstructor.talentId);

  if (!talent) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      talentName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const instructor = await instructorUtils.isInstructorActive(talentInstructor.instructorId); // Terminar cuando el schema bootcamp este creado.

  if (!instructor) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      instructorName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const talentInstructorCreated = await TalentInstructorSchema.create(talentInstructor);

  if (!talentInstructorCreated) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    code: StatusCodes.CREATED,
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentInstructorName, SHORTTEXTREPONSE.created),
      content: talentInstructorCreated,
    },
  };
};
/**
* Create a talent process with recruiter
* Create a of talents process from the store
*
* talentRecruiter TalentRecruiter Create talent recruiter process by filter and pagination (optional)
* returns createATalentRecruiterProcess_200_response
* */
const createATalentRecruiterProcess = async ({ talentRecruiter }) => {
  const talent = await talentUtils.isTalentActive(talentRecruiter.talentId);

  if (!talent) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      talentName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const recruiter = await recruiterUtils.isRecruiterActive(talentRecruiter.recruiterId);

  if (!recruiter) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      recruiterName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const talentRecruiterCreated = await TalentRecruiterSchema.create(talentRecruiter);

  if (!talentRecruiterCreated) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    code: StatusCodes.CREATED,
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentRecruiterName, SHORTTEXTREPONSE.created),
      content: talentRecruiterCreated,
    },
  };
};
/**
* Delete a talent instructor recommendation with recruiter by Id
* Delete a talent instructor recommendation with recruiter by Id
*
* talentInstructorId String Id talent instructor recommendation to delete
* returns EmptyResponse
* */
const deleteATalentInstructorRecommendationById = async ({ talentInstructorId }) => {
  const talentInstructor = await TalentInstructorSchema.findById(talentInstructorId);

  if (!talentInstructor) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(
        talentInstructorName,
        SHORTTEXTREPONSE.notFound,
      ),
    );
  }

  const statusId = await statusUtils.getStatusIdByName('inactive');
  const talentInstructorDeleted = await TalentInstructorSchema
    .updateOne({ _id: talentInstructorId }, { statusId });

  if (talentInstructorDeleted.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentInstructorName, SHORTTEXTREPONSE.deleted),
      content: {},
    },
  };
};
/**
* Delete a talent process with recruiter
* Delete a talent process with recruiter
*
* talentRecruiterId String Talent recruiter id to delete
* returns EmptyResponse
* */
const deleteTalentRecruiterProcess = async ({ talentRecruiterId }) => {
  const talentRecruiter = await TalentRecruiterSchema.findById(talentRecruiterId);

  if (!talentRecruiter) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(
        talentRecruiterName,
        SHORTTEXTREPONSE.notFound,
      ),
    );
  }

  const statusId = await statusUtils.getStatusIdByName('inactive');
  const talentRecruiterDeleted = await TalentRecruiterSchema
    .updateOne({ _id: talentRecruiterId }, { statusId });

  if (talentRecruiterDeleted.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentRecruiterName, SHORTTEXTREPONSE.deleted),
      content: {},
    },
  };
};
/**
* Delete a talent process with institution
* Delete a talent process with institution
*
* talentInstitutionId String Talent institution id to delete
* returns EmptyResponse
* */
const deleteAllTalentinstitutionProcess = async ({ talentInstitutionId }) => {
  const talentInstitution = await TalentInstitutionSchema.findById(talentInstitutionId);

  if (!talentInstitution) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(
        talentInstitutionName,
        SHORTTEXTREPONSE.notFound,
      ),
    );
  }

  const statusId = await statusUtils.getStatusIdByName('inactive');
  const talentInstitutionDeleted = await TalentInstitutionSchema
    .updateOne({ _id: talentInstitutionId }, { statusId });

  if (talentInstitutionDeleted.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentInstitutionName, SHORTTEXTREPONSE.deleted),
      content: {},
    },
  };
};
/**
* Deletes a talent
* delete a talent
*
* talentId String Talent id to delete
* returns EmptyResponse
* */
const deleteTalent = async ({ talentId }) => {
  const talent = await talentUtils.isTalentActive(talentId);

  if (!talent) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(
        talentName,
        SHORTTEXTREPONSE.notFound,
      ),
    );
  }

  await userUtils.deleteUserById(talent.userId);

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentName, SHORTTEXTREPONSE.deleted),
      content: {},
    },
  };
};
/**
* Deletes a talent assignment
* delete a talent assignment
*
* talentAssignmentId String Talent Assignment id to delete
* returns EmptyResponse
* */
const deleteTalentAssingment = async ({ talentAssignmentId }) => {
  const talentAssignment = await TalentAssignmentSchema.findById(talentAssignmentId);

  if (!talentAssignment) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(
        talentAssignmentName,
        SHORTTEXTREPONSE.notFound,
      ),
    );
  }

  const statusId = await statusUtils.getStatusIdByName('inactive');
  const talentAssignmentDeleted = await TalentAssignmentSchema
    .updateOne({ _id: talentAssignmentId }, { statusId });

  if (talentAssignmentDeleted.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentAssignmentName, SHORTTEXTREPONSE.deleted),
      content: {},
    },
  };
};
/**
* Deletes a talent assignment file
* delete a talent assignment file
*
* talentAssignmentFileId String Talent Assignment File id to delete
* returns EmptyResponse
* */
const deleteTalentAssingmentFile = async ({ talentAssignmentFileId }) => {
  const talentAssignmentFile = await TalentAssignmentFileSchema.findById(talentAssignmentFileId);

  if (!talentAssignmentFile) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(
        talentAssignmentFileName,
        SHORTTEXTREPONSE.notFound,
      ),
    );
  }

  const statusId = await statusUtils.getStatusIdByName('inactive');
  const talentAssignmentFileDeleted = await TalentAssignmentFileSchema
    .updateOne({ _id: talentAssignmentFileId }, { statusId });

  if (talentAssignmentFileDeleted.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentAssignmentFileName, SHORTTEXTREPONSE.deleted),
      content: {},
    },
  };
};
/**
* Deletes an existing talent bootcamp
* delete a talent bootcamp
*
* talentBootcampId String talent bootcamp id to delete
* returns EmptyResponse
* */
const deleteTalentBootcamp = async ({ talentBootcampId }) => {
  const talentBootcamp = await TalentBootcampSchema.findById(talentBootcampId);

  if (!talentBootcamp) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(
        talentBootcampName,
        SHORTTEXTREPONSE.notFound,
      ),
    );
  }

  const statusId = await statusUtils.getStatusIdByName('inactive');
  const talentBootcampDeleted = await TalentBootcampSchema
    .updateOne({ _id: talentBootcampId }, { statusId });

  if (talentBootcampDeleted.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentBootcampName, SHORTTEXTREPONSE.deleted),
      content: {},
    },
  };
};
/**
* Find a talent instructor recommendation with recruiter by Id
* Returns a single talent instructor
*
* talentInstructorId String ID of talent to return
* returns getATalentInstructorRecommendationById_200_response
* */
const getATalentInstructorRecommendationById = async ({ talentInstructorId }) => {
  const talentInstructor = await TalentInstructorSchema.findById(talentInstructorId);

  if (!talentInstructor) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentInstructorName, SHORTTEXTREPONSE.notFound),
    );
  }

  const talent = await talentUtils.isTalentActive(talentInstructor.talentId);

  if (!talent) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentName, SHORTTEXTREPONSE.notFound),
    );
  }

  const instructor = await instructorUtils.isInstructorActive(talentInstructor.instructorId);

  if (!instructor) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(instructorName, SHORTTEXTREPONSE.notFound),
    );
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentInstructorName, SHORTTEXTREPONSE.found),
      content: talent,
    },
  };
};
/**
* Get all talent assignment files
* Get a list of talents assignment files from the store
*
* talentAssignmentFilePagination TalentAssignmentFilePagination Get talent assignment files by filter and pagination (optional)
* returns getAllTalentAssignmentFiles_200_response
* */
const getAllTalentAssignmentFiles = async ({ talentAssignmentFilePagination }) => {
  const { filter, pagination } = talentAssignmentFilePagination;

  const paginationClass = new Pagination(pagination);
  let queryPagination = paginationClass.queryPagination();

  let talentAssignmentFiles = [];
  let count = 0;

  try {
    talentAssignmentFiles = await TalentAssignmentFileSchema.find(filter, null, queryPagination);
    count = await TalentAssignmentFileSchema.countDocuments(filter);
  } catch (error) {
    throw new Error(error);
  }

  queryPagination = { quantity: count, page: paginationClass.page };

  return {
    payload: {
      hasError: false,
      message: '',
      content: talentAssignmentFiles,
      pagination: new Pagination(queryPagination),
    },
  };
};
/**
* Get all talent assignment
* Get a list of talents assignment from the store
*
* talentAssignmentPagination TalentAssignmentPagination Get talent assignment by filter and pagination (optional)
* returns getAllTalentAssignments_200_response
* */
const getAllTalentAssignments = async ({ talentAssignmentPagination }) => {
  const { filter, pagination } = talentAssignmentPagination;

  const paginationClass = new Pagination(pagination);
  let queryPagination = paginationClass.queryPagination();

  let talentAssignments = [];
  let count = 0;

  try {
    talentAssignments = await TalentAssignmentSchema.find(filter, null, queryPagination);
    count = await TalentAssignmentSchema.countDocuments(filter);
  } catch (error) {
    throw new Error(error);
  }

  queryPagination = { quantity: count, page: paginationClass.page };

  return {
    payload: {
      hasError: false,
      message: '',
      content: talentAssignments,
      pagination: new Pagination(queryPagination),
    },
  };
};
/**
* Get all talent bootcamp
* Get a list of talents bootcamp from the store
*
* talentBootcampPagination TalentBootcampPagination Get talent bootcamp by filter and pagination (optional)
* returns getAllBootcampTalent_200_response
* */
const getAllTalentBootcamp = async ({ talentBootcampPagination }) => {
  const { filter, pagination } = talentBootcampPagination;

  const paginationClass = new Pagination(pagination);
  let queryPagination = paginationClass.queryPagination();

  let talentBootcamps = [];
  let count = 0;

  try {
    talentBootcamps = await TalentBootcampSchema.find(filter, null, queryPagination);
    count = await TalentBootcampSchema.countDocuments(filter);
  } catch (error) {
    throw new Error(error);
  }

  queryPagination = { quantity: count, page: paginationClass.page };

  return {
    payload: {
      hasError: false,
      message: '',
      content: talentBootcamps,
      pagination: new Pagination(queryPagination),
    },
  };
};
/**
* Get all talent process with institution
* Get a list of talents process from the store
*
* talentInstitutionPagination TalentInstitutionPagination Get talent institution process by filter and pagination (optional)
* returns getAllTalentInstitutionProcess_200_response
* */
const getAllTalentInstitutionProcess = async ({ talentInstitutionPagination }) => {
  const { filter, pagination } = talentInstitutionPagination;

  const paginationClass = new Pagination(pagination);
  let queryPagination = paginationClass.queryPagination();

  let talentInstitutions = [];
  let count = 0;

  try {
    talentInstitutions = await TalentInstitutionSchema.find(filter, null, queryPagination);
    count = await TalentInstitutionSchema.countDocuments(filter);
  } catch (error) {
    throw new Error(error);
  }

  queryPagination = { quantity: count, page: paginationClass.page };

  return {
    payload: {
      hasError: false,
      message: '',
      content: talentInstitutions,
      pagination: new Pagination(queryPagination),
    },
  };
};
/**
* Get all talent instructor recommendation with recruiter
* Get a list of talents recommendation from the store
*
* talentInstructorPagination TalentInstructorPagination Get talent instructor recommendation by filter and pagination (optional)
* returns getAllTalentInstructorRecommendation_200_response
* */
const getAllTalentInstructorRecommendation = async ({ talentInstructorPagination }) => {
  const { filter, pagination } = talentInstructorPagination;

  const paginationClass = new Pagination(pagination);
  let queryPagination = paginationClass.queryPagination();

  let talentInstructors = [];
  let count = 0;

  try {
    talentInstructors = await TalentInstructorSchema.find(filter, null, queryPagination);
    count = await TalentInstructorSchema.countDocuments(filter);
  } catch (error) {
    throw new Error(error);
  }

  queryPagination = { quantity: count, page: paginationClass.page };

  return {
    payload: {
      hasError: false,
      message: '',
      content: talentInstructors,
      pagination: new Pagination(queryPagination),
    },
  };
};
/**
* Get all talent process with recruiter
* Get a list of talents process from the store
*
* talentRecruiterPagination TalentRecruiterPagination Get talent recruiter process by filter and pagination (optional)
* returns getAllTalentRecruiterProcess_200_response
* */
const getAllTalentRecruiterProcess = async ({ talentRecruiterPagination }) => {
  const { filter, pagination } = talentRecruiterPagination;

  const paginationClass = new Pagination(pagination);
  let queryPagination = paginationClass.queryPagination();

  let talentRecruiters = [];
  let count = 0;

  try {
    talentRecruiters = await TalentRecruiterSchema.find(filter, null, queryPagination);
    count = await TalentRecruiterSchema.countDocuments(filter);
  } catch (error) {
    throw new Error(error);
  }

  queryPagination = { quantity: count, page: paginationClass.page };

  return {
    payload: {
      hasError: false,
      message: '',
      content: talentRecruiters,
      pagination: new Pagination(queryPagination),
    },
  };
};
/**
* Get all talents
* Get a list of talents from the store
*
* talentPagination TalentPagination Get list of talents with filter and pagination (optional)
* returns getAllTalents_200_response
* */
const getAllTalents = async ({ talentPagination }) => {
  const { filter, pagination } = talentPagination;

  const paginationClass = new Pagination(pagination);
  let queryPagination = paginationClass.queryPagination();

  let talents = [];
  let count = 0;

  try {
    talents = await TalentSchema.find(filter, null, queryPagination);
    count = await TalentSchema.countDocuments(filter);
  } catch (error) {
    throw new Error(error);
  }

  queryPagination = { quantity: count, page: paginationClass.page };

  return {
    payload: {
      hasError: false,
      message: '',
      content: talents,
      pagination: new Pagination(queryPagination),
    },
  };
};
/**
* Find talent bootcamp by ID
* Returns a single talent bootcamp
*
* talentBootcampId String ID of talent bootcamp to return
* returns addTalentBootcamp_200_response
* */
const getSingleTalentBootcamp = async ({ talentBootcampId }) => {
  const talentBootcamp = await TalentBootcampSchema.findById(talentBootcampId);

  if (!talentBootcamp) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentBootcampName, SHORTTEXTREPONSE.notFound),
    );
  }

  const talent = await talentUtils.isTalentActive(talentBootcamp.talentId);

  if (!talent) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentName, SHORTTEXTREPONSE.notFound),
    );
  }

  const bootcamp = await bootcampUtils.isBootcampActive(talentBootcamp.bootcampId);

  if (!bootcamp) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(bootcampName, SHORTTEXTREPONSE.notFound),
    );
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentBootcampName, SHORTTEXTREPONSE.found),
      content: talent,
    },
  };
};
/**
* Find talent assignment by ID
* Returns a single talent assignment
*
* talentAssignmentId String ID of talent assignment to return
* returns getTalentAssingmentById_200_response
* */
const getTalentAssingmentById = async ({ talentAssignmentId }) => {
  const talentAssignment = await TalentAssignmentSchema.findById(talentAssignmentId);

  if (!talentAssignment) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentAssignmentName, SHORTTEXTREPONSE.notFound),
    );
  }

  const talent = await talentUtils.isTalentActive(talentAssignment.talentId);

  if (!talent) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      talentName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const assignment = await assignmentUtils.isAssignmentActive(talentAssignment.assignmentId); // Terminar cuando el schema assignment este creado.

  if (!assignment) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      assignmentName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const talentAssignmentCreated = await TalentAssignmentSchema.create(talentAssignment);

  if (!talentAssignmentCreated) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentAssignmentName, SHORTTEXTREPONSE.found),
      content: talent,
    },
  };
};
/**
* Find talent assignment file by ID
* Returns a single talent assignment file
*
* talentAssignmentFileId String ID of talent assignment file to return
* returns getTalentAssingmentById_200_response
* */
const getTalentAssingmentFileById = async ({ talentAssignmentFileId }) => {
  const talentAssignmentFile = await TalentAssignmentFileSchema.findById(talentAssignmentFileId);

  if (!talentAssignmentFile) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentAssignmentFileName, SHORTTEXTREPONSE.notFound),
    );
  }

  const talentAssignment = await talentAssignmentUtils.isTalentAssignmentActive(talentAssignmentFile.talentAssignmentId);

  if (!talentAssignment) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      talentAssignmentName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const file = await fileUtils.isFileActive(talentAssignment.bootcampId); // Terminar cuando el schema file este creado.

  if (!file) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      fileName, SHORTTEXTREPONSE.notFound,
    ));
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentAssignmentFileName, SHORTTEXTREPONSE.found),
      content: talentAssignmentFile,
    },
  };
};
/**
* Find talent by ID
* Returns a single talent
*
* talentId String ID of talent to return
* returns getTalentById_200_response
* */
const getTalentById = async ({ talentId }) => {
  const talent = await TalentSchema.findById(talentId);

  if (!talent) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentName, SHORTTEXTREPONSE.notFound),
    );
  }

  const user = await userUtils.isUserActive(talent.userId);

  if (!user) {
    throw new CustomAPIError.NotFoundError(SHORTTEXTREPONSE.userDeleted);
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentName, SHORTTEXTREPONSE.found),
      content: talent,
    },
  };
};
/**
* Find a talent process with recruiter by ID
* Returns a single talent
*
* talentRecruiterId String ID of talent recuiter to return
* returns createATalentRecruiterProcess_200_response
* */
const getTalentRecruiterProcessById = async ({ talentRecruiterId }) => {
  const talentRecruiter = await TalentRecruiterSchema.findById(talentRecruiterId);

  if (!talentRecruiter) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentRecruiterName, SHORTTEXTREPONSE.notFound),
    );
  }

  const talent = await talentUtils.isTalentActive(talentRecruiter.talentId);

  if (!talent) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentName, SHORTTEXTREPONSE.deleted),
    );
  }

  const recruiter = await recruiterUtils.isRecruiterActive(talentRecruiter.talentId);

  if (!recruiter) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(recruiterName, SHORTTEXTREPONSE.deleted),
    );
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentRecruiterName, SHORTTEXTREPONSE.found),
      content: talent,
    },
  };
};
/**
* Find a talent process with institution by ID
* Returns a single talent
*
* talentInstitutionId String ID of talent institution to return
* returns createATalentInstitutionProcess_200_response
* */
const getTalentinstitutionProcessById = async ({ talentInstitutionId }) => {
  const talentInstitution = await TalentInstitutionSchema.findById(talentInstitutionId);

  if (!talentInstitution) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentInstitutionName, SHORTTEXTREPONSE.notFound),
    );
  }

  const talent = await talentUtils.isTalentActive(talentInstitution.talentId);

  if (!talent) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      talentName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const institution = await institutionUtils.isInstitutionActive(talentInstitution.institutionId); // Terminar cuando el schema bootcamp este creado.

  if (!institution) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      institutionName, SHORTTEXTREPONSE.notFound,
    ));
  }

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentInstitutionName, SHORTTEXTREPONSE.found),
      content: talentInstitution,
    },
  };
};
/**
* Update a talent instructor recommendation with recruiter by Id
* Update a talent instructor recommendation with recruiter by Id
*
* talentInstructorId String ID of talent instructor to update
* talentInstructor TalentInstructor Update an existent talent instructor in the store
* returns getATalentInstructorRecommendationById_200_response
* */
const updateATalentInstructorRecommendationById = async ({ talentInstructorId, talentInstructorCreated }) => {
  if (talentInstructorId !== talentInstructorCreated._id) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.errorId);
  }

  const talentInstructor = await TalentInstructorSchema.findById(talentInstructorId);

  if (!talentInstructor) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentInstructorName, SHORTTEXTREPONSE.notFound),
    );
  }

  const talent = await talentUtils.isTalentActive(talentInstructor.talentId);

  if (!talent) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentName, SHORTTEXTREPONSE.notFound),
    );
  }

  const instructor = await instructorUtils.isInstructorActive(talentInstructor.instructorId);

  if (!instructor) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(instructorName, SHORTTEXTREPONSE.notFound),
    );
  }

  const { _id, ...values } = talentInstructorCreated;

  const updated = await TalentInstructorSchema.updateOne({ _id }, values);

  if (updated.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  const talentInstructorUpdated = await TalentInstructorSchema.findById(talentInstructorId);

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentInstructorName, SHORTTEXTREPONSE.updated),
      content: talentInstructorUpdated,
    },
  };
};
/**
* Update an existing talent
* Update an existing talent by Id
*
* talentId String ID of talent to update
* talentCreated TalentCreated Update an existent talent in the store
* returns getTalentById_200_response
* */
const updateTalent = async ({ talentId, talentCreated }) => {
  if (talentId !== talentCreated._id) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.errorId);
  }

  const talent = await TalentSchema.findById(talentId);

  if (!talent) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentName, SHORTTEXTREPONSE.notFound),
    );
  }

  const user = await userUtils.isUserActive(talentCreated.userId);

  if (!user) {
    throw new CustomAPIError.NotFoundError(SHORTTEXTREPONSE.userDeleted);
  }

  const { _id, ...values } = talentCreated;

  const updated = await TalentSchema.updateOne({ _id }, values);

  if (updated.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  const talentUpdated = await talentUtils.getTalentById(talentId);

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentName, SHORTTEXTREPONSE.updated),
      content: talentUpdated,
    },
  };
};
/**
* Update an existing talent assignment
* Update an existing talent assingment by Id
*
* talentAssignmentId String ID of talent assignment to update
* talentAssignmentCreated TalentAssignmentCreated Update an existent talent assignment in the store
* returns getTalentAssingmentById_200_response
* */
const updateTalentAssignment = async ({ talentAssignmentId, talentAssignmentCreated }) => {
  if (talentAssignmentId !== talentAssignmentCreated._id) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.errorId);
  }

  const talentAssignment = await TalentAssignmentSchema.findById(talentAssignmentId);

  if (!talentAssignment) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentAssignmentName, SHORTTEXTREPONSE.notFound),
    );
  }

  const talent = await talentUtils.isTalentActive(talentAssignment.talentId);

  if (!talent) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      talentName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const assignment = await assignmentUtils.isBootcampActive(talentAssignment.bootcampId); // Terminar cuando el schema assignment este creado.

  if (!assignment) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      assignmentName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const { _id, ...values } = talentAssignmentCreated;

  const updated = await TalentAssignmentSchema.updateOne({ _id }, values);

  if (updated.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  const talentAssignmentUpdated = await TalentAssignmentSchema.findById(talentAssignmentId);

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentAssignmentName, SHORTTEXTREPONSE.updated),
      content: talentAssignmentUpdated,
    },
  };
};
/**
* Update an existing talent assignment file
* Update an existing talent assingment file by Id
*
* talentAssignmentFileId String ID of talent assignment file to update
* talentAssignmentFileCreated TalentAssignmentFileCreated Update an existent talent assignment file in the store
* returns updateTalentAssignmentFile_200_response
* */
const updateTalentAssignmentFile = async ({ talentAssignmentFileId, talentAssignmentFileCreated }) => {
  if (talentAssignmentFileId !== talentAssignmentFileCreated._id) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.errorId);
  }

  const talentAssignmentFile = await TalentAssignmentFileSchema.findById(talentAssignmentFileId);

  if (!talentAssignmentFile) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentAssignmentFileName, SHORTTEXTREPONSE.notFound),
    );
  }

  const talentAssignment = await talentAssignmentUtils.isTalentAssignmentActive(talentAssignmentFile.talentAssignmentId);

  if (!talentAssignment) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      talentAssignmentName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const file = await filetUtils.isFileActive(talentAssignmentFile.fileId); // Terminar cuando el schema assignment este creado.

  if (!file) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      fileName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const { _id, ...values } = talentAssignmentFileCreated;

  const updated = await TalentAssignmentFileSchema.updateOne({ _id }, values);

  if (updated.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  const talentAssignmentFileUpdated = await TalentAssignmentFileSchema.findById(talentAssignmentFileId);

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentAssignmentFileName, SHORTTEXTREPONSE.updated),
      content: talentAssignmentFileUpdated,
    },
  };
}
/**
* Update an existing talent bootcamp
* Update an existing talent bootcamp by Id
*
* talentBootcampId String ID of talent bootcamp to update
* talentBootcampCreated TalentBootcampCreated Update an existent talent bootcamp in the store
* returns addTalentBootcamp_200_response
* */
const updateTalentBootcamp = async ({ talentBootcampId, talentBootcampCreated }) => {
  if (talentBootcampId !== talentBootcampCreated._id) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.errorId);
  }

  const talentBootcamp = await TalentBootcampSchema.findById(talentBootcampId);

  if (!talentBootcamp) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentBootcampName, SHORTTEXTREPONSE.notFound),
    );
  }

  const talent = await talentUtils.isTalentActive(talentBootcampCreated.talentId);

  if (!talent) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentName, SHORTTEXTREPONSE.notFound),
    );
  }

  const bootcamp = await bootcampUtils.isBootcampActive(talentBootcampCreated.bootcampId);

  if (!bootcamp) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(bootcampName, SHORTTEXTREPONSE.notFound),
    );
  }

  const { _id, ...values } = talentBootcampCreated;

  const updated = await TalentBootcampSchema.updateOne({ _id }, values);

  if (updated.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  const talentBootcampUpdated = await TalentBootcampSchema.findById(talentBootcampId);

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentBootcampName, SHORTTEXTREPONSE.updated),
      content: talentBootcampUpdated,
    },
  };
};
/**
* Update a talent process with recruiter by ID
* Update an existing talent by Id
*
* talentRecruiterId String ID of talent recruiter to update
* talentRecruiterCreated TalentRecruiterCreated Update an existent talent recruiter in the store
* returns createATalentRecruiterProcess_200_response
* */
const updateTalentRecruiterProcess = async ({ talentRecruiterId, talentRecruiterCreated }) => {
  if (talentRecruiterId !== talentRecruiterCreated._id) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.errorId);
  }

  const talentRecruiter = await TalentRecruiterSchema.findById(talentRecruiterId);

  if (!talentRecruiter) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentRecruiterName, SHORTTEXTREPONSE.notFound),
    );
  }

  const talent = await talentUtils.isTalentActive(talentRecruiter.talentId);

  if (!talent) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentName, SHORTTEXTREPONSE.deleted),
    );
  }

  const recruiter = await recruiterUtils.isRecruiterActive(talentRecruiter.talentId);

  if (!recruiter) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(recruiterName, SHORTTEXTREPONSE.deleted),
    );
  }

  const { _id, ...values } = talentRecruiterCreated;

  const updated = await TalentRecruiterSchema.updateOne({ _id }, values);

  if (updated.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  const talentRecruiterUpdated = await TalentRecruiterSchema.findById(talentRecruiterId);

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentRecruiterName, SHORTTEXTREPONSE.updated),
      content: talentRecruiterUpdated,
    },
  };
};
/**
* Update a talent process with institution by ID
* Update an existing talent by Id
*
* talentInstitutionId String ID of talent institution to update
* talentInstitutionCreated TalentInstitutionCreated Update an existent talent institution in the store
* returns createATalentInstitutionProcess_200_response
* */
const updateTalentinstitutionProcess = async ({ talentInstitutionId, talentInstitutionCreated }) => {
  if (talentInstitutionId !== talentInstitutionCreated._id) {
    throw new CustomAPIError.BadRequestError(SHORTTEXTREPONSE.errorId);
  }

  const talentInstitution = await TalentInstitutionSchema.findById(talentInstitutionId);

  if (!talentInstitution) {
    throw new CustomAPIError.NotFoundError(
      utilsFunctions.textResponseFormat(talentInstitutionName, SHORTTEXTREPONSE.notFound),
    );
  }

  const talent = await talentUtils.isTalentActive(talentInstitution.talentId);

  if (!talent) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      talentName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const institution = await institutionUtils.isInstitutionActive(talentInstitution.institutionId); // Terminar cuando el schema bootcamp este creado.

  if (!institution) {
    throw new CustomAPIError.BadRequestError(utilsFunctions.textResponseFormat(
      institutionName, SHORTTEXTREPONSE.notFound,
    ));
  }

  const { _id, ...values } = talentInstitutionCreated;

  const updated = await TalentInstitutionSchema.updateOne({ _id }, values);

  if (updated.modifiedCount !== 1) {
    throw new Error(SHORTTEXTREPONSE.serverError);
  }

  const talentInstitutionUpdated = await TalentInstitutionSchema.findById(talentInstitutionId);

  return {
    payload: {
      hasError: false,
      message: utilsFunctions.textResponseFormat(talentInstitutionName, SHORTTEXTREPONSE.updated),
      content: talentInstitutionUpdated,
    },
  };
};

module.exports = {
  addTalent,
  addTalentAssingment,
  addTalentAssingmentFile,
  addTalentBootcamp,
  createATalentInstitutionProcess,
  createATalentInstructorRecommendation,
  createATalentRecruiterProcess,
  deleteATalentInstructorRecommendationById,
  deleteTalentRecruiterProcess,
  deleteAllTalentinstitutionProcess,
  deleteTalent,
  deleteTalentAssingment,
  deleteTalentAssingmentFile,
  deleteTalentBootcamp,
  getATalentInstructorRecommendationById,
  getAllTalentAssignmentFiles,
  getAllTalentAssignments,
  getAllTalentBootcamp,
  getAllTalentInstitutionProcess,
  getAllTalentInstructorRecommendation,
  getAllTalentRecruiterProcess,
  getAllTalents,
  getSingleTalentBootcamp,
  getTalentAssingmentById,
  getTalentAssingmentFileById,
  getTalentById,
  getTalentRecruiterProcessById,
  getTalentinstitutionProcessById,
  updateATalentInstructorRecommendationById,
  updateTalent,
  updateTalentAssignment,
  updateTalentAssignmentFile,
  updateTalentBootcamp,
  updateTalentRecruiterProcess,
  updateTalentinstitutionProcess,
};
