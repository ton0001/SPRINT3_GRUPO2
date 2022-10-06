const request = require("supertest");
const { app, server } = require("../server");

afterEach(() => {
  server.close();
});

describe("GET /", () => {
  test("Debe devolver un código de estado 200", async () => {
    const { statusCode, headers } = await request(app).get("/api/v3");
    expect(statusCode).toBe(200);
  });
});
