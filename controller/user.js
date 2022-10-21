const User 			 = require('../models/User')
const bcrypt 		 = require('bcrypt')
const {jwtToken} = require('../helper/sendToken')
const {_user} 	 = require('../helper/msg');

/////////////get data for profile page//////////////////
exports.profile = async (req, res) => {

	try{
		//check if user exist in DB
		const user = await User.findById(req.params.id);

		if (!user) return res.status(400).json({message: _user.notFound})

		//extract data without password	
		const {password, ...others} = user._doc;

		return res.status(200).json({user: others})

	}catch(err){

		return res.status(400).json(err)
	}
};

////////////update data for user///////////////
exports.update = async (req, res) => {

	try{

		//check for user exist and update data
		const user = await User.findOneAndUpdate(
			{_id: req.body.id},
			{$set: req.body},
			{new: true}
		);

		if (!user) return res.status(400).json({message: _user.notFound})

		//update JWT token
		const token = await jwtToken(user._id, user.email, user.admin)

		//extract data without password	
		const {password, ...others} = user._doc;

    return res.status(200).json({data: others, token: token})

	}catch(err){
		return res.status(400).json(err)
	}
}

exports.changePhoto = async (req, res) => {

	const imgUrl = req.file.filename

	const updateUser = await User.findOneAndUpdate({_id: req.user.id},
		{$set:{
			img: imgUrl
		}},{new: true})

		const data = {
			id: updateUser._id,
			firstName: updateUser.firstName,
			lastName: updateUser.lastName,
			email: updateUser.email,
			createdAt: updateUser.createdAt,
			admin: updateUser.admin,
			img: updateUser.img
		  }

	if(updateUser) {
		return res.status(200).json({message: _user.imgAdd, data})
	}else {
		return res.status(400).json({message: _user.notFound})
	}
}

//////////////change password////////////////
exports.changePass = async (req, res) => {

	try{

		//check for user exist
		const user = await User.findOne({_id: req.body.id});

		if (!user) return res.status(400).json({message: _user.notFound})
    
    //compare user password with inpute password
    const correctPass = await bcrypt.compare(
      req.body.oldPassword.toString(), 
      user.password 
    );

    if(!correctPass) return res.status(400).json({message: _user.wrongPass});
    
    //hash new password
    const newPassword = await bcrypt.hash(req.body.newPassword, 12)
    
    user.password = newPassword;
    
    await user.save()

    //update JWT token
		const token = await jwtToken(user._id, user.email, user.admin)

		//extract data without password	
		const {password, ...others} = user._doc;

    return res.status(200).json({data: others, token: token})

	}catch(err){
		return res.status(400).json(err)
	}
}


//////////////delete user///////////////
exports.remove = async (req, res) => {

	try{

		//check for user existe
		const user = await User.findOne({_id: req.body.id});		

		if(!user) return res.status(400).json({message: _user.notFound})
		
		//check for correct password
		const correctPass = await bcrypt.compare(
      req.body.password.toString(), 
      user.password 
    );

    if(!correctPass) return res.status(400).json({message: _user.wrongPass});

    await user.remove()

		return res.status(200).json({message: _user.removed})

	}catch(err){
		return res.status(400).json(err)
	}

};