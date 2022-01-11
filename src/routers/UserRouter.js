const {Router } = require('express');
const UserController = require('../controllers/UserController');

class UserRouter {
    constructor() {
        this.router = Router();
        this.#config();
    }
    #config() {
        const objUser = new UserController();
        this.router.get('/:username', objUser.getUser);
    }
}

module.exports = UserRouter;
