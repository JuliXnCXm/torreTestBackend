const mongoose = require('mongoose');
const {cloud_db } = require('../db/urldb');

class Conndb {
    constructor () {
        this.connect();
    }

    connect () {
        this.conn = mongoose.connect(cloud_db, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log('Connected to database');
        }).catch(err => {
            console.log('Error connecting to database', err);
        })
    }
}

module.exports = Conndb;