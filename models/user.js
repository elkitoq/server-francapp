const mongoose = require('mongoose');
const Work = mongoose.model('Work');
const Config = mongoose.model('Config');


const userSchema = new mongoose.Schema({ 
    id: {
        type: Number,
        require: true
    },
    name: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password:{
        type: String,
        required: true
    },
    /*works:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Work'
    },
    config:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Config'
    }*/
});

exports.User = new mongoose.model('user', userSchema);