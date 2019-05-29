const knex = require("knex");
const router = require("express").Router();

const knexConfig = {
  client: "sqlite3",
  connection: {
    finlename: " TODO: update me" //from the root folder
  },
  useNullAsDefault: true
};

const db = knex(knexConfig);

// [POST] /api/cohorts This route should save a new cohort to the database.

// [GET] /api/cohorts This route will return an array of all cohorts.

// [GET] /api/cohorts/:id This route will return the cohort with the matching id.

// [GET] /api/cohorts/:id/students returns all students for the cohort with the specified id.

// [PUT] /api/cohorts/:id This route will update the cohort with the matching id using information sent in the body of the request.

// [DELETE] /api/cohorts/:id This route should delete the specified cohort.

module.exports = router;
