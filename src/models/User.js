const {Schema , model } = require('mongoose');


const UserSchema = new Schema({
    username: {type : String , required : true},
    userlastname: {type : String , required : true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    picture: {type: String},
    skills : [{type: String}]
});
