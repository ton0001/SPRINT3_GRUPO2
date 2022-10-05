const request = require('supertest');
const { app , server} = require('../server');
const { generateJWT } = require('../helpers/generateJWT');

const { sequelize } = require('../database/models');
const initModels = require('../database/models/init-models');
const models = initModels(sequelize);


afterEach(() => {
    server.close();
    jest.setTimeout(30000);
 });



 describe('DELETE /api/v3/users/:id',  () => {

    test('Borrar un usuario, debe devolver codigo 200', async () => {
        const god_user = {
            id: 1,
            username: "siacobo0"
        }
       const id = 5
       const token = await generateJWT(god_user);
 
       const { statusCode, body } = await request(app).delete(`/api/v3/users/${id}`).auth(token, {type: 'bearer'});
       console.log(body)

       expect(statusCode).toBe(200);
       expect(body).toEqual(expect.objectContaining({
             msg: expect.any(String),
             ok: expect.any(Boolean)
          })
       );

       newuser = {
        id: 5,
        email: 'hola@gmail.com',
        username: 'elusername',
        password: 123456,
        first_name: 'hector',
        last_name:  'op'

       }
       //vuelvo a crear el usuario borrado!
       await models.users.create(newuser)
       await models.carts.create({
        user_id : newuser.id })

    
    });

    test('Error al borrar un usuario con productos en el carrito', async () => {
        const god_user = {
            id: 1,
            username: "siacobo0"
        }
       const id = 11
       const token = await generateJWT(god_user);
 
       const { statusCode, body } = await request(app).delete(`/api/v3/users/${id}`).auth(token, {type: 'bearer'});
       expect(statusCode).toBe(400);
       expect(body).toEqual(expect.objectContaining({
             msg: expect.any(String),
             ok: false
          })
       );

 
    });
 
    test('Error al borrar un usuario que no existe', async () => {
        const god_user = {
            id: 1,
            username: "siacobo0"
        }
       const id = "99"
       const token = await generateJWT(god_user);
 
       const { statusCode, body } = await request(app).delete(`/api/v3/users/${id}`).auth(token, {type: 'bearer'});
       expect(statusCode).toBe(404);
       expect(body).toEqual(expect.objectContaining({
             msg: expect.any(String),
             ok: false
          })
       );
       
    });
 
 });

 

 describe('PUT /api/v3/users/:id',  () => {

    test('Actualizar usuario, debe devolver codigo 200', async () => {
        const god_user = {
            id: 1,
            username: "siacobo0"
        }
       const id = 6
       const token = await generateJWT(god_user);

        //genero un string random
        randomString  = (Math.random().toString(36).substr(2, 7))
       const data = {
        "username": randomString,
        "email": randomString + "@gmail.com",
        "password": 123456,
        "first_name": "Eduardo",
        "last_name": "Umber",
     };
 
       const { statusCode, body } = await request(app).put(`/api/v3/users/${id}`).auth(token, {type: 'bearer'}).send(data);
        expect(statusCode).toBe(200);
       expect(body).toEqual(expect.objectContaining({
           id: expect.any(Number),
           username: expect.any(String),
           first_name: expect.any(String),
           last_name: expect.any(String),
           profilepic: expect.any(String),
           role: expect.any(String),
           email: expect.any(String),  
        })
     );

     
    });

    test('Debe retornar un codigo 404 si el id no existe', async () => {
        const god_user = {
            id: 1,
            username: "siacobo0"
        }
       const id = 99
       const token = await generateJWT(god_user);

        const data = {
           "username": "Eduard9",
           "email": "eduardo9@gmail.com",
           "password": 123456
        };
  
        const { statusCode, body } = await request(app).put(`/api/v3/users/${id}`).auth(token, {type: 'bearer'}).send(data);
        expect(statusCode).toBe(404);
               expect(body).toEqual(expect.objectContaining({
                     msg: expect.any(String),
                     ok: false
                  })
               );
        
     });

     test('Debe retornar un codigo 400 si el email o username ya existen', async () => {
        const god_user = {
            id: 1,
            username: "siacobo0"
        }
       const id = 6
       const token = await generateJWT(god_user);

        const data = {
           "username": "siacobo0",
           "email": "siacobo0@patch.com",
           "password": 123456
        };
  
        const { statusCode } = await request(app).put(`/api/v3/users/${id}`).auth(token, {type: 'bearer'}).send(data);
        expect(statusCode).toBe(400);  
        
  
     });

 
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