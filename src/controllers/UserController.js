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
}
module.exports = UserController;