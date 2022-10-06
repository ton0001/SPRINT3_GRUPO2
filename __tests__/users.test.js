const request = require("supertest");
const { app, server } = require("../server");
const { generateJWT } = require("../helpers/generateJWT");

afterEach(() => {
  server.close();
});

//test de ruta get users/:id
describe("GET /api/v3/users/:id", () => {
  test("Debe devolver un estado 200 - Usuario encontrado", async () => {
    // datos para obtener un usuario
    const data = {
      id: 2,
    };

    // creacion del token
    const guest_user = {
      id: 2,
      username: "carlos",
    };
    const token = await generateJWT(guest_user);

    // envio de los datos
    const { statusCode, body } = await request(app)
      .get(`/api/v3/users/${data.id}`)
      .auth(token, { type: "bearer" })
      .send(data);

    // comprobar codigo de status
    expect(statusCode).toBe(200);

    // comprobar respuesta
    expect(body).toEqual(
      expect.objectContaining({
        id: data.id,
      })
    );
  });

  // test de ruta get users/:id error 404 usuario no encontrado
  test("Debe devolver un estado 404 - Usuario no encontrado", async () => {
    // datos para obtener un usuario
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

    // comprobar respuesta
    expect(body).toEqual(
      expect.objectContaining({
        message: "Usuario no encontrado",
      })
    );
  });
  // test de ruta get users/:id error 401 no se envia el token
  test("Debe devolver un estado 401 - No se envia el token", async () => {
    // datos para obtener un usuario
    const data = {
      id: 2,
    };

    // envio de los datos
    const { statusCode, body } = await request(app).get(
      `/api/v3/users/${data.id}`
    );

    // comprobar codigo de status
    expect(statusCode).toBe(401);

    // comprobar respuesta
    expect(body).toEqual(
      expect.objectContaining({
        msg: "Token Invalido",
        ok: false,
      })
    );
  });
  //Debe devolver un estado 403 si el usuario no esta autorizado
  test("Debe devolver un estado 403 ", async () => {
    // datos para obtener un usuario
    const data = {
      id: 10,
    };

    // creacion del token
    const guest_user = {
      id: 2,
      username: "carlos",
    };
    const token = await generateJWT(guest_user);

    // envio de los datos
    const { statusCode, body } = await request(app)
      .get(`/api/v3/users/${data.id}`)
      .auth(token, { type: "bearer" })
      .send(data);

    // comprobar codigo de status
    expect(statusCode).toBe(403);

    // comprobar respuesta
    expect(body).toEqual(
      expect.objectContaining({
        msg: "Unauthorized ID does not match with logged ID (Guest)",
        ok: false,
      })
    );
  });
});
