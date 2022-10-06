const request = require("supertest");
const { app, server } = require("../server");
const { generateJWT } = require("../helpers/generateJWT");
const initModels = require("../database/models/init-models");
const { sequelize } = require("../database/models");
const models = initModels(sequelize);

afterEach(() => {
  server.close();
});

//test de ruta POST /products
describe("POST /api/v3/products", () => {
  test("Debe devolver un estado 200 si el producto fue creado correctamente", async () => {
    //datos para crear un producto
    const data = {
      title: "Producto de prueba",
      price: 100,
      description: "Producto de prueba",
      category: 1,
    };
    //creacion del token
    const god_user = {
      id: 1,
      username: "siacobo0",
    };
    const token = await generateJWT(god_user);

    //envio de los datos
    const originalDB = await models.products.findAll();
    console.log("originalDB:", originalDB.length);
    const { statusCode, body } = await request(app)
      .post(`/api/v3/products`)
      .auth(token, { type: "bearer" })
      .send(data);

    const newDB = await models.products.findAll();
    console.log("newDB:", newDB.length);

    // comprobar codigo de status
    expect(statusCode).toBe(200);
    expect(originalDB.length + 1).toBe(newDB.length);

    // comprobar respuesta
    expect(body).toEqual;
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        title: data.title,
        price: data.price,
        description: data.description,
        category_id: data.category,
      }),
    ]);
  });
  //Debe devolver un estado 400 si faltan datos para crear el producto
  test("Debe devolver un estado 400 si faltan datos para crear el producto", async () => {
    //datos para crear un producto
    const data = {
      title: "Producto de prueba",
      price: 100,
      description: "Producto de prueba",
    };
    //creacion del token
    const god_user = {
      id: 1,
      username: "siacobo0",
    };
    const token = await generateJWT(god_user);

    //envio de los datos
    const originalDB = await models.products.findAll();
    console.log("originalDB:", originalDB.length);
    const { statusCode, body } = await request(app)
      .post(`/api/v3/products`)
      .auth(token, { type: "bearer" })
      .send(data);

    const newDB = await models.products.findAll();
    console.log("newDB:", newDB.length);

    // comprobar codigo de status
    expect(statusCode).toBe(400);
    expect(originalDB.length).toBe(newDB.length);

    // comprobar respuesta
    expect(body).toEqual;
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        title: data.title,
        price: data.price,
        description: data.description,
        category_id: data.category,
      }),
    ]);
  });

  //Debe devolver un estado 401 si no se envia el token
  test("Debe devolver un estado 401 si no se envia el token", async () => {
    //datos para crear un producto
    const data = {
      title: "Producto de prueba",
      price: 100,
      description: "Producto de prueba",
      category: 1,
    };

    //envio de los datos
    const originalDB = await models.products.findAll();
    console.log("originalDB:", originalDB.length);
    const { statusCode, body } = await request(app)
      .post(`/api/v3/products`)
      .send(data);

    const newDB = await models.products.findAll();
    console.log("newDB:", newDB.length);

    // comprobar codigo de status
    expect(statusCode).toBe(401);
    expect(originalDB.length).toBe(newDB.length);

    // comprobar respuesta
    expect(body).toEqual;
    expect.arrayContaining([
      expect.objectContaining({
        id: expect.any(Number),
        title: data.title,
        price: data.price,
        description: data.description,
        category_id: data.category,
      }),
    ]);
  });
});

//test de ruta get product/:id
describe("GET /api/v3/products/:id", () => {
  test("Producto encontrado correctamente", async () => {
    // datos para obtener un producto
    const data = {
      id: 10,
    };

    // creacion del token
    const god_user = {
      id: 1,
      username: "siacobo0",
    };
    const token = await generateJWT(god_user);

    const product = await models.products.findByPk(data.id);

    //envio de los datos
    const { statusCode, body } = await request(app)
      .get(`/api/v3/products/${data.id}`)
      .auth(token, { type: "bearer" })
      .send(data);

    // comprobar codigo de status
    expect(statusCode).toBe(200);

    // comprobar respuesta
    expect(body).toEqual(
      expect.objectContaining({
        id: data.id,
        title: product.dataValues.title,
        price: product.dataValues.price,
        description: product.dataValues.description,
        category_id: product.dataValues.category_id,
        mostwanted: product.dataValues.mostwanted,
        stock: product.dataValues.stock,
      })
    );
  });

  //Test debe devolver un estado 401 si no se envia el token
  test("Debe devolver un estado 401 si no se envia el token", async () => {
    // datos para obtener un producto
    const data = {
      id: 10,
    };

    const product = await models.products.findByPk(data.id);

    //envio de los datos
    const { statusCode, body } = await request(app)
      .get(`/api/v3/products/${data.id}`)
      .send(data);

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

  //Test debe devolver un estado 404 si el producto no existe
  test("Debe devolver un estado 404 si el producto no existe", async () => {
    // datos para obtener un producto
    const data = {
      id: 600,
    };

    // creacion del token
    const god_user = {
      id: 1,
      username: "siacobo0",
    };
    const token = await generateJWT(god_user);

    //envio de los datos
    const { statusCode, body } = await request(app)
      .get(`/api/v3/products/${data.id}`)
      .auth(token, { type: "bearer" })
      .send(data);

    // comprobar codigo de status
    expect(statusCode).toBe(404);

    // comprobar respuesta
    expect(body).toEqual(
      expect.objectContaining({
        msg: "El producto no existe",
      })
    );
  });
});
