const User = require('../../models/User')
const {_user} = require('../../helper/msg')

/////////////get data for a user//////////////
exports.getUser = async (req, res) => {
    try{
		
        //check if user exist in DB
        const user = await User.findById(req.params.id)
        
        if (!user) return res.status(400).json({message: _user.notFound})
        
        return res.status(200).json(user)
    
    }catch(error){
    
        return res.status(400).json({error})
    }
}

/////////////get all users data/////////////
exports.getAllUsers = async (req, res) => {
    try{

        //find users in DB
        const users = await User.find()
        
        if(!users) return res.status(400).json({message: _user.notFound})
        
        return res.status(200).json({users}) 
    
    }catch(error){
        
        return res.status(400).json({error})
    }
}

/////////////delete user////////////////
exports.deleteUser = async (req, res) => {
    try{
        
        //check for user existe
        const user = await User.findById(req.params.id)

        if (!user) return res.status(400).json({message: _user.notFound})

        //if user is admin not remove
        if (user.admin) return res.status(400).json({message: _user.deleteAdmin})
        
        //remove user
        user.remove();
        
        return res.status(200).json({message: _user.removed})
    
    }catch(error){
    
        return res.status(400).json({error})
    }
}