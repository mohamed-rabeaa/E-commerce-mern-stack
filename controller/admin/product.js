const Product = require('../../models/Product')
const {_item} = require('../../helper/msg')

/////////////create new product////////////
exports.create = async (req, res) => {
    try{

        data = {
            name: req.body.name,
            desc: req.body.desc,
            price: req.body.price,
            category: req.body.category,
            img: req.files[0].filename
        }
       
        const product = await new Product(data).save()

        return res.status(200).json({message: _item.create, data: product})
        
    }catch(error){
        return res.status(400).json({error})
    }
}

/////////////get product data by id/////////////
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

///////////update product/////////////
exports.update = async (req, res) => {
    try{

        const inputData = req.body;

        //find product in DB and update
        const product = await Product.findOneAndUpdate({_id: req.body.id}, 
            {$set: inputData}, 
            {new: true})
        
        if (!product) return res.status(400).json({message: _item.notFound})
        
        return res.status(200).json({data: product})
        
    }catch(error){
        
        return res.status(400).json({error})
    }
}

////////////remove product//////////////
exports.remove = async (req, res) => {
    try{

        //find product by id
        const product = await Product.findById(req.body.id)

        if (!product) return res.status(400).json({message: _item.notFound})

        //remove product
        await product.remove()

        return res.status(200).json({message: _item.removed})
    
    }catch(error){
        
        return res.status(400).json({error})
    }
}
