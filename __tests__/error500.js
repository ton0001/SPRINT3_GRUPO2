const request = require('supertest');
const { app , server} = require('../server');
const { generateJWT } = require('../helpers/generateJWT');
const { sequelize } = require('../database/models');
const initModels = require('../database/models/init-models');
const models = initModels(sequelize);

const {
    getUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUserById,
    login,
  } = require("../api/controllers/usersController");
  

const {Sequelize} = require('sequelize')


beforeEach( () => {
    server.close();

    //  sequelize.close()
    // new Sequelize('ecommerce_g2', 'root', 'password', {
    //     host: 'localhost',
    //     dialect: 'mysql'
    //     });
})

afterEach(() => {

 });




 
 describe("Probando todos los errores 500",  () => {

    test('saltando error', async()=>{

        const god_user = {
            id: 1,
            username: "siacobo0",
        }


        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.log('Unable to connect to the database:', error);
          }
        try {
            await sequelize.close();
            console.log('Connection has been closed  successfully.');
          } catch (error) {
            console.error('Unable to connect to disconnect the database:', error);
          }



        const token = await generateJWT(god_user);
        
        const {statusCode, body} = await request(app).get('/api/v3/users').auth(token, {type: 'bearer'});

    })
    

    // test("500 de getuser", async () => {
    //     const god_user = {
    //         id: 1,
    //         username: "siacobo0"
    //     }
    //     const token = await generateJWT(god_user);
        
        

    //     const {statusCode, body} = await request(app).get('/api/v3/users').auth(token, {type: 'bearer'});

    //     console.log(statusCode)
    //     expect(statusCode).toBe(500)
    //     console.log("paso linea 40")


    // })

    // test("500 de getuserbyId", async () => {


    //     const id=1
    //     const god_user = {
    //         id: 1,
    //         username: "siacobo0"
    //     }
    //     const token = await generateJWT(god_user);
        
    //     const {statusCode, body} = await request(app).get('/api/v3/users/'+id).auth(token, {type: 'bearer'});
    //     console.log(statusCode)
    //     expect(statusCode).toBe(500)

    // })


    // test("500 de putuser", async () => {


    //     const id=1
    //     const god_user = {
    //         id: 1,
    //         username: "siacobo0"
    //     }
    //     const token = await generateJWT(god_user);
        
    //     const {statusCode, body} = await request(app).put('/api/v3/users/'+id).auth(token, {type: 'bearer'});

    //     console.log(statusCode)
    //     expect(statusCode).toBe(500)

    // })

 })