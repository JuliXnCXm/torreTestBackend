const { Router } = require('express');
const axios = require('axios');
const { config } = require( '../config/config' );
const User = require('../models/User');
const mongoose = require('mongoose');
class UserController {
    getUser = (req, res) => {
        axios.get(`${config.apiUserTest}/${req.params.username} `)
            .then(response => {
                res.status(200).send(response.data);
            })
            .catch(error => {
                res.status(500).send(error);
            });
    }

    login = (req, res) => {
        let {email , password} = req.body
        User.findOne({email: email, password: password}, (err, user) => {
            if (err) {
                res.status(500).send({info: error});
            } else {
                if (user != null && user != undefined) {
                    let token = jwt.sign({user}, config.privateKey);
                    res.status(200).send({token});
                } else {
                    res.status(404).send({info: 'User not found'});
                }
            }
        })
    }
    register = (req, res) => {
        let objUser = req.body
        if (objUser.name && objUser.userlastname && objUser.email && objUser.password) {
            User.create(objUser, (err, user) => {
                if(!err) {
                    let token = jwt.sign({user}, config.privateKey);
                    res.status(201).send({token});
                } else {
                    res.status(500).send({info: err});
                }
            })
        } else {
            res.status(500).send({info: 'Error'});
        }
    }
}
module.exports = UserController;