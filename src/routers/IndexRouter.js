const { Router } = require('express');


class IndexRouter {
    constructor() {
        this.router = Router();
        this.#config();
    }
    #config() {
        this.router.get('/', (req, res) => {
            res.send('Hello world');
        });
    }
}

module.exports = IndexRouter;
