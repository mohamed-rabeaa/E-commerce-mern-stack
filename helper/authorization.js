const {_auth} = require('./msg')
const JWT = require('jsonwebtoken')

//////////check if user have token to access data///////////
exports.auth = async (req, res, next) => {

	try{

		if (!req.headers.authorization) return res.status(400).json({message: _auth.authorization})

		 const token = req.headers.authorization.split(' ')[1];

		const user = await JWT.verify(token, process.env.SECRETJWT);

		req.user = user;

		next();

	}catch(err){
		return res.status(400).json(err)
	}
}


///////////check if user token for admin//////////////
exports.admin =  (req, res, next) => {

	try{
		
		if (!req.user.admin || req.user.admin == "") {
			return res.status(400).json({message: _auth.admin})
		}
		next();

	}catch(err){
		return res.status(400).json(err)
	}
}