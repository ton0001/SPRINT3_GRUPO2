const request = require('supertest');
const { app, server } = require('../server');
const { generateJWT } = require('../helpers/generateJWT');
const db = require('../database/models');

afterEach(() => {
    server.close();
 });


describe('GET /api/v3/products/:id/pictures', () => {

    test('Debe devolver las imagenes asociadas al producto', async () => {
 
        // ATENCION: si se borro en alguna otra prueba la imagen con ese id, indicar otro valor
        const ID = 3;

        const token = await generateJWT({ role: 'GOD' });

        const ruta = `/api/v3/products/${ID}/pictures`
 
        const { body, statusCode } = await request(app).get(ruta).auth(token, {type: 'bearer'});
 
 
        expect(statusCode).toBe(200);
    })


    test('Devuelve un error 404 cuando se usa un ID invalido', async () => {
 
        const ID = -1;

        const token = await generateJWT({ role: 'GOD' });

        const ruta = `/api/v3/products/${ID}/pictures`
 
        const { body, statusCode } = await request(app).get(ruta).auth(token, {type: 'bearer'});
 
 
        expect(statusCode).toBe(404);
    });
 
 })
