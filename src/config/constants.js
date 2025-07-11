const dotenv = require('dotenv');
const path = require('path');  

const envPath = path.resolve(__dirname,`../../.env.${process.env.NODE_ENV||'development'}` )
console.log('Enviroment', process.env.NODE_ENV);

dotenv.config({path: envPath});

const port = process.env.PORT || 3000;
const appUri = process.env.URI_APP;
const keyToken = process.env.JWT_SECRET

const mongoDomain = process.env.MONGO_DOMAIN;
const mongoUser = process.env.MONGO_USER;
const mongoPassword = process.env.MONGO_PASSWORD;
const mongoDatabase = process.env.MONGO_NAME_DB;

const firebaseBucket = process.env.FIREBASE_BUCKET;
const googleCredentials = process.env.GOOGLE_CREDENTIALS;

module.exports = {
  port,
  appUri,
  mongoDomain,
  mongoUser,
  mongoPassword,
  mongoDatabase,
  keyToken,
  firebaseBucket,
  googleCredentials
};
