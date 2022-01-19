const { config } = require( 'dotenv' );
const jwt = require('jsonwebtoken');

class TokenController {
    constructor() {
        this.verifyAuth = this.verifyAuth.bind(this);
    }

    verifyAuth(req, res, next) {
        let token = this.getToken(req);
        let decode = jwt.decode(token, config.privateKey);
        if (decode != null && decode != undefined) {
            next()
        } else {
            res.status(401).send('Unauthorized');
        }
    }
    getToken(req, res, next) {
        let token = null
        let authorization = req.headers.authorization;
        if (authorization != null && authorization != undefined) {
            token = authorization.split(' ')[1];
        }

        return token;
    }
}

module.exports = TokenController;