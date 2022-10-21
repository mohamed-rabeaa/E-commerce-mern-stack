const Cart = require("../models/Cart");
const {_cart} = require('../helper/msg')

/////////////get user cart///////////////
exports.getCart = async (req, res) => {
  try {

    //find cart in DB by user id
    const cart = await Cart.findOne({ user: req.user.id }).populate('user cartItems.product');
    
    if(!cart) return res.status(400).json({message: _cart.notFound})
    
    return res.status(200).json({data: cart});
  
  } catch (err) {
  
    return res.status(400).json(err);
  }
};

/////////////add product to cart//////////////
exports.add = async (req, res) => {
  try {

    //check if user has cart before
    const existCart = await Cart.findOne({user: req.user.id})
      //if user has already cart
      if  (existCart) {

        //loop for know if product already exist in cart
        req.body.cartItems.forEach((cartItem) => {
        const productid = cartItem.product;
        const item = existCart.cartItems.find((c) => c.product == productid);
        
        //if product already exist
        if (item) {

          //update product quantity and increament
          const newCart =  Cart.findOneAndUpdate({
            user: req.user.id, 
            'cartItems.product': productid
          },{$inc : {
              'cartItems.$.quantity': 1}
            }
          ,{new: true }).exec((err, result)=> {
            if(err) return res.status(400).json({err})
            if (result) return res.status(200).json({data: result}) 
          })
        
        //if product not exist
        }else {

         //push product in cartitems in DB 
         const newCart = Cart.findOneAndUpdate({
            user: req.user.id 
          },{$push: {
            cartItems: cartItem
          }}, {new: true }).exec((err,result) => {
                if(err) return res.status(400).json({err})
                if (result) return res.status(200).json({data: result})
            })//.thin(return res.status(200).json({data: newCart}));
        }
      })

    //create new cart
    }else {

      const cart = new Cart({
            user: req.user.id,
            cartItems: req.body.cartItems,
        })

      cart.save((error, cart) => {
        if (error) return res.status(400).json({ error });
        if (cart) {
          return res.status(201).json({data: cart});
        }
      });
    } 
       
  } catch (err) {

    res.status(400).json(err);
  }
};

/////////////increase product quantity in cart///////////////
exports.increase = async (req, res) => {
  try {

    //find cart and update it by increment
    const newCart = await Cart.findOneAndUpdate({
       user: req.user.id, 
      'cartItems.product': req.params.id
      },{$inc : {
            'cartItems.$.quantity': 1}
      }
      ,{new: true,}).populate('user cartItems.product')
      if (!newCart) return res.status(400).json({message: _cart.notFound})
      if (newCart) return res.status(200).json({data: newCart, message: _cart.increase})
    
    } catch (err) {
    res.status(500).json(err);
  }
};

/////////////decrease product quantity in cart///////////////
exports.decrease = async (req, res) => {
  try {

    //find cart and update it by decrement
    const newCart = await Cart.findOneAndUpdate({
      user: req.user.id, 
      'cartItems.product': req.params.id
      },{$inc : {
            'cartItems.$.quantity': -1}
      }
      ,{new: true,}).populate('user cartItems.product')

      if(newCart) return res.status(200).json({data: newCart, message: _cart.decrease})

  } catch (err) {
    res.status(400).json(err);
  }
};

//////////////remove a product from cart////////////////// 
exports.removeProduct = async (req, res) => {

    //find cart and pull product from cartitems in DB
    const newCart = await Cart.findOneAndUpdate(
      { user: req.user.id },
      {
        $pull: {
          "cartItems": {
            "product": req.params.id,
          },
        },
      },{new: true}).populate('user cartItems.product')

      if (!newCart) return res.status(400).json({message: _cart.notFound})
      if (newCart) return res.status(200).json({data: newCart, message: _cart.producRemoved})

};

////////////////delete cart from DB/////////////////
exports.removeCart = async (req, res) => {
  
  try {
    
    //find cart and delete in DB
    const cart = await Cart.findOneAndDelete({user: req.user.id}).exec((err,result) => {
        if(err) return res.status(400).json({err})
        if (result) return res.status(200).json({message: _cart.removed})
    }); 

  } catch (err) {

    res.status(400).json(err);
  }
};