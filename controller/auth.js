const User      = require('../models/User')
const EmailToken= require('../models/EmailToken')
const PassResetToken= require('../models/PassResetToken')
const {_user}     = require('../helper/msg')
const {VerfiyToken, jwtToken} = require('../helper/sendToken')
const bcrypt    = require('bcrypt')

//////////////signup and regester//////////////////
exports.signup = async (req, res) => {

  try {

    //check if user already exist
    const userExist = await User.findOne({email: req.body.email})
    
    //if user already regester
    if (userExist && userExist.verify) {
      
      return res.status(400).json({message: _user.exist})
      
      //if user regester but not verify email  
    } else if (userExist && !userExist.verify) {
      
      return res.status(400).json({message: _user.notVerfiy})
      
    } else {
      
      //hash password
      const hashPassword = await bcrypt.hash(req.body.password, 10)
      
      //create new user
      const user = await new User(req.body)
      
      user.password = hashPassword
      
      user.save()
      
      //send token to user email for verfiy
      await VerfiyToken('Verify Email', user._id, 'verify', user.email)
      
      return res.status(200).json({message: _user.verifyEmail})
      
    }
  
  } catch (error) {
  
    return res.status(400).json(error)
  }
};

////////////receve token and verfiy user////////////
exports.verifyAccount = async (req, res) => {

  try{

    //check if user exist
    const user = await User.findOne({_id: req.params.id});

    if (!user) return res.status(400).json({message: _user.invalidLink})

    //check if user token is correct and matched
    const tokenModel = await EmailToken.findOne({
      userId: user._id,
      token: req.params.token
    });
    if (!tokenModel) return res.status(400).json({message: _user.invalidLink});
    //change inactive user to active user
    await User.updateOne(
    {
      _id: user._id
    },{$set: {
      verify: true
    }}
    );
    //remove token after verify
    await tokenModel.remove();
    
    //user data
    const data = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      admin: user.admin
    }

    //create JWT token
    const token = await jwtToken(user._id, user.email, user.admin)

    return res.status(200).json({
      message: _user.signupAndVerify, 
      token: token,
      data})

  }catch (error){
        
        return res.status(400).json({errorr: error});
  }
};

///////////////forget password and reset////////////////////
exports.forgotPass = async (req, res) => {

  try {

    //check if user exist
    const user = await User.findOne({email: req.body.email})

    if (!user) {return res.status(400).json({message: _user.wrongEmail})} 

    //send token to user email
    await VerfiyToken('Reset Password', user._id, 'resetPassword', user.email)

    return res.status(200).json({ message: _user.passToken})

  } catch (error) {
    
    return res.status(400).json(error)
  }
};

//////////////recieve token and reset password//////////////////// 
exports.resetPass = async (req, res) => {

  try{
    //check if user exist
    const user = await User.findById(req.params.id);

    if (!user) return res.status(400).json({message: _user.invalidLink})

    //check if recieve token equel with DB token
    const tokenModel = await PassResetToken.findOne({
      userId: user._id,
      token: req.params.token
    });

    if (!tokenModel) return res.status(400).json({message: _user.invalidLink});
    
    //create new password and hashed it
    user.password = await bcrypt.hash(req.body.password, 10);

    await user.save();

    //remove token from DB
    await tokenModel.remove();

    //update JWT token
    const token = await jwtToken(user._id, user.email, user.admin);

    return res.status(200).json({message: _user.reset, token: token})

  }catch (error){

    return res.status(400).json({errorr: error});
  }
}

///////////activate acount/////////////////
exports.activateAccount = async (req, res) => {

  try{
    //check for user exist
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(200).json({message: _user.wrongEmail});
    //return if user already activated
    if (user && user.verify) return res.status(400).json({message: _user.exist})
    //send token to user email for verify
    await VerfiyToken('Verify Email', user._id, 'verify', user.email)
    
    return res.status(200).json({ message: _user.verifyEmail})  
  }catch (error){
    return res.status(400).json(error);
  }
}

////////////login//////////////
exports.login = async (req, res) => {
    
  try{

    //check if user exist
    const user = await User.findOne({email: req.body.email})

    //if user not exist
    if(!user) return res.status(400).json({message: _user.wrongEmail});

    //if user exist but not verify
    if(!user.verify) return res.status(400).json({message: _user.notVerfiy});

    //compare password
    const correctPass = await bcrypt.compare(
      req.body.password.toString(), 
      user.password 
    );

    if(!correctPass) return res.status(400).json({message: _user.wrongPass});    

    //user data
    const data = {
      id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      admin: user.admin,
      createdAt: user.createdAt
    }

    //send JWT token
    const token = await jwtToken(user._id, user.email, user.admin);    

    return res.status(200).json({message: _user.login, data, token: token})

  }catch (error){

    return res.status(400).json({error: error})
  }
}