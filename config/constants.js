require('dotenv').config();

const port = process.env.PORT || 3000;
const appUri = process.env.URI_APP;

const mongoDomain = process.env.MONGO_DOMAIN;
const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoDatabase = process.env.MONGO_NAME_DB;

module.exports = {
  port,
  appUri,
  mongoDomain,
  mongoUser,
  mongoPassword,
  mongoDatabase
};
