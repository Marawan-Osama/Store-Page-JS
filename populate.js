const products = require('./products.json');
const connectDB = require('./db/connect');
const Product = require('./models/product');
require('dotenv').config();

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        await Product.deleteMany();
        await Product.create(products);
        console.log('success');
        process.exit(0);
    }catch(err){
        console.log(err);
        process.exit(1);
    }
}

start()