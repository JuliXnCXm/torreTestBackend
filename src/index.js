const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const IndexRouter = require('./routers/IndexRouter');
const {config } = require('./config/config');
const UserRouter = require('./routers/UserRouter');

class Server {
    constructor() {
        this.app = express();
        this.#config();
    }
    #config() {
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

        this.app.listen(3000, () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

new Server();