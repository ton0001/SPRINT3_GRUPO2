const express = require('express');
const router = express.Router();
const cartsController = require('../controllers/cartsController');
const verifyJWT = require('../middlewares/verifyJWT');
const {isAuthenticated} = require('../middlewares/verifyRoles');

router.get('/:id', verifyJWT, isAuthenticated(['GOD', 'ADMINID', 'GUESTID']), cartsController.listCart);

router.put('/:id', verifyJWT, isAuthenticated(['GOD', 'ADMINID', 'GUESTID']), cartsController.updateCart);

module.exports = router;