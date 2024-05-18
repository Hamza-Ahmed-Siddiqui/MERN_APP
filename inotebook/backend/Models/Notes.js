const mongoose = require('mongoose')


const NotesSchema = new Schema({
    title:{
        type:String,
        require:true,

    },
    description:{
        type:String,
        require:true,
        
    },
    tag:{
        type:String,
        require:true,
        default:"general"
       
    },
    date:{
        type: Date,
        default: Date.now
    }
})


module.exports=( 'notes',NotesSchema)