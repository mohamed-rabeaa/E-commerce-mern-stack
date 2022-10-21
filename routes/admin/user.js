const express = require('express')

const {auth, admin} = require('../../helper/authorization')
const {
    getUser, 
    getAllUsers,
    deleteUser
    } = require('../../controller/admin/user')

const router = express.Router()

router.get('/:id', auth, admin, getUser)
router.get('/', auth, admin, getAllUsers)
router.delete('/:id', auth, admin, deleteUser)

module.exports = router;