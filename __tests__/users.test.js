const request = require('supertest');
const { app, server } = require('../server');
const generateJWT = require('../helpers/generateJWT');
const db = require('../database/models');

afterEach(() => {
    server.close();
 });

 describe('POST /api/v3/users/login', () => {

    test('Debe devolver el usuario logueado con el token y un booleano con ok:true', async () => {
 
       const data = {
          "username": "siacobo0",
          "password": "123456"
       }
 
       const { body, statusCode } = await request(app).post('/api/v3/users/login').send(data);
 
 
       expect(body).toMatchObject({ token: expect.any(String) });
    })
 
    test('Debe devolver un estado 404 si no envian los datos y con un mensaje de error', async () => {
       const { statusCode, body } = await request(app).post('/api/v3/users/login').send();
 
       expect(statusCode).toBe(400);
    });
 })