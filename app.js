const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const not_found = require('./middleware/not-found');
const error_handler = require('./middleware/error-handler');
require('dotenv').config();

app.use(express.json());
app.use('/api/v1', require('./routes/products'));
app.use(not_found);
app.use(error_handler);




const start = async ()=>{
    try{
        await connectDB(process.env.MONGO_URI)
        await app.listen(3000);
        console.log('server started at port 3000');
    }catch(err){
        console.log(err);
    }
}


start()