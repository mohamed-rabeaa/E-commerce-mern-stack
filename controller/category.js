const Category = require('../models/Category')
const {_cate} = require('../helper/msg')

///////////get a category by id////////////
exports.getCate = async (req, res) => {
    try{

        //find category in DB
        const category = await Category.findById(req.params.id)
        
        if (!category) return res.status(400).json({message: _cate.notFound})
        
        return res.status(200).json({data: category})
    
    }catch(error){
        
        return res.status(400).json({error})
    }
}

////////////get all category//////////////
exports.getAll = async (req, res) => {
    try{

        //find all category in DB
        const categories = await Category.find()
        
        if(!categories) return res.status(400).json({message: _cate.notFound})          
        
        return res.status(200).json({data: categories}) 
    
    }catch(error){
        
        return res.status(400).json({error})
    }
}