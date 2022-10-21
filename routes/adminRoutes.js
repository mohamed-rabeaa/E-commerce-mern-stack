const express = require('express')
const router = express.Router()

///////////all routes of admin/////////////
const user = require('./admin/user')
router.use('/user', user)

const category = require('./admin/category')
router.use('/category', category)

const product = require('./admin/product')
router.use('/product', product)

const cart = require('./admin/cart')
router.use('/cart', cart)

module.exports = router;
