
const { Op } = require('sequelize');
const initModels = require("../../database/models/init-models");
const { sequelize, Sequelize } = require("../../database/models");
const Utils = Sequelize.Utils;
const { QueryTypes } = require('sequelize');


const models = initModels(sequelize);

const productController = {

    //   ----------------------   //


  allProduct: async function (req, res) {
    
    try {
      const getAllProduct = await models.products.findAll({
        include: [
          {
            model: models.category,
            as: "category",
          },
        ],
      });

      res.status(200).json(getAllProduct);
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: "Error del servidor al cargar los productos",
      });
      console.log("Catch error" + error);
    }
  },


  //   ----------------------   //


  oneProduct: async function (req, res) {
   

    try {
      const oneProduct = await models.products.findOne({
        where: {
          id: req.params.id,
        },
        include: [
          {
            model: models.category,
            as: "category",
          },
        ],
      });

      if (!oneProduct) {
        res.status(404).json({
          ok: false,
          msg: "El producto no existe",
        });
      } else {
        res.status(200).json(oneProduct);
      }
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: "Error del servidor "
      });
    }
  },

  //   ----------------------   //


  createProdut: async function (req, res) {  
   

    try {
      models.products.create({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category_id: req.body.category,
        mostwanted: req.body.mostwanted,
        stock: req.body.stock,
      });
      const producto = await models.products.findOne({where: {title: req.body.title}})
      res.status(200).json({
        producto
      });
    } catch (error) {
      res.status(500).json({
        ok: false,
        message: "Error del servidor al crear el producto",
      });
    }
  },

  //   ----------------------   //

  productEdit: async function (req, res) { 
    

    try {
      await models.products.update(
        {
          title: req.body.title,
          price: req.body.price,
          description: req.body.description,
          category_id: req.body.category,
          mostwanted: req.body.mostwanted,
          stock: req.body.stock,
        },
        {
          where: {
            id: req.params.id,
          },
        }
      );
      const producto = await models.products.findByPk(req.params.id)
      res.status(200).json({
        producto
      });
    } catch (error) {
     res.status(500).json({
      ok: false, 
      message: "Error del servidor",
     })
    }
  },

  //   ----------------------   //

  mostWanted: async function (req, res) {    
    try {
      const mostwanted =  await models.products.findAll({
        where: {
          mostwanted : true
        }
      });

      res.status(200).json(mostwanted)

    } catch (err) {
      console.log(err);
      res.status(400).json({
        ok: false,
        message: "Error inesperado",
      });
    }
  },

  //   ----------------------   //


  getPicByProductId: async (req, res) => {
    const paramsId = req.params.id;

    try {

      const productImage = await models.products.findByPk( paramsId ,{
        attributes: { exclude: ['price', 'description', 'category_id', 'mostwanted', 'stock']},
        include: [
          {
            model: models.pictures,
            as: "pictures",
            attributes: {
              exclude: ['product_id']
            }
          }]
      } 
      )

        if(productImage == null || productImage.pictures.length === 0){
       
            res.status(404).json({
              ok: true, 
              message: "Este producto no tiene imagenes asociadas"
        })
        } else {
          res.status(200).json(productImage)
        }
      
     
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "server error",
      });
    }
  },

   //   ----------------------   //

   listCategory: async (req, res) => {
    let categoryParam = req.query.category;
    

    try {
      const product = await models.products.findAll({ 
        include: [
          {
            model: models.category,
            as: "category",
            where: {
              id: categoryParam
            }
          },
        ],


      })
      if(product.length === 0){
        res.status(400).json({
          ok: false,
          message: "No existe esa categoria"
        })
      } else {
        res.status(200).json(product)
      }
      
      
 } catch (err) {
      console.log(err);
      res.status(500).json({
        ok: false,
        message: "Error interno",
      });
    }
  },

  rutaProducts: (req, res) => {
    if (req.query.category) {
      productController.listCategory(req, res);
    } else {
      productController.allProduct(req, res);
    }
  },

   //   ----------------------   //

  searchProduct: async (req, res) => {
    try {
      let search = req.query.q
      search=search.toLowerCase()
      const whereClause = {
        [Op.or]: [
            sequelize.where(
                sequelize.fn('LOWER', sequelize.col('title')), {[Op.like]: `%${search}%`}
            ),
            sequelize.where(
                sequelize.fn('LOWER', sequelize.col('description')), {[Op.like]: `%${search}%`}
            )
        ]
    }

    const filteredProducto = await models.products.findAll({
        where: whereClause
      })
    
    if (filteredProducto.length === 0) {
       res.status(404).json({ ok: false, message: "No se encontraron productos" });
       } else {
        res.status(200).json(filteredProducto)
       }
    } catch (error) {
      console.log(error)
      res.status(500).json({ ok: false, message: "Error al obtener los productos" });
    }
  },

//   ----------------------   //

  deleteProduct: async (req, res) => {
    const { id } = req.params;

    try {
       const searchingProductToDelete = await models.products.findByPk(id);
       
      if(searchingProductToDelete != undefined) {
        await models.pictures.destroy({
          where: {product_id : req.params.id}
        })
        await models.product_cart.destroy({
          where: {product_id : req.params.id}
        })
        await searchingProductToDelete.destroy();
        res.status(200).json({
          ok: true,
          message: "El producto se eliminó con exito"
        })
      } else {
        
        res.status(400).json({
          ok: false, 
          message: "El producto que desea eliminar no existe en nuestra base de datos"
        })
      }
        
      
    } catch (error) {
      console.log(error);
      res.status(500).json({
        ok: false,
        msg: "Error del servidor al eliminar el producto",
      });
    }
  },
};

module.exports = productController;

