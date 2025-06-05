const admin = require('firebase-admin');
const {firebaseBucket, googleCredentials} = require('./constants');

admin.initializeApp({
    credential: admin.credential.cert(googleCredentials), //Credenciales de Firebase
    storageBucket: firebaseBucket
});

const bucket = admin.storage().bucket();

module.exports = {
    bucket
}