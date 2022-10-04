const request = require("supertest");
const { app, server } = require("../server");

afterEach(() => {
    server.close();
});

describe("POST /api/v3/users", () => {
    // test para crear un usuario
    test.skip("Debe devolver un código de estado 200 y la informacion del usuario creado", async () => {
        const data = {
            email: 'siacobo009@patch.com',
            username: 'siacobo009',
            password: '123456',
            first_name: 'Shay',
            last_name: 'Iacobo',
            profilepic: 'http://dummyimage.com/233x100.png/5fa2dd/ffffff',
        };

        const { statusCode, body } = await request(app).post("/api/v3/users").send(data);

        expect(statusCode).toBe(200);

        expect(body).toEqual(expect.objectContaining({
            id: expect.any(Number),
            email: data.email,
            username: data.username,
            first_name: data.first_name,
            last_name: data.last_name,
            profilepic: data.profilepic,
            role: data.role || 'GUEST',
        }));
    });

    //test para verificar todos los campos a la hora de crear un usuario
    test("Debe devolver un código de estado 400 y la informacion de los datos que son necesarios", async () => {
        const data = {

        };

        const { statusCode, body } = await request(app).post("/api/v3/users").send(data);

        expect(statusCode).toBe(400);
        expect(body).toEqual(expect.objectContaining({
            errors: expect.any(Array)
        }));
    })
});