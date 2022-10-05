const request = require("supertest");
const { app, server } = require("../server");

afterEach(() => {
    server.close();
});

describe("POST /api/v3/users", () => {
    test("Creacion de un usuario correctamente", async () => {
        // creo una cadena de caracteres random
        const  generateRandomString = (num) => {
            const characters ='abcdefghijklmnopqrstuvwxyz0123456789';
            let result1= '';
            const charactersLength = characters.length;
            for ( let i = 0; i < num; i++ ) {
                result1 += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
        
            return result1;
        }
        
        // asigno una cadena de caracteres random para crear el usuario
        let user = generateRandomString(6);
        // a la cadena anterior le pongo la primera letra en mayuscula
        let firstName = user.charAt(0).toLocaleUpperCase() + user.slice(1);
        // mismo proceso para crear un lastName aleatorio
        let lastName = generateRandomString(8)
        lastName = lastName.charAt(0).toLocaleUpperCase() + lastName.slice(1)        

        // simulacion de los datos a enviar para crear el usuario 
        const data = {
            email: `${user}@patch.com`,
            username: user,
            password: '123456',
            first_name: firstName,
            last_name: lastName,
            profilepic: 'http://dummyimage.com/233x100.png/5fa2dd/ffffff',
        };

        // envio de los datos
        const { statusCode, body } = await request(app).post("/api/v3/users").send(data);

        // comprobacion del status
        expect(statusCode).toBe(200);

        // comprobacion del send de la respuesta
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

    test("Intentar crear un usuario faltando rellenar campos", async () => {
        // simulacion de los datos a enviar para crear el usuario 
        const data = {

        };

        // envio de los datos
        const { statusCode, body } = await request(app).post("/api/v3/users").send(data);

        // comprobacion del status
        expect(statusCode).toBe(400);

        // comprobacion del send de la respuesta
        expect(body).toEqual(expect.objectContaining({
            errors: expect.any(Array)
        }));
    })
});