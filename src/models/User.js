const {Schema , model } = require('mongoose');


const userSchema = new Schema({
    username: {type : String , required : true},
    userlastname: {type : String , required : true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    picture: {type: String},
    skills : [{type: String}]
}, {collection: 'users'});

module.exports = model('User', userSchema);
