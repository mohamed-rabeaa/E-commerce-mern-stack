const express = require('express')
const router = express.Router()

////////////all routes of client/////////////
const authRoutes = require('./client/auth')
router.use('/auth', authRoutes)

const userRoutes = require('./client/user')
router.use('/user', userRoutes)

const cateRoutes = require('./client/category')
router.use('/category', cateRoutes)

const productRoutes = require('./client/product')
router.use('/product', productRoutes)

const cartRoutes = require('./client/cart')
router.use('/cart', cartRoutes)

module.exports = router;