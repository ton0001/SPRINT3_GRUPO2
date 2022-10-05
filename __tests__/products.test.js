const request = require("supertest");
const { app, server } = require("../server");
const { generateJWT } = require("../helpers/generateJWT");
const initModels = require("../database/models/init-models");
const { sequelize } = require("../database/models");

afterEach(() => {
  server.close();
});

describe("POST /api/v3/products", () => {
  //testear si puede crear un producto
  test("Debe devolver un código de esatdo 200 y crear un producto nuevo", async () => {
    // id para testear
    // let idProduct = 108;

    const data = [
      {
        title: "test",
        price: 100,
        description: "test",
        category_id: 1,
        mostwanted: 1,
        stock: 10,
      },
    ];

    // envio de los datos
    const { statusCode, body } = await request(app)
      .post("/api/v3/products")
      .send(data);

    // comprobacion del status
    expect(statusCode).toBe(200);

    // comprobacion de la respuesta
    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          price: expect.any(String),
          description: expect.any(String),
          category_id: expect.any(Number),
          stock: expect.any(Number),
          mostwanted: expect.any(Boolean),
        }),
      ])
    );
  });

  //testear que sea un usuario autirizado con rol GOD
  //   test("Debe devolver un código de esatdo 401 si no esta loggeado como GOD", async () => {
  //     const token = await verifyJWT({ role: "GOD" });
  //     const { statusCode, body } = await (
  //       await request(app).post("/api/v3/products")
  //     ).auth(token, { type: "bearer" });
  //     expect(statusCode).toBe(401);
  //     expect(body).toEqual(
  //       expect.arrayContaining([
  //         expect.objectContaining({
  //           ok: false,
  //           msg: "No estas autorizado para realizar esta acción",
  //         }),
  //       ])
  //     );
  //   });

  //   //testear que no se pueda crear un producto sin alguno de los datos requeridos
  //   test("Debe responder con un código de estado 400 y la información de los datos requeridos", async () => {
  //     const data = {};
  //     const { statusCode } = await request(app)
  //       .post("/api/v3/products")
  //       .send(data);
  //     expect(statusCode).toBe(400);
  //     expect(body).toEqual(
  //       expect.objectContaining({
  //         errors: expect.any(Array),
  //       })
  //     );
  //   });
});
