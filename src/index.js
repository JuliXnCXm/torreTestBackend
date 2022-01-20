const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const IndexRouter = require('./routers/IndexRouter');
const {config } = require('./config/config');
const Conndb = require('./db/Conndb');
const UserRouter = require('./routers/UserRouter');

class Server {
    constructor() {
        this.objConn = new Conndb();
        this.app = express();
        this.#config();
    }
    #config() {
        console.log(this.objConn);
        //midlewares
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: false }));
        //creating routes
        const IndexR = new IndexRouter();
        const UserR = new UserRouter();
        //adding routes
        this.app.use('/', IndexR.router);
        this.app.use('/user', UserR.router);

    }

}

new Server();