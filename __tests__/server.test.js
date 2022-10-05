const request = require("supertest");
const { app, server } = require("../server");

afterEach(() => {
  server.close();
});

describe("GET /api/v3", () => {
  test("Debe responder con un status code 200", async () => {
    const { statusCode, headers } = await request(app).get("/api/v3");
    expect(statusCode).toBe(200);
    expect(headers["content-type"]).toEqual(expect.stringContaining("json"));
  });
});
