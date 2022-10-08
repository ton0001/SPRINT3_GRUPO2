const express = require("express");
const { check } = require("express-validator");
const router = express.Router();
const {
  getPictureById,
  updatePic,
  createPic,
  deletePicture,
  getPictureByProductId,
} = require("../controllers/picturesController");
const handleErrors = require("../middlewares/handleErros");
const verifyJWT = require("../middlewares/verifyJWT");
const {isAuthenticated} = require("../middlewares/verifyRoles");

//router.get('/:id', verifyJWT, getPictureById);
//router.get('/', verifyJWT, getPictureByProductId)
//router.post('/', verifyJWT, isAuthenticated(['GOD']), createPic);
//router.put('/:id', verifyJWT, isAuthenticated(['GOD', 'ADMIN']), updatePic);
//router.delete('/:id', verifyJWT, isAuthenticated(['GOD']), deletePicture);

router.get("/", verifyJWT, getPictureByProductId);

router.get("/:id", verifyJWT, getPictureById);

router.post(
  "/",
  verifyJWT,
  isAuthenticated(["GOD"]),
  check("url", "se necesita una url").not().isEmpty(),
  check("description", "se necesita una descripcion").not().isEmpty(),
  check("product_id", "se necesita una producto para asociarlo")
    .not()
    .isEmpty(),
  handleErrors,
  createPic
);

router.put(
  "/:id",
  verifyJWT,
  isAuthenticated(["GOD"]),
  check("url", "se necesita una url").not().isEmpty(),
  check("description", "se necesita una descripcion").not().isEmpty(),
  check("product_id", "se necesita una product_id").not().isEmpty(),
  handleErrors,
  updatePic
);

router.delete("/:id", verifyJWT, isAuthenticated(["GOD"]), deletePicture);

module.exports = router;
