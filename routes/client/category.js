const express = require('express')
const { cateByorder } = require('../../controller/admin/category')

const { getCate, getAll } = require('../../controller/category')

const router = express.Router()

router.get('/oneCategory', getCate)
router.get('/allCategories', getAll)
router.get('/cateByorder', cateByorder)

module.exports = router;