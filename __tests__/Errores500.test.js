
 const { server, app} = require("../server.js")

const request = require('supertest');
const { generateJWT } = require("../helpers/generateJWT.js");

const { sequelize } = require("../database/models");

// const {verifyJWT }= require("../api/middlewares/verifyJWT");
// const verifyRoles= require ("../api/middlewares/verifyRoles");
// const sinon = require("sinon");


const god_user = {
    id: 1,
    username: "siacobo0",
}

afterEach(() => {
    server.close();
  });

beforeEach(function() {
    server.close()
    jest.mock('../api/middlewares/verifyJWT'), () => jest.fn((req, res, next) => {
         next()
        })
})

describe("ERROR 500 en middlewares",  () => {

    test("Error del servidor al verificar roles de usuario", async () => {
       
       
        const token = await generateJWT(god_user);

        try {
            await sequelize.authenticate();
            // console.log('Connection has been established successfully.');
          } catch (error) {
            // console.log('Unable to connect to the database:', error);
          }
        try {
            await sequelize.close();
            // console.log('Connection has been closed  successfully.');
          } catch (error) {
            // console.error('Unable to connect to disconnect the database:', error);
          }
    
       const {statusCode, body} = await request(app).get('/api/v3/users/1').auth(token, {type: 'bearer'});
    //    console.log(statusCode, body)
       expect(statusCode).toBe(500);

    })

})


describe('ERRORES 500 DEL login', () => {

    test('error al hacer login', async () => {

        const user = {
            id: 1,
            username: "siacobo0",
            password: '123456'
        }

        try {
            await sequelize.authenticate();
            // console.log('Connection has been established successfully.');
          } catch (error) {
            // console.log('Unable to connect to the database:', error);
          }
        try {
            await sequelize.close();
            // console.log('Connection has been closed  successfully.');
          } catch (error) {
            // console.error('Unable to connect to disconnect the database:', error);
          }
    
       const {statusCode, body} = await request(app).post('/api/v3/users/login').send(user);
    //    console.log(statusCode, body)
       expect(statusCode).toBe(500);
    })
   
})


describe('ERRORES 500 DEL USER', () => {

    test('GET/users debe devolver status 500 con error del servidor', async () => {
       
        const token = await generateJWT(god_user);

        try {
            await sequelize.authenticate();
            // console.log('Connection has been established successfully.');
          } catch (error) {
            console.log('Unable to connect to the database:', error);
          }
        try {
            await sequelize.close();
            // console.log('Connection has been closed  successfully.');
          } catch (error) {
            // console.error('Unable to connect to disconnect the database:', error);
          }

       const {statusCode, body} = await request(app).get('/api/v3/users').auth(token, {type: 'bearer'});
    //    console.log(statusCode, body)
       expect(statusCode).toBe(500);
      
       
    }
    )

})

