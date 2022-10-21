const express = require('express')

const {auth, admin} = require('../../helper/authorization')
const {getCart, getAll, remove} = require('../../controller/admin/cart')

const router = express.Router()

router.post('/:id', auth, admin, getCart)
router.post('/', auth, admin, getAll)
router.delete('/:id', auth, admin, remove)


module.exports = router;