const knex = require("knex");
const router = require("express").Router();

const knexConfig = {
  client: "sqlite3",
  connection: {
    finlename: " TODO: updateme" //from the root folder
  },
  useNullAsDefault: true
};

const db = knex(knexConfig);
