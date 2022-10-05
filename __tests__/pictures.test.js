const request = require("supertest");
const { app, server } = require("../server");

const { generateJWT } = require("../helpers/generateJWT");
const initModels = require("../database/models/init-models");
const { sequelize } = require('../database/models');


const models = initModels(sequelize);

afterEach(() => {
    server.close();
});

describe('GET /api/v3/pictures/:id', () => {
    const ID = 3;

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



describe("DELETE /pictures/:id", (req, res) => {
  test("Debe poder borrar una imagen si el usuario tiene el rol de GOD", async () => {
    const idPicture = 2;
    const god_user = {
      id: 1,
      username: "siacobo0",
    };

    const token = await generateJWT(god_user);

    const originalDB = await models.pictures.findAll();

    await request(app)
      .delete(`/api/v3/pictures/${idPicture}`)
      .auth(token, { type: "bearer" });

    const newDB = await models.pictures.findAll();

    expect(originalDB.length - 1).toBe(newDB.length);

    // Para no perder los datos dentro de DB se crea esta funcionalidad para que sustituya lo borrado por un dato nuevo y aun
    // pase el test.
    models.pictures.create({
      id: 2,
      url: "https://www.acavaunaUrldelaiamgen.com",
      description: "LALALAL Esta imagen es random",
      product_id: 50,
    });
  });

  test("Debe arrojar un error si el usuario no tiene permisos para borrar imagenes", async () => {
    const idPicture = 1;
    const god_user = {
      id: 2,
      username: "ibrabham1",
    };

    const token = await generateJWT(god_user);

    const { statusCode, body } = await request(app)
      .delete(`/api/v3/pictures/${idPicture}`)
      .auth(token, { type: "bearer" });

    expect(statusCode).toBe(401);

    expect(body).toEqual(
      expect.objectContaining({
        ok: false,
        msg: expect.any(String),
      })
    );
  });

    test("Fallo en crear una picture por no tener autorizacion, por no logearse", async () => {
        // simulacion de los datos a enviar para crear una picture  
        const data = {
            url: 'http://dummyimage.com/117x100.png/cc0000/ffffff',
            description: 'Maecenas ut massa quis augue luctus tincidunt. Nulla mollis molestie lorem. Quisque ut erat. Curabitur gravida nisi at nibh.',
            product_id: '31'
        }

        // envio de los datos
        const { statusCode, body } = await request(app).post("/api/v3/pictures").send(data);

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
