const initModels = require("../database/models/init-models");
const { sequelize } = require('../database/models');

const models = initModels(sequelize);

const verifyUnique = {

    verifyEmail: async (email) => {

        const exist =  await models.users.findOne({
            where: [{email: email}],
          }) 
          if (exist) {
            throw new Error('El email ya se encuentra registrado')
        }
    },


    verifyUsername: async (username) => {

        const exist =  await models.users.findOne({
            where: [{username: username}],
          }) 
          if (exist) {
            throw new Error('El username ya se encuentra utilizado')
        }
    }

}

module.exports = {verifyUnique};