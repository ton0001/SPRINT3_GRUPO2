const request = require("supertest");
const { app, server } = require("../server");
const { generateJWT } = require("../helpers/generateJWT");
const initModels = require("../database/models/init-models");
const { sequelize } = require('../database/models');

const models = initModels(sequelize);

afterEach(() => {
    server.close();
});

describe("POST /api/v3/pictures", () => {
    test("Creacion de una picture correctamente", async () => {
        // simulacion de los datos a enviar para crear una picture  
        const data = {
            url: 'http://dummyimage.com/117x100.png/cc0000/ffffff',
            description: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
            product_id: '31'
        }

         // creacion del token
         const god_user = {
            id: 1,
            username: 'siacobo0',
        };
        const token = await generateJWT(god_user);

        // envio de los datos
        const { statusCode, body } = await request(app).post("/api/v3/pictures").auth(token, { type: "bearer" }).send(data);

        // comprobacion del status
        expect(statusCode).toBe(200);

        // comprobar respuesta
        expect(body).toEqual(
            expect.objectContaining({
                ok: true,
                message: expect.any(String)
            })
        );
    });

    test("Fallo en crear una picture por no completar campos requeridos", async () => {
        // simulacion de los datos a enviar para crear una picture  
        const data = {
            description: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.'
        }

         // creacion del token
         const god_user = {
            id: 1,
            username: 'siacobo0',
        };
        const token = await generateJWT(god_user);

        // envio de los datos
        const { statusCode, body } = await request(app).post("/api/v3/pictures").auth(token, { type: "bearer" }).send(data);

        // comprobacion del status
        expect(statusCode).toBe(400);

        // comprobar respuesta
        expect(body).toEqual(
            expect.objectContaining({
                errors: expect.arrayContaining([
                    expect.objectContaining({
                       location: "body",
                       msg: expect.any(String),
                       param: "url",
                     }),
                     expect.objectContaining({
                       location: "body",
                       msg: expect.any(String),
                       param: "product_id",
                     })
                ])
            })
        );
    });

    test("Fallo en crear una picture por no tener autorizacion, como admin", async () => {
        // simulacion de los datos a enviar para crear una picture  
        const data = {
            url: 'http://dummyimage.com/117x100.png/cc0000/ffffff',
            description: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
            product_id: '31'
        }

         // creacion del token
        const admin_user = {
            id: 3,
            username: 'juffffaanperez',
        };
        const token = await generateJWT(admin_user);

        // envio de los datos
        const { statusCode, body } = await request(app).post("/api/v3/pictures").auth(token, { type: "bearer" }).send(data);

        // comprobacion del status
        expect(statusCode).toBe(401);

        // comprobar respuesta
        expect(body).toEqual(
            expect.objectContaining({
                ok: false,
                msg: expect.any(String)
            })
        );
    });

    test("Fallo en crear una picture por no tener autorizacion, como guest", async () => {
        // simulacion de los datos a enviar para crear una picture  
        const data = {
            url: 'http://dummyimage.com/117x100.png/cc0000/ffffff',
            description: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
            product_id: '31'
        }

        // creacion de token
        const guest_user = {
            id: 2,
            username: 'carlos',
        };
        const token = await generateJWT(guest_user);

        // envio de los datos
        const { statusCode, body } = await request(app).post("/api/v3/pictures").auth(token, { type: "bearer" }).send(data);

        // comprobacion del status
        expect(statusCode).toBe(401);

        // comprobar respuesta
        expect(body).toEqual(
            expect.objectContaining({
                ok: false,
                msg: expect.any(String)
            })
        );
    });
});