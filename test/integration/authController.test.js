const request = require('supertest');
const mongose = require('mongoose');
const { MongoMemoryServer} = require ('mongodb-memory-server');
const app = require('../../src/app');
const User = require('../../src/models/Users');

let mongoServer;

beforeAll(async ()=> {
    mongoServer = await MongoMemoryServer.create(); //Creamos servidor ficticio
    const mongoUri = mongoServer.getUri();

    await mongose.connect(mongoUri);
});

afterAll(async ()=> {
    await mongose.disconnect();
    await mongoServer.stop();
});

afterEach (async () => {
    await User.deleteMany();
}); //Borramos los datos de la base de datos después de cada test

describe('Test integration for authController', () => {
    test ('Successful user registration', async ()=>{
        const response = await request(app)
            .post('/api/v1/auth/register')
            .send({
                name: "Andres Chacin",
                email: "andreschacin@gmail.com",
                password: "contraseña1"
            });
        expect(response.statusCode).toBe(201);
        expect(response.body).toHaveProperty('_id');
        expect(response.body).toHaveProperty('tokenAccess');
        expect(response.body.email).toBe('andreschacin@gmail.com');
        expect(response.body.name).toBe('Andres Chacin');
    })
});

describe('Test integration for authController', () => {
    test ('Error user registration, user alredy exist', async ()=>{
        await User.create({
            name: "pepe Chacin",
            email: "pepito@gmail.com",
            password: "contraseña1"
        })
        const response = await request(app)
            .post('/api/v1/auth/register')
            .send({
                name: "pepe Chacin",
                email: "pepito@gmail.com",
                password: "contraseña444444"
            });
        expect(response.statusCode).toBe(400);
        expect(response.body.error).toBe('User already exist');
    })
});