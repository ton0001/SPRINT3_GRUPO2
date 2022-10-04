require("dotenv").config();

const { sequelize } = require('./database/models')
const {check} = require("express-validator")
const express = require("express");
const app = express();
const swaggerUi = require("swagger-ui-express");
const cors = require("cors");
const PORT = process.env.PORT;

const productRoutes = require("./api/routes/productsRoutes");
const usersRoutes = require("./api/routes/usersRoutes");
const pictureRoutes = require("./api/routes/pictureRoutes");
const cartRoutes = require("./api/routes/cartsRoutes");

const { login } = require("./api/controllers/usersController");

const handleErrors = require("./api/middlewares/handleErros");


const YAML = require('yamljs');

const { Sequelize } = require("sequelize");
const swaggerDocument = YAML.load("./swagger.yaml");

app.use(express.json());
app.use(cors());

app.use('/api/v3/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

app.get('/api/v3',  (req, res)=>{ res.status(200).json("API funcionando correctamente")})

app.post('/api/v3/login',
    check('username', 'el username es requerido').not().isEmpty(),
    check('password', 'la contraseña es requerida').not().isEmpty(),
    handleErrors,
    login);


app.use('/api/v3/products',productRoutes)
app.use('/api/v3/pictures',pictureRoutes)
app.use('/api/v3/carts', cartRoutes)
app.use('/api/v3/users', usersRoutes);



const server = app.listen(PORT, ()=> {
    console.log(`server corriendo en ${PORT}`);
    sequelize.sync({ alter: true });
})

module.exports = {app, server}
