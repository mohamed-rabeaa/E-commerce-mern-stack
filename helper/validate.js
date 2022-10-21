const { check, validationResult } = require('express-validator')

const {_valid} = require('./msg')

/////////////check and validation signup inpute///////////////
exports.signupValidation = [

  check('firstName').not().isEmpty().withMessage(_valid.firstNameRequired),

  check('lastName').not().isEmpty().withMessage(_valid.lastNameRequired),

  check('email', _valid.emailInvalid).isEmail(),

  check('password').isLength({

    min:6

  }).withMessage(_valid.passInvalid)
];


/////////////check and validation login input///////////////
exports.loginValidation = [

  check('email', _valid.emailInvalid).isEmail(),

  check('password').isLength({

    min:6

  }).withMessage(_valid.passInvalid)

];


///////////////validation result/////////////////
exports.validatResult = (req, res, next) => {

  const errors = validationResult(req).array();

  if (errors.length > 0 ) { return res.status(400).json(errors)}

  next();

}