const { Router } = require('express');
const axios = require('axios');
const { config } = require( '../config/config' );

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
        let decode = jwt.decode(token, config.privateKey);
    }
    register = (req, res) => {}
}
module.exports = UserController;