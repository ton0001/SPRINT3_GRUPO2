const request = require("supertest");
const { app, server } = require("../server");
const { generateJWT } = require("../helpers/generateJWT");
const initModels = require("../database/models/init-models");
const { sequelize } = require("../database/models");
const models = initModels(sequelize);

afterEach(() => {
  server.close();
});

//test de ruta PUT /api/v3/pictures/:id
describe("PUT /api/v3/pictures/:id", () => {
  test("Debe devolver un estado 200 si la imagen fue actualizada correctamente", async () => {
    let idPicture = 22;
    //datos para actualizar una imagen
    const randomString = Math.random().toString(36).substr(2, 7);
    const data = {
      url: randomString,
      description: randomString,
      product_id: 23,
    };
    //creacion del token
    const god_user = {
      id: 1,
      username: "siacobo0",
    };
    const token = await generateJWT(god_user);

    //envio de los datos
    const picture = await models.pictures.findByPk(idPicture);

    const { statusCode, body } = await request(app)
      .put(`/api/v3/pictures/${idPicture}`)
      .auth(token, { type: "bearer" })
      .send(data);

    // comprobar codigo de status
    expect(statusCode).toBe(200);

    expect(body).toEqual(
      expect.objectContaining({
        msg: expect.any(String),
        ok: true,
      })
    );
  });

  //Debe devolver un estado 400 si la imagen no existe
  test("Debe devolver un estado 400 si la imagen no existe", async () => {
    let idPicture = 22;
    //datos para actualizar una imagen
    const data = {
      description: "Imagen de prueba",
    };
    //creacion del token
    const god_user = {
      id: 1,
      username: "siacobo0",
    };
    const token = await generateJWT(god_user);

    //envio de los datos
    const { statusCode, body } = await request(app)
      .put(`/api/v3/pictures/${idPicture}`)
      .auth(token, { type: "bearer" })
      .send(data);

    // comprobar codigo de status
    expect(statusCode).toBe(400);

    expect(body).toEqual(
      expect.objectContaining({
        errors: expect.arrayContaining([
          expect.objectContaining({
            location: "body",
            msg: "se necesita una url",
            param: "url",
          }),
        ]),
        errors: expect.arrayContaining([
          expect.objectContaining({
            location: "body",
            msg: "se necesita una product_id",
            param: "product_id",
          }),
        ]),
      })
    );
  });

  //Debe devolver un estado 401 si el usuario no esta logueado
  test("Debe devolver un estado 401 si el usuario no esta logueado", async () => {
    let idPicture = 22;
    //datos para actualizar una imagen
    const randomString = Math.random().toString(36).substr(2, 7);
    const data = {
      url: randomString,
      description: randomString,
      product_id: 100,
    };

    //envio de los datos
    const { statusCode, body } = await request(app)
      .put(`/api/v3/pictures/${idPicture}`)
      .send(data);

    // comprobar codigo de status
    expect(statusCode).toBe(401);

    expect(body).toEqual(
      expect.objectContaining({
        ok: false,
        msg: expect.any(String),
      })
    );
  });
});
