const request = require("supertest");
const { app, server } = require("../server");
const { verifyJWT, generateJWT } = require("../helpers/generateJWT");
const db = require("../database/models");

afterEach(() => {
  server.close();
});
//   -----------    //

describe("GET /carts/:id", () => {
  test("Obtiene el carrito que se le envia por parametro", async () => {
    const idByParam = 3;
    const guestId = {
      id: 3,
      username: "juffffaanpere",
    };

    const token = await generateJWT(guestId);

    const { body, statusCode } = await request(app)
      .get(`/api/v3/carts/${idByParam}`)
      .auth(token, { type: "bearer" });
  
    expect(statusCode).toBe(200);
    expect(body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        user_id: expect.any(Number),
      })
    );
  });
  test("El id agregado no matchea con el carrito de dicho usuario", async () => {
    const idByParam = 9;
    const guestId = {
      id: 3,
      username: "mlemin2",
    };

    const token = await generateJWT(guestId);

    const { body, statusCode } = await request(app)
      .get(`/api/v3/carts/${idByParam}`)
      .auth(token, { type: "bearer" });
    
    expect(statusCode).toBe(403);
    expect(body).toEqual(
      expect.objectContaining({
        ok: false,
        msg: expect.any(String),
      })
    );
  });
});

// -------  //

describe("PUT /  carts/:id", () => {
  test("Actualización del carrito si hay stock disponible y tiene autorizacion", async () => {
    
    const idByParam = 9;
    
    const guestId = {
      id: 9,
      username: "jdykinsc",
    };

    const cart = [{
      "product_id": 77,
      "quantity": 2
    }, { "product_id": 12,
    "quantity": 2}]

    const token = await generateJWT(guestId);

    const { body, statusCode } = await request(app)
    
      .put(`/api/v3/carts/${idByParam}`)
      .auth(token, { type: "bearer" }).send(cart)

      console.log(body);
    
   expect(statusCode).toBe(200);
    expect(body).toEqual(
      expect.arrayContaining([ 
        expect.any(Object)
      ])
    );
  });

  test("Error de stock no disponible", async () => {
    
    const idByParam = 9;
    
    const guestId = {
      id: 9,
      username: "jdykinsc",
    };

    const cart = [{
    "product_id": 10,
    "quantity": 2}]

    const token = await generateJWT(guestId);

    const { body, statusCode } = await request(app)
    
      .put(`/api/v3/carts/${idByParam}`)
      .auth(token, { type: "bearer" }).send(cart)
    
   expect(statusCode).toBe(400);
    expect(body).toEqual(
      expect.objectContaining({
        ok: false,
        message: 'No hay stock suficiente'
      }))
    
  });

});
