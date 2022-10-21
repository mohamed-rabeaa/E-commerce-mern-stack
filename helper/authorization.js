const {_auth} = require('./msg')
const JWT = require('jsonwebtoken')

//////////check if user have token to access data///////////
exports.auth = async (req, res, next) => {

	try{
		//console.log('check authorization')

		//console.log(req.body)
		//console.log(req.headers)
		if (!req.headers.authorization) return res.status(400).json({message: _auth.authorization})

		 const token = req.headers.authorization.split(' ')[1];

		const user = await JWT.verify(token, process.env.SECRETJWT);

		req.user = user;

		console.log('user check success')

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
		console.log('admin check success')
		next();

	}catch(err){
		return res.status(400).json(err)
	}
}