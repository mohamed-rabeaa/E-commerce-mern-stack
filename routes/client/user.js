const express = require('express')

const {auth} = require('../../helper/authorization')
const {upload} = require('../../helper/multerMiddleware')


const {
	profile,
	update,	
	changePass,
	remove,
	changePhoto
} = require('../../controller/user')

const router = express.Router()

router.get('/profile/:id', auth, profile)
router.put('/', auth, update)
router.post('/changePhoto', auth, upload.single('img'), changePhoto)
router.post('/changePass', auth, upload.single('img'), changePass)
router.delete('/', auth, remove)

module.exports = router