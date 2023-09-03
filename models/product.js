const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,'please enter product name'],
        trim:true,
        maxlength:[100,'product name cannot exceed 100 characters']
    },
    price:{
        type:Number,
        required:[true,'please enter product price'],
        maxlength:[5,'product price cannot exceed 5 characters'],
        default:0.0
    },
    company:{
        type:String,
        enum:{
            values:["liddy","ikea","marcos","caressa"],
        }
    },
    featured:{
        type:Boolean,
        default:false
    },

    });

module.exports = mongoose.model('Product',productSchema);