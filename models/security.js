var mongoose = require('mongoose')

var pwd = mongoose.Schema({ 
    name: String,
    password: String
});

var Authentication = mongoose.model('Authentication', pwd);

module.exports = Authentication;