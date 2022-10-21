const express = require('express')

const {    
    getProduct, 
    getAll,
    byCategory,
    searchProduct
    } = require('../../controller/product')

const router = express.Router()

router.get('/oneProduct/:id', getProduct)
router.get('/allProduct', getAll)
router.get('/byCategory/:id', byCategory)
router.get('/searchProduct', searchProduct)

module.exports = router;