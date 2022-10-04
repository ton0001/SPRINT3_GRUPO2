const request = require('supertest');
const { app , server} = require('../server');
const { generateJWT } = require('../helpers/generateJWT');

afterEach(() => {
    server.close()
    jest.setTimeout(30000);

 });



describe("usuario no tienen autorizacion ",  ()=>{

    test("un usuario GUEST no tienen permisos para acceder a la ruta de otro ID, ", async() => {
        const guest_user = {
            id: 41,
            username: "juan"
        }
        const id=42
        const token = await generateJWT(guest_user);

        const { statusCode, body } = await request(app).get(`/api/v3/users/${id}`).auth(token, {type: 'bearer'});
        // console.log(statusCode, body)

        expect(statusCode).toBe(403);
        expect(body).toEqual(expect.objectContaining({
             msg: expect.any(String),
             ok: expect.any(Boolean)
          })
       );
    })

    test("un usuario ADMIN no tienen permisos para acceder a la ruta de otro ID", async() => {
        const admin_user = {
            id: 8,
            username: "mvel7"
        }
        const id=5
        const token = await generateJWT(admin_user);

        const { statusCode, body } = await request(app).delete(`/api/v3/users/${id}`).auth(token, {type: 'bearer'});
        // console.log(statusCode, body)

        expect(statusCode).toBe(403);
        expect(body).toEqual(expect.objectContaining({
             msg: expect.any(String),
             ok: expect.any(Boolean)
          })
       );
    })

    test("un usuario ADMIN no tienen permisos para acceder a la ruta", async() => {
        const admin_user = {
            id: 8,
            username: "mvel7"
        }
        const id=4
        const token = await generateJWT(admin_user);

        const { statusCode, body } = await request(app).delete(`/api/v3/pictures/${id}`).auth(token, {type: 'bearer'});
        // console.log(statusCode, body)

        expect(statusCode).toBe(401);
        expect(body).toEqual(expect.objectContaining({
             msg: expect.any(String),
             ok: expect.any(Boolean)
          })
       );
    })
    
    test("un usuario GUEST no tienen permisos para acceder a la ruta", async() => {
        const guest_user = {
            id: 42,
            username: "juan"
        }
        const id=10
        const token = await generateJWT(guest_user);

        const { statusCode, body } = await request(app).delete(`/api/v3/pictures/${id}`).auth(token, {type: 'bearer'});
        // console.log(statusCode, body)

        expect(statusCode).toBe(401);
        expect(body).toEqual(expect.objectContaining({
             msg: expect.any(String),
             ok: expect.any(Boolean)
          })
       );
    })

})