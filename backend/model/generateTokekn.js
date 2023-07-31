const jwt = require('jsonwebtoken')

const generateToken = (id) =>{
    return jwt.sign({id}, 'jwtSecure', {
        expiresIn: "30d",
    });
};
module.exports = generateToken;