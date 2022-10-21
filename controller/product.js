const Product = require('../models/Product')
const {_item} = require('../helper/msg')

////////////get product data by id///////////////
exports.getProduct = async (req, res) => {
    try{

        //found product in DB
        const product = await Product.findById(req.params.id)
        
        if (!product) return res.status(400).json({message: _item.notFound})
        
        return res.status(200).json({data: product})
    }catch(error){
        return res.status(400).json({error})
    }
}

////////////get all products///////////////
exports.getAll = async (req, res) => {
    try{

        //find products in DB
        const products = await Product.find()
        
        if(!products) return res.status(400).json({message: _item.notFound})          
        
        return res.status(200).json({data: products}) 
    
    }catch(error){
        return res.status(400).json({error})
    }
}

/////////////get products in a category//////////////
exports.byCategory = async (req, res) => {
    try{

        //find products by category id
        const products = await Product.find({category: req.params.id})
        
        if(!products) return res.status(400).json({message: _item.notFound})          
        
        return res.status(200).json({data: products}) 
    
    }catch(error){
        return res.status(400).json({error})
    }
}

exports.searchProduct = async (req, res) => {
    try{
      
        //found product in DB
        let recentProductData;
        let bestSellerData;

        if(req.query.searchBy === 'recentProduct') {
            recentProductData = await Product.find().sort({_id:-1}).limit(8)
        } 
        if(req.query.searchBy === 'bestSeller') {
            bestSellerData = await Product.find().sort({_id:1}).limit(8)
        } 
        return res.status(200).json({recentProductData, bestSellerData})
    }catch(error){
        return res.status(400).json({error})
    }
}

