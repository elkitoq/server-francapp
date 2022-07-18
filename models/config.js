const mongoose = require('mongoose');

const configSchema = new mongoose.Schema({ 
    email:{type:String,
        require:true},
    password:{type:String,
        require:true},
})

exports.Config = new mongoose.model('config', configSchema);