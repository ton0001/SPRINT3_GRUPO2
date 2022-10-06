const request = require("supertest");
const { app, server } = require("../server");
const { generateJWT } = require("../helpers/generateJWT");
const initModels = require("../database/models/init-models");
const { sequelize } = require("../database/models");

const models = initModels(sequelize);

afterEach(() => {
  server.close();
  jest.setTimeout(30000);
});

describe("GET api/v3/products/mostwanted", () => {
  test("Debe obtener todos los productos que tengan mostWanted=true", async () => {
    const token = await generateJWT();

    const { statusCode, body } = await request(app)
      .get("/api/v3/products/mostwanted")
      .auth(token, { type: "bearer" });

    expect(statusCode).toEqual(200);

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

  test("Pedir productos sin lograrse primero", async () => {
    const { statusCode, body } = await request(app).get(
      "/api/v3/products/mostwanted"
    );

    expect(statusCode).toBe(401);
    expect(body).toEqual(
      expect.objectContaining({
        msg: expect.any(String),
        ok: false,
      })
    );
  });
});

describe("GET api/v3/products?category=id", () => {
  test("Debe obtener todos los productos que correspondan con esa categoria", async () => {
    const id = "7";
    const token = await generateJWT();

    const { statusCode, body } = await request(app)
      .get("/api/v3/products?category=" + id)
      .auth(token, { type: "bearer" });

    expect(statusCode).toEqual(200);

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

  test("Error de categoria no existente", async () => {
    const id = "99";
    const token = await generateJWT();

    const { statusCode, body } = await request(app)
      .get("/api/v3/products?category=" + id)
      .auth(token, { type: "bearer" });
    // console.log(body)

    expect(statusCode).toEqual(400);

    expect(body).toEqual(
      expect.objectContaining({
        msg: expect.any(String),
        ok: false,
      })
    );
  });

  test("Pedir productos sin lograrse primero", async () => {
    const { statusCode, body } = await request(app).get(
      "/api/v3/products/mostwanted"
    );

    expect(statusCode).toBe(401);
    expect(body).toEqual(
      expect.objectContaining({
        msg: expect.any(String),
        ok: false,
      })
    );
  });
});

describe("GET api/v3/products/search?q=keyword", () => {
  test("Debe obtener todos los productos que tengan algun campo con la keyword", async () => {
    const token = await generateJWT();
    const keyword = "chocolate";

    const { statusCode, body } = await request(app)
      .get("/api/v3/products/search?q=" + keyword)
      .auth(token, { type: "bearer" });

    // console.log(statusCode, body);
    expect(statusCode).toEqual(200);

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

  test("No se encuentran productos con ese keywrod", async () => {
    const keyword = "hgriedgd";
    const token = await generateJWT();

    const { statusCode, body } = await request(app)
      .get("/api/v3/products/search?q=" + keyword)
      .auth(token, { type: "bearer" });
    // console.log(statusCode, body);
    expect(statusCode).toBe(404);
    expect(body).toEqual(
      expect.objectContaining({
        msg: expect.any(String),
        ok: false,
      })
    );
  });

  test("Pedir productos sin lograrse primero", async () => {
    const keyword = "hgriedgd";
    const { statusCode, body } = await request(app).get(
      "/api/v3/products/search?q=" + keyword
    );
    // console.log(statusCode, body);
    expect(statusCode).toBe(401);
    expect(body).toEqual(
      expect.objectContaining({
        msg: expect.any(String),
        ok: false,
      })
    );
  });
});

describe("GET /api/v3/products/:id/pictures", () => {
  test("Debe devolver las imagenes asociadas al producto", async () => {
    // ATENCION: si se borro en alguna otra prueba la imagen con ese id, indicar otro valor
    const ID = 3;
    const token = await generateJWT({ role: "GOD" });
    const ruta = `/api/v3/products/${ID}/pictures`;
    const { body, statusCode } = await request(app)
      .get(ruta)
      .auth(token, { type: "bearer" });

    expect(statusCode).toBe(200);
  });

  test("Devuelve un error 404 cuando se usa un ID invalido", async () => {
    const ID = -1;
    const token = await generateJWT({ role: "GOD" });
    const ruta = `/api/v3/products/${ID}/pictures`;
    const { body, statusCode } = await request(app)
      .get(ruta)
      .auth(token, { type: "bearer" });

    expect(statusCode).toBe(404);
  });
});

describe("PUT /api/v3/products/:id", () => {
  test("Actualizacion de un producto correctamente", async () => {
    // id para testear
    let idProduct = 3;

    // datos para actualizar un producto
    const data = {
      title: "producto actualizado",
      price: "350000",
      description: "esta es una nueva descripcion actualizada",
    };

    // creacion del token
    const admin_user = {
      id: 3,
      username: "juffffaanperez",
    };
    const token = await generateJWT(admin_user);

    // traer los datos del producto para corroborar que los datos se actualicen
    const product = await models.products.findByPk(idProduct);

    // envio de los datos
    const { statusCode, body } = await request(app)
      .put(`/api/v3/products/${idProduct}`)
      .auth(token, { type: "bearer" })
      .send(data);

    // comprobar codigo de status
    expect(statusCode).toBe(200);

    // comprobar respuesta
    expect(body).toEqual(
      expect.objectContaining({
        producto: expect.objectContaining({
          id: idProduct,
          title: data.title || product.dataValues.title,
          price: data.price || product.dataValues.price,
          description: data.description || product.dataValues.description,
          category_id: data.category_id || product.dataValues.category_id,
          mostwanted: data.mostwanted || product.dataValues.mostwanted,
          stock: data.stock || product.dataValues.stock,
        }),
      })
    );
  });

  test("Fallo de actualizar un producto por usar un id inexistente", async () => {
    // id para testear
    let idProduct = 3000999;

    // datos para actualizar un producto
    const data = {
      title: "producto actualizado",
      price: "350000",
      description: "esta es una nueva descripcion actualizada",
    };

    // creacion del token
    const admin_user = {
      id: 3,
      username: "juffffaanperez",
    };
    const token = await generateJWT(admin_user);

    // envio de los datos
    const { statusCode, body } = await request(app)
      .put(`/api/v3/products/${idProduct}`)
      .auth(token, { type: "bearer" })
      .send(data);

    // comprobar codigo de status
    expect(statusCode).toBe(400);

    // comprobar respuesta
    expect(body).toEqual(
      expect.objectContaining({
        ok: false,
        message: expect.any(String),
      })
    );
  });

  test("Fallo en actualizar un producto por no logearse", async () => {
    // id para testear
    let idProduct = 3;

    // datos para actualizar un producto
    const data = {
      title: "producto actualizado",
      price: "350000",
      description: "esta es una nueva descripcion actualizada",
    };

    // envio de los datos
    const { statusCode, body } = await request(app)
      .put(`/api/v3/products/${idProduct}`)
      .send(data);

    // comprobar codigo de status
    expect(statusCode).toBe(401);

    // comprobar mensaje de error
    expect(body).toEqual(
      expect.objectContaining({
        ok: false,
        msg: expect.any(String),
      })
    );
  });

  test("Fallo en actualizar un producto por logearse como guest", async () => {
    // id de producto a testear
    let idProduct = 9;

    // datos para actualizar un producto
    const data = {
      title: "producto actualizado",
      price: "350000",
      description: "esta es una nueva descripcion actualizada",
    };

    // creacion de token
    const guest_user = {
      id: 2,
      username: "ibrabham1",
    };
    const token = await generateJWT(guest_user);

    // realizo la solicitud de eliminar
    const { statusCode, body } = await request(app)
      .delete(`/api/v3/products/${idProduct}`)
      .auth(token, { type: "bearer" })
      .send(data);

    // comprobar codigo de status
    expect(statusCode).toBe(401);

    // comprobar mensaje de error
    expect(body).toEqual(
      expect.objectContaining({
        ok: false,
        msg: expect.any(String),
      })
    );
  });
});

describe("DELETE /api/v3/products/:id", () => {
  test("Eliminar un producto correctamente", async () => {
    // datos para crear un producto para luego borrarlo
    const data = {
      title: "productoPrueba",
      price: "50000",
      description: "descripcion de prueba",
      category_id: 5,
      mostwanted: true,
      stock: 18,
    };

    // crear el nuevo producto
    await models.products.create({
      title: data.title,
      price: data.price,
      description: data.description,
      category_id: data.category,
      mostwanted: data.mostwanted,
      stock: data.stock,
    });

    // pedir el id del nuevo producto
    let newProduct = await models.products.findOne({
      where: {
        title: data.title,
      },
    });

    // id para testear
    let idProduct = newProduct.dataValues.id;

    // creacion del token
    const admin_user = {
      id: 3,
      username: "juffffaanperez",
    };
    const token = await generateJWT(admin_user);

    // realizo la solicitud de eliminar
    const { statusCode, body } = await request(app)
      .delete(`/api/v3/products/${idProduct}`)
      .auth(token, { type: "bearer" });

    // comprobar codigo de status
    expect(statusCode).toBe(200);

    // comprobar mensaje de error
    expect(body).toEqual(
      expect.objectContaining({
        ok: true,
        msg: expect.any(String),
      })
    );
  });

  test("Fallo en eliminar un producto por id inexistente", async () => {
    // id de producto inexistente
    let idProduct = 8999999;

    // creacion del token
    const admin_user = {
      id: 3,
      username: "juffffaanperez",
    };
    const token = await generateJWT(admin_user);

    // realizo la solicitud de eliminar
    const { statusCode, body } = await request(app)
      .delete(`/api/v3/products/${idProduct}`)
      .auth(token, { type: "bearer" });

    // comprobar codigo de status
    expect(statusCode).toBe(400);

    // comprobar mensaje de error
    expect(body).toEqual(
      expect.objectContaining({
        ok: false,
        msg: expect.any(String),
      })
    );
  });

  test("Fallo en eliminar un producto por no logearse", async () => {
    // id de producto
    let idProduct = 9;

    // realizo la solicitud de eliminar
    const { statusCode, body } = await request(app).delete(
      `/api/v3/products/${idProduct}`
    );

    // comprobar codigo de status
    expect(statusCode).toBe(401);

    // comprobar mensaje de error
    expect(body).toEqual(
      expect.objectContaining({
        ok: false,
        msg: expect.any(String),
      })
    );
  });

  test("Fallo en eliminar un producto por logearse como guest", async () => {
    // id de producto inexistente
    let idProduct = 9;

    const guest_user = {
      id: 2,
      username: "ibrabham1",
    };
    const token = await generateJWT(guest_user);

    // realizo la solicitud de eliminar
    const { statusCode, body } = await request(app)
      .delete(`/api/v3/products/${idProduct}`)
      .auth(token, { type: "bearer" });

    // comprobar codigo de status
    expect(statusCode).toBe(401);

    // comprobar mensaje de error
    expect(body).toEqual(
      expect.objectContaining({
        ok: false,
        msg: expect.any(String),
      })
    );
  });
});

//test de ruta POST /products
describe("POST /api/v3/products", () => {
  test("Debe devolver un estado 200 si el producto fue creado correctamente", async () => {
    //datos para crear un producto

    const data = {
      title: "Producto de prueba",
      price: 100,
      description: "randomString",
      category: 1,
      mostwanted: 1,
      stock: 10,
    };

    //creacion del token
    const god_user = {
      id: 1,
      username: "siacobo0",
    };
    const token = await generateJWT(god_user);

    //envio de los datos
    const originalDB = await models.products.findAll();

    const { statusCode, body } = await request(app)
      .post(`/api/v3/products`)
      .auth(token, { type: "bearer" })
      .send(data);

    console.log("body:", body);
    const newDB = await models.products.findAll();

    // comprobar codigo de status
    expect(statusCode).toBe(200);
    // expect(originalDB.length + 1).toBe(newDB.length);

    // comprobar respuesta
    expect(body).toEqual(
      expect.objectContaining({
        producto: expect.objectContaining({
          id: expect.any(Number),
          title: expect.any(String),
          price: expect.any(String),
          description: expect.any(String),
          category_id: expect.any(Number),
          mostwanted: expect.any(Boolean),
          stock: expect.any(Number),
        }),
      })
    );
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

    const { statusCode, body } = await request(app)
      .post(`/api/v3/products`)
      .auth(token, { type: "bearer" })
      .send(data);

    const newDB = await models.products.findAll();

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

    const { statusCode, body } = await request(app)
      .post(`/api/v3/products`)
      .send(data);

    const newDB = await models.products.findAll();

    // comprobar codigo de status
    expect(statusCode).toBe(401);
    expect(originalDB.length).toBe(newDB.length);

    // comprobar respuesta
    expect(body).toEqual(
      expect.objectContaining({
        msg: "Token Invalido",
        ok: false,
      })
    );
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
