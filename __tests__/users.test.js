const request = require("supertest");
const { app, server } = require("../server");
const { generateJWT } = require("../helpers/generateJWT");

//test de ruta get users/:id
describe("GET /api/v3/users/:id", () => {
  test("Usuario encontrado", async () => {
    // datos para obtener un usuario
    const data = {
      id: 2,
    };

    // creacion del token
    const guest_user = {
      id: 2,
      username: "caralos",
    };
    const token = await generateJWT(guest_user);

    // envio de los datos
    const { statusCode, body } = await request(app)
      .get(`/api/v3/users/${data.id}`)
      .auth(token, { type: "bearer" })
      .send(data);

    // comprobar codigo de status
    expect(statusCode).toBe(200);
    console.log(body);

    // comprobar respuesta
    expect(body).toEqual(
      expect.objectContaining({
        id: data.id,
      })
    );
  });

  // test de ruta get users/:id error 404 usuario no encontrado
  test("Usuario no encontrado", async () => {
    // datos para crear un producto
    const data = {
      id: 22,
    };

    // creacion del token
    const god_user = {
      id: 1,
      username: "siacobo0",
    };
    const token = await generateJWT(god_user);

    // envio de los datos
    const { statusCode, body } = await request(app)
      .get(`/api/v3/users/${data.id}`)
      .auth(token, { type: "bearer" })
      .send(data);

    // comprobar codigo de status
    expect(statusCode).toBe(404);
    console.log(body);

    // comprobar respuesta
    expect(body).toEqual(
      expect.objectContaining({
        message: "Usuario no encontrado",
      })
    );
  });
});
