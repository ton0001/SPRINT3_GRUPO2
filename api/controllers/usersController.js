
const { generateJWT } = require('../../helpers/generateJWT');
const initModels = require('../../database/models/init-models');
const { sequelize } = require('../../database/models');
const carts = require('../../database/models/carts');
const users = require('../../database/models/users');
const e = require('express');
const models = initModels(sequelize);

/*recupero la lista de usuarios, respondo con un array conteniendo 
todos los usuarios del sistema */
const getUsers = async (req, res) => {
  try {
    const users = await models.users.findAll({
      include: [
        {
          model: models.carts,
          as: 'carts',
          attributes: { exclude: ['user_id', 'password']  },
          include: [
            {
              model: models.product_cart,
              as: 'product_carts',
              attributes: [
                'product_id',
                'quantity',
                'created_at',
                'updated_at',
              ],
            },
          ],
        },
      ],
      attributes: { exclude: ['password'] },
    });

    res.status(200).json(users);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: 'Error al obtener los usuarios!' });
  }
};

/*recupero el user con el id solicitado. 
Responde con la informacion completa del usuario solicitado
si no existe, respondo con un mensaje de error 
200 OK.
404 Not Found (si el user no existe)
500 Server Error.*/

const getUserById = async (req, res) => {
  try {
    const user = await models.users.findOne({
      where: { id: req.params.id },
      attributes: { exclude: ['password'] },
      include: [
        {
          model: models.carts,
          as: 'carts',
          attributes: { exclude: ['user_id'] },
          include: [
            {
              model: models.product_cart,
              as: 'product_carts',
              attributes: [
                'product_id',
                'quantity',
                'created_at',
                'updated_at',
              ],
            },
          ],
        },
      ],
    });
   
    if (!user) {
      res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });
    }
    else{
      res.status(200).json(user);
    }
  } catch (error) {
    res.status(500).json({ ok: false, msg: 'Error al obtener el usuario' });
  }
};

/*Creo un nuevo Usuario. Debe recibir un body con la informacion del usuario a crear. 
Responde con la informacion completa del usuario creado*/


const createUser = async (req, res) => {
  let user
  try{
      user =  await models.users.create(req.body)
      userCreated = await models.users.findOne({
        where: {username: req.body.username},
        attributes: {exclude: ['user_id', 'password'] 
      }
      })

  }catch(error){
    return res.status(500).json({ok: false, msg: "Hubo un error al crear el usuario"});
  }
  try{
    await models.carts.create({
      user_id : user.id })

      res.status(200).json(
        userCreated.dataValues
      );


  }catch(error){
    return res.status(500).json({ ok: false, msg: "Hubo un error al crear el carrito del usuario"});
  }
}

/*Actualiza un usuario identificado con id. 
Debe recibir un body con la informacion del usuario a actualizar. 
Responde con la informacion completa del usuario actualizado.
responder con error 400 si es una bad request
responder con error 404 si el usuario no existe
responder con error 500 si hay un error en el servidor*/

const updateUser = async (req, res) => {
  try {
    const user = await models.users.findOne({
      where: { id: req.params.id },
      attributes: {exclude: ['user_id']}
        
    });
    if(!user){
      res.status(404).json({ ok: false, msg: "Usuario no encontrado" });
    }else{
      const updatedUser = await models.users.update(req.body, {
        where: { id: req.params.id },
      });
      const userUpdated = await models.users.findByPk(req.params.id, {
        attributes: { exclude: ['password']}
      })

      if (updatedUser) {
        res.status(200).json(
          userUpdated.dataValues
      )}
    }
  } catch (error) {
    res.status(500).json({ok: false,  msg: "Error al actualizar el usuario" });
  }
};

/*Elimina un usuario identificado con id. Cuando se elimina un usuario, 
antes debe verificar vaciarse su carrito. Responde con informacion sobre la eliminacion realizada.
200 OK.
400 Bad Request (si la llamada es incorrecta)
404 Not Found (si el user no existe)
500 Server Error.*/


const deleteUserById = async (req, res) => {
  try {
    const user = await models.users.findOne({
      where: { id: req.params.id },
      include: [
        {
          model: models.carts,
          as: 'carts',
          include: [
            {
              model: models.product_cart,
              as: 'product_carts',
              attributes: [
                'product_id',
                'quantity',
                'created_at',
                'updated_at',
              ],
            },
          ],
        },
      ],
    });
    if (!user) {
      res.status(404).json({ ok: false, msg: 'Usuario no encontrado' });
    }
    else{
      // console.log('PRODUCTS:', user.carts.product_carts.length);
      if (user.carts.product_carts.length == 0) {
        await models.carts.destroy({
          where: { user_id: req.params.id },
        });
        await user.destroy();
        res.status(200).json({ ok: true, msg: 'Usuario eliminado!!!!' });
      } else {
        res.status(400).json({
          ok: false,
          msg: 'No se puede eliminar un usuario con productos en el carrito',
        });
      }
    }
  } catch (error) {
      res.status(500).json({ ok: false, msg: 'Error al eliminar el usuario' });
  }
};


const login = async (req, res)=>{

  const {username, password} = req.body;

  try {
      const user_exist = await models.users.findOne({
        where: [{username: username}, {password: password}],
      }) 
      // console.log(user_exist);

      if (!user_exist){
        return res.status(400).json({
          ok: false,
          msg: 'Wrong password or username'
        })
      }

      const userLog = {
          id: user_exist.id,
          username: user_exist.name
       }

      const token = await generateJWT(userLog)

      res.status(200).json({
          'success': true,
          'msg': 'Authorized Login Success',
          'user': userLog,
          token,
      })

  }
  catch(error){
      res.status(500).json({ ok:false, mgs: 'Error in login'})

  }
}


module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
  login,
};

