require("iconv-lite").encodingExists("foo");
const request = require("supertest");
const { app, server } = require("../server");

afterEach(() => {
  server.close();
});

describe("GET /api/v3/users", () => {
  //testear si el usurio esta logueado como GOD para crear un producto
  test("Debe crear un producto nuevo si esta loggeado como GOD", async () => {
    const data = {
      id: 1,
      title: "test",
      price: 100,
      description: "test",
      gallery: [
        {
          picture_id: 1,
          picture_url: "test",
        },
      ],
      categoryid: 1,
      mostwanted: 1,
      stock: 10,
    };
    const { statusCode, body } = await request(app)
      .post("/api/v3/products")
      .send(data);
    expect(statusCode).toBe(200);
    expect(body).toHaveProperty("id");
    expect(body).toHaveProperty("title");
    expect(body).toHaveProperty("price");
    expect(body).toHaveProperty("description");
    expect(body).toHaveProperty("gallery");
    expect(body).toHaveProperty("categoryid");
    expect(body).toHaveProperty("mostwanted");
    expect(body).toHaveProperty("stock");
  });

  // const originalDB = await db.products.findAll();
  // await request(app).post("/api/v3/products").send(data);
  // const newDB = await db.products.findAll();
  // expect(newDB.length).toBe(originalDB.length + 1);

  //testear que no se pueda crear un producto sin alguno de los datos requeridos
  test("Debe responder con un status code 400", async () => {
    const data = {
      id: 1,
      title: "test",
      price: 100,
      description: "test",
      gallery: [
        {
          picture_id: 1,
          picture_url: "test",
        },
      ],
      categoryid: 1,
      mostwanted: 1,
      stock: 10,
    };
    const { statusCode, body } = await request(app)
      .post("/api/v3/products")
      .send(data);
    expect(statusCode).toBe(400);
    expect(body).toHaveProperty("error");
  });
});
