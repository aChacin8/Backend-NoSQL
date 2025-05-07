const mongo = require('mongoose');
const {mongoDomain, mongoUser, mongoPassword, mongoDatabase} = require('./constants')
const mongoURI = `${mongoDomain}${mongoUser}:${mongoPassword}@${mongoDatabase}`;

const connectDB = async () => {
    try {

        await mongo.connect(mongoURI);
        
        console.log('MongoDB connected')
    } catch (error) {
        console.log(`Error: ${error.message}`)
        process.exit(1); //El proceso se cierra con un error
    }
}

module.exports = connectDB;