describe('ERRORES 500 DEL PRODUCTS', () => {

    test('GET all products debe devolver status 500 con error del servidor', 
    async () => {
    
        const token = await generateJWT(god_user);

        try {
            await sequelize.authenticate();
            // console.log('Connection has been established successfully.');
        } catch (error) {
            // console.log('Unable to connect to the database:', error);
        }
        try {
            await sequelize.close();
            // console.log('Connection has been closed  successfully.');
        } catch (error) {
            // console.error('Unable to connect to disconnect the database:', error);
        }

    const {statusCode, body} = await request(app).get('/api/v3/products').auth(token, {type: 'bearer'});
    // console.log(statusCode, body)
    expect(statusCode).toBe(500);
    
    
    })

    test('GET all products MOST WANNTED debe devolver status 500 con error del servidor', 
    async () => {
    
        const token = await generateJWT(god_user);

        try {
            await sequelize.authenticate();
            // console.log('Connection has been established successfully.');
        } catch (error) {
            // console.log('Unable to connect to the database:', error);
        }
        try {
            await sequelize.close();
            // console.log('Connection has been closed  successfully.');
        } catch (error) {
            // console.error('Unable to connect to disconnect the database:', error);
        }

    const {statusCode, body} = await request(app).get("/api/v3/products/mostwanted").auth(token, {type: 'bearer'});
    // console.log(statusCode, body)
    expect(statusCode).toBe(500);
    
    
    })

    test('GET all products CATEGORY debe devolver status 500 con error del servidor', 
    async () => {
    
        const token = await generateJWT(god_user);
        const id = 5

        try {
            await sequelize.authenticate();
            // console.log('Connection has been established successfully.');
        } catch (error) {
            // console.log('Unable to connect to the database:', error);
        }
        try {
            await sequelize.close();
            // console.log('Connection has been closed  successfully.');
        } catch (error) {
            // console.error('Unable to connect to disconnect the database:', error);
        }

    const {statusCode, body} = await request(app).get("/api/v3/products?category=" + id).auth(token, {type: 'bearer'});
    // console.log(statusCode, body)
    expect(statusCode).toBe(500);
    
    
    })

    test('GET all products KEYWORD debe devolver status 500 con error del servidor', 
    async () => {
    
        const token = await generateJWT(god_user);
        const keyword = "chocolate"

        try {
            await sequelize.authenticate();
            // console.log('Connection has been established successfully.');
        } catch (error) {
            // console.log('Unable to connect to the database:', error);
        }
        try {
            await sequelize.close();
            // console.log('Connection has been closed  successfully.');
        } catch (error) {
            // console.error('Unable to connect to disconnect the database:', error);
        }

    const {statusCode, body} = await request(app) .get("/api/v3/products/search?q=" + keyword).auth(token, {type: 'bearer'});
    // console.log(statusCode, body)
    expect(statusCode).toBe(500);
    
    
    })

    test('GET products by ID devolver status 500 con error del servidor', 
    async () => {
        const ID=3
        const token = await generateJWT(god_user);

        try {
            await sequelize.authenticate();
            // console.log('Connection has been established successfully.');
        } catch (error) {
            // console.log('Unable to connect to the database:', error);
        }
        try {
            await sequelize.close();
            // console.log('Connection has been closed  successfully.');
        } catch (error) {
            // console.error('Unable to connect to disconnect the database:', error);
        }

    const {statusCode, body} = await request(app).get('/api/v3/products/' + ID).auth(token, {type: 'bearer'});
    // console.log(statusCode, body)
    expect(statusCode).toBe(500); 
    })

    
    
})


describe('ERRORES 500 DEL PICTURES', () => {

    test('GET all PICTURES debe devolver status 500 con error del servidor', 
    async () => {
    
        const token = await generateJWT(god_user);

        try {
            await sequelize.authenticate();
            // console.log('Connection has been established successfully.');
        } catch (error) {
            // console.log('Unable to connect to the database:', error);
        }
        try {
            await sequelize.close();
            // console.log('Connection has been closed  successfully.');
        } catch (error) {
            // console.error('Unable to connect to disconnect the database:', error);
        }

    const {statusCode, body} = await request(app).get('/api/v3/pictures').auth(token, {type: 'bearer'});
    // console.log(statusCode, body)
    expect(statusCode).toBe(500);
    
    
    })


    test('GET all PICTURES by IDdebe devolver status 500 con error del servidor', 
    async () => {
    
        const token = await generateJWT(god_user);
        const id = 3

        try {
            await sequelize.authenticate();
            // console.log('Connection has been established successfully.');
        } catch (error) {
            // console.log('Unable to connect to the database:', error);
        }
        try {
            await sequelize.close();
            // console.log('Connection has been closed  successfully.');
        } catch (error) {
            // console.error('Unable to connect to disconnect the database:', error);
        }

    const {statusCode, body} = await request(app).get('/api/v3/pictures/' + id).auth(token, {type: 'bearer'});
    // console.log(statusCode, body)
    expect(statusCode).toBe(500);
    }) 

    test('GET pictures by product ID devolve status 500 con error del servidor', 
    async () => {
        const ID=3
        const token = await generateJWT(god_user);

        try {
            await sequelize.authenticate();
            // console.log('Connection has been established successfully.');
        } catch (error) {
            // console.log('Unable to connect to the database:', error);
        }
        try {
            await sequelize.close();
            // console.log('Connection has been closed  successfully.');
        } catch (error) {
            // console.error('Unable to connect to disconnect the database:', error);
        }

    const {statusCode, body} = await request(app).get('/api/v3/pictures?product=' + ID).auth(token, {type: 'bearer'});
    // console.log(statusCode, body)
    expect(statusCode).toBe(500);
    
    
    })

})

