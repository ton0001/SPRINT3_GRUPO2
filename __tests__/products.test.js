const request = require("supertest");
const { app, server } = require("../server");
const { generateJWT } = require("../helpers/generateJWT");
const initModels = require("../database/models/init-models");
const { sequelize } = require('../database/models');

const models = initModels(sequelize);

afterEach(() => {
    server.close();
});

describe("PUT /api/v3/products/:id", () => {
    // test para actualizar un producto
    test("Debe devolver un código de estado 200 y la informacion del producto actualizado", async () => {
        let idProduct = 3;

        // datos para actualizar un producto
        const data = {
            title: "producto actualizado",
            price: '350000',
            description: "esta es una nueva descripcion actualizada",
            category: 2,
            stock: 15,
        };

        // creacion del token
        const god_user = {
            id: 1,
            username: "siacobo0",
        };
        const token = await generateJWT(god_user);

        const { statusCode, body } = await request(app).put(`/api/v3/products/${idProduct}`).auth(token, { type: "bearer" }).send(data);

        const product = await models.products.findByPk(idProduct)

        expect(statusCode).toBe(200);

        expect(body).toEqual(
            expect.objectContaining({
                producto: expect.objectContaining({
                    id: idProduct,
                    title: data.title || product.dataValues.title,
                    price: data.price || product.dataValues.price,
                    description: data.description || product.dataValues.description,
                    category_id: data.category_id || product.dataValues.category_id,
                    mostwanted: data.mostwanted || product.dataValues.mostwanted,
                    stock: data.stock || product.dataValues.stock,
                }),
            })
        );
    });
});
