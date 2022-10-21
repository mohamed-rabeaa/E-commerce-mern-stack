const express = require('express')
const {
	signupValidation, 
	loginValidation, 
	validatResult
} = require('../../helper/validate')

const {
	signup, 
	verifyAccount, 
	activateAccount, 
	forgotPass, 
	resetPass, 
	login
} = require('../../controller/auth')

const router = express.Router()

/////////////signup//////////////
router.post('/signup', signupValidation, validatResult, signup)
router.get('/:id/verify/:token', verifyAccount )
router.post('/activateAccount', activateAccount)

/////////////reset password//////////////
router.post('/resetPassword', forgotPass)
router.post('/:id/resetPassword/:token', resetPass )

///////////////login//////////////
router.post('/login', loginValidation, validatResult, login)

module.exports = router