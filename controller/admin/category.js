const Category = require('../../models/Category')
const {_cate} = require('../../helper/msg')

////////////////create product////////////
exports.create = async (req, res) => {
    try{

        data = {
            name: req.body.name,
            desc: req.body.desc,
            parentId: req.body.parentId,
            img: req.files[0].filename
        }
       
        const existCate = await Category.findOne({name: req.body.name})
        
        if (existCate) return res.status(400).json({message: _cate.exist})
        
        const category = await new Category(data).save();
        
        return res.status(200).json({message: _cate.create, data: category})
        
    }catch(error){
        
        return res.status(400).json({error})
    }
}

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
exports.cateByorder = async (req, res) => {
    try {
        const parentCategory = await Category.find({ parentId: '' })
        return res.status(200).json(parentCategory);


    } catch (error) {

        return res.status(400).json({ error })
    }
}
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

////////////update a category/////////////
exports.update = async (req, res) => {
    try{
        const inputData = req.body;

        //find category in DB and update
        const category = await Category.findOneAndUpdate({_id: req.body.id}, 
            {$set:inputData}, 
            {new: true})

        if (!category) return res.status(400).json({message: _cate.notFound})
        
        return res.status(200).json({message: _cate.update, data: category})
        
    }catch(error){

        return res.status(400).json({error})
    }
}

//////////remove category///////////////
exports.remove = async (req, res) => {
    try{
       
        //check if category has child category before delete
        const childCategory = await Category.findOne({parentId: req.body.id})

        if (childCategory) return res.status(400).json({message: _cate.child})
        
        //delete category
        await Category.deleteOne({_id: req.body.id})
        
        return res.status(200).json({message: _cate.removed})
    
    }catch(error){
        
        return res.status(400).json({error})
    }
}
