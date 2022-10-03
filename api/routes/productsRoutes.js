const express = require('express');
const router = express.Router();
const {check} = require("express-validator")
const productController = require('../controllers/productsController');
const handleErrors = require('../middlewares/handleErros');
const verifyJWT = require('../middlewares/verifyJWT');
const isAuthenticated = require('../middlewares/verifyRoles');
 

// router.get('/', verifyJWT, productController.listCategory)
// router.get('/', productController.allProduct)
router.get('/', verifyJWT, productController.rutaProducts)
router.get('/mostwanted', verifyJWT,  productController.mostWanted)
router.get("/search", verifyJWT , productController.searchProduct);
router.get('/:id/pictures', verifyJWT, productController.getPicByProductId)
router.get('/:id', verifyJWT, productController.oneProduct)
router.post('/', verifyJWT, isAuthenticated(['GOD']), 
        check('title', 'nombre del producto es requerido').not().isEmpty(),
        check('price', 'un precio es requerido').not().isEmpty(),
        check('description', 'una descripcion es requerida').not().isEmpty(),
        check('category', 'una categoria es requerida').not().isEmpty(),
        handleErrors,
        productController.createProdut)

router.put('/:id', verifyJWT, isAuthenticated(['GOD', 'ADMIN']), productController.productEdit)

router.delete("/:id", /*verifyJWT, isAuthenticated(['GOD', 'ADMIN']),*/ productController.deleteProduct)


module.exports = router;
