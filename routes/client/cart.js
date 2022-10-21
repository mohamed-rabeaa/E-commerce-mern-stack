const express = require('express')

const {auth} = require('../../helper/authorization')
const {
    getCart, 
    add,
    increase,
    decrease,
    removeProduct,
    removeCart
    } = require('../../controller/cart')

const router = express.Router()

router.get('/getCart', auth, getCart)
router.post('/add', auth, add)
router.post('/increase/:id', auth, increase)
router.post('/dicrease/:id', auth, decrease)
router.delete('/removeProduct/:id', auth, removeProduct)
router.delete('/', auth, removeCart)

module.exports = router;