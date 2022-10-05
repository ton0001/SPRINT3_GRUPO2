const request = require("supertest");
const { app, server } = require("../server");
const { verifyJWT, generateJWT } = require("../helpers/generateJWT");
const db = require("../database/models");

afterEach(() => {
  server.close();
});

describe("DELETE /pictures/:id", (req, res) => {
  test("Debe poder borrar una imagen si el usuario tiene el rol de GOD", async () => {
    const idPicture = 2;
    const god_user = {
      id: 1,
      username: "siacobo0",
    };

    const token = await generateJWT(god_user);

    const originalDB = await db.pictures.findAll();

    await request(app)
      .delete(`/api/v3/pictures/${idPicture}`)
      .auth(token, { type: "bearer" });

    const newDB = await db.pictures.findAll();

    expect(originalDB.length - 1).toBe(newDB.length);

    // Para no perder los datos dentro de DB se crea esta funcionalidad para que sustituya lo borrado por un dato nuevo y aun
    // pase el test.
    db.pictures.create({
      id: 2,
      url: "https://www.acavaunaUrldelaiamgen.com",
      description: "Esta imagen es random",
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
});
