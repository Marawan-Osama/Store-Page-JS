const Product = require('../models/product');

const getAllProductsStatic = async (req,res)=>{
    const products = await Product.find({featured:true});
    res.status(200).json({products, nbHits:products.length});
}

const getAllProducts = async (req,res)=>{
    res.send('get all products');
}

module.exports = {getAllProductsStatic,getAllProducts}