const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const products = require('./routes/products');
const not_found = require('./middleware/not-found');
const error_handler = require('./middleware/error-handler');
require('dotenv').config();

app.use(express.json());
app.use('/api/v1', products);
app.use(not_found);
app.use(error_handler);


port = process.env.PORT || 3000;

const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        await app.listen(port);
        console.log(`server started at port ${port}`);
    }catch(err){
        console.log(err);
    }
}


start()