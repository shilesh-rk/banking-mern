const jwt = require('jsonwebtoken')

module.exports = function(req, res, next){
    try{
        let token = req.header('x-token') //passing token in header so took header (x-token is common name)
        if(!token){
            return res.status(400).send("Token not found")
        }
        let decode = jwt.verify(token, 'jwtSecure');
        // let payload ={
        //     user: {
        //         id:exists.id
        //     }
        // }
        req.user = decode.user
        next(); // used to use the request user in server loginpage
    }
    catch(err){
        console.log(err.message)
        return res.status(500).send("token error")
    }
}