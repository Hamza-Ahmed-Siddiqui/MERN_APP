const mongoose = require('mongoose');

const mongooseURI = "mongodb://localhost:27017/testing"

const connectToMongo=()=>{
    mongoose.connect(mongooseURI,()=>{
        console.log("connected Database Successfully")
    })
}
module.exports = connectToMongo
