const express = require("express");
const {check, checkBody} = require("express-validator")

const router = express.Router();
const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUserById,
  login,
} = require("../controllers/usersController");



const cartsController = require('../controllers/cartsController');

const verifyJWT = require('../middlewares/verifyJWT');
const isAuthenticated = require('../middlewares/verifyRoles');
const handleErrors = require("../middlewares/handleErros");


const { verifyUnique } = require('../../helpers/verifyUnique');


router.get('/', verifyJWT, isAuthenticated(['GOD', 'ADMIN']), getUsers);

router.get("/:id", verifyJWT, isAuthenticated(['GOD', 'ADMINID', 'GUESTID']), getUserById);


router.put("/:id", verifyJWT, isAuthenticated(['GOD', 'ADMINID', 'GUESTID']),
      check ('email').custom(verifyUnique.verifyEmail),
      check('email', 'formato de email no es valido').isEmail(),
      check ('username').custom(verifyUnique.verifyUsername),
      handleErrors, 
      updateUser);

router.post('/',
      check('username', 'el username es requerido').not().isEmpty(),
      check('email', 'el email es requerido').not().isEmpty(),
      check('password', 'la contraseña es requerida').not().isEmpty(),
      check('first_name', 'first name es requerida').not().isEmpty(),
      check('last_name', 'last name es requerida').not().isEmpty(),
      check('email', 'formato de email no es valido').isEmail(),
      check ('email').custom(verifyUnique.verifyEmail),
      check ('username').custom(verifyUnique.verifyUsername),
      handleErrors,
      createUser);


router.delete("/:id", verifyJWT, isAuthenticated(['GOD', 'ADMINID', 'GUESTID']), deleteUserById);

router.get('/:id/cart', verifyJWT, isAuthenticated(['GOD', 'ADMIN', 'GUESTID']), cartsController.listCart);

router.put('/:id/cart', verifyJWT, isAuthenticated(['GOD', 'ADMINID', 'GUESTID']), cartsController.updateCart);

router.get( '/:id/cart', verifyJWT, isAuthenticated(["GOD", "ADMIN", "GUESTID"]), cartsController.listCart);


router.post('/login',
      check('username', 'el username es requerido').not().isEmpty(),
      check('password', 'la contraseña es requerida').not().isEmpty(),
      handleErrors,
      login);


module.exports = router;
