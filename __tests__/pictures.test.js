const request = require('supertest');
const { app, server } = require('../server');
const { generateJWT } = require('../helpers/generateJWT');
const db = require('../database/models');

afterEach(() => {
    server.close();
 });

describe('GET /api/v3/pictures/:id', () => {

    const ID = 1;

    //prueba en la que se espera que devuelva algo siempre, el id 1 siempre deberia existir
    test('Debe devolver un json de pictures y status 200 para el id 1 y siendo usuario GOD' , async () => {

        const token = await generateJWT({ role: 'GOD' });

        const { body, statusCode } = await request(app).get(`/api/v3/pictures/${ID}`).auth(token, { type: 'bearer' });


        expect(body).toEqual(expect.objectContaining({
               ok: true,
               resp: expect.any(Object)
            })
        );
        expect(statusCode).toBe(200);
    });

    test('Debe devolver un json de pictures y status 200 para el id 1 y siendo usuario ADMIN' , async () => {

        const token = await generateJWT({ role: 'ADMIN' });

        const { body , statusCode} = await request(app).get(`/api/v3/pictures/${ID}`).auth(token, { type: 'bearer' });


        expect(body).toEqual(expect.objectContaining({
               ok: true,
               resp: expect.any(Object)
            })
        );
        
        expect(statusCode).toBe(200);
    });

    test('Debe devolver un string, un ok = false y status 404 si el id no existe' , async () => {

        let idNoValido = -1;

        const token = await generateJWT({ role: 'GOD' });

        const { body, statusCode } = await request(app).get(`/api/v3/pictures/${idNoValido}`).auth(token, { type: 'bearer' });


        expect(body).toEqual(expect.objectContaining({
               ok: false,
               message: 'no existe imagen con tal id'
            })
        );

        expect(statusCode).toBe(404);
    });






})