const Cart = require('../../models/Cart')
const {_cart} = require('../../helper/msg')

/////////////get user cart///////////////
exports.getCart = async (req, res) => {
    try{

        //find cart in DB by user id
        const cart = await Cart.findById(req.params.id).populate('user')

        if (!cart) return res.status(400).json({message: _cart.notFound})
        
        return res.status(200).json({data: cart})
    
    }catch(error){
    
        return res.status(400).json({error})
    }
}

////////////get all carts//////////////
exports.getAll = async (req, res) => {
    try{

        //find cart in DB
        const carts = await Cart.find().populate('user')

        if(!carts) return res.status(400).json({message: _cart.notFound}) 

        return res.status(200).json({data: carts})

    }catch(error){

        return res.status(400).json({error})
    }
}

////////////////delete cart from DB/////////////////
exports.remove = async (req, res) => {
    try{

        //find cart and delete in DB
        const cart = await Cart.findByIdAndDelete(req.params.id)
        
        if (!cart) return res.status(400).json({message: _cart.notFound})  
      
        return res.status(200).json({message: _cart.removed})

    }catch(error){
        
        return res.status(400).json({error})
    }
}
