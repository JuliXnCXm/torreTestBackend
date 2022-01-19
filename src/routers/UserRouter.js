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
        this.router.post('/auth/login', objUser.login);
        this.router.post('/auth/register', objUser.register);
    }
}

module.exports = UserRouter;
