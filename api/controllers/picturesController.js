const initModels = require("../../database/models/init-models");
const { sequelize } = require('../../database/models');
const models = initModels(sequelize);

// busca en la tabla de pictures el id de producto que se desee buscar
const getPictureByProductId = async (req, res) => {
  try {
    const resp = await models.pictures.findAll({
        where: {product_id: req.query.product}
    })

    if(resp.length > 0){
        res.status(200).json({
            ok: true,
            resp
        });
    }else{
        res.status(404).json({
            ok: false,
            message: 'no data found'
        });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: "server error",
    });
  }
};

//funcion que devuelve una imagen por el id de la misma
const getPictureById = async(req, res) => {
  try {

    const bodyId = req.params.id;

    const resp = await models.pictures.findByPk(bodyId);
    

    if (resp == null) {
      res.status(404).json({
        ok: false,
        message: "no existe imagen con tal id",
      });
    } else {
      res.status(200).json({
        ok: true,
        resp,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: "server error",
    });
  }
};


//funcion para crear una nueva picture
const createPic = async (req, res) => {

  try {

    // trae los datos necesarios desde el body
    const bodyUrl = req.body.url;
    const bodyDescription = req.body.description;
    const bodyProductId = req.body.product_id;

    //si no llegan los datos requeridos lanza una respuesta de error
    if(!bodyUrl || !bodyProductId){
        return res.status(400).json({
            ok: false,
            message: 'faltan campos requeridos'
        })
    }


    await models.pictures.create({
        url : bodyUrl,
        description : bodyDescription,
        product_id : bodyProductId
    });

    res.status(200).json({
      ok: true,
      message: "imagen agregada",
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: "server error",
    });
  }
};

//funcion que actualiza los datos de una picture
const updatePic = async (req, res) => {
  try{ 
    const modificado = await models.pictures.update(
      req.body,
      {where: {id: req.params.id}})
      if (modificado[0]==1){
        res.status(200).json({
                ok: true,
                msg: "imagen actualizada con exito",
              })
      }
      else if (modificado[0]==0 ){
        res.status(400).json({
          ok: false,
          msg: "no se encontro imagen para actualizar o la imagen ya se encuentra actualizada",
        })
      }
  } catch(error){
    console.log(error)
    res.status(500).json({
      ok: false,
      message: "Error del servidor"
    })
  } 
  
};

//funcion para eliminar una picture
const deletePicture = async (req, res) => {
  try {

    await models.pictures.destroy({
        where: {id: req.params.id}
    })

    res.status(200).json({
       ok: true,
       message: "imagen eliminada con exito",
    });
    

  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: "server error",
    });
  }
};


module.exports = {
  createPic,
  updatePic,
  getPictureById,
  deletePicture,
  getPictureByProductId,
};
