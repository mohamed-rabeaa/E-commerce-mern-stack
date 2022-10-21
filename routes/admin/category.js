const express = require('express')

const {auth, admin} = require('../../helper/authorization')
const {upload} = require('../../helper/multerMiddleware')

const {
    create,
    getCate, 
    getAll,
    update,
    remove,
    cateByorder
    } = require('../../controller/admin/category')

const router = express.Router()

router.get('/oneCategory/:id', auth, admin, getCate)
router.get('/', auth, admin, getAll)
router.get('/cateByorder', auth, admin, cateByorder)
router.post('/create', auth, admin, upload.any('img'), create)
router.put('/', auth, admin, update)
router.delete('/', auth, admin, remove)


module.exports = router;