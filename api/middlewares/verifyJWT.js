const jwt =  require('jsonwebtoken')

const extractToken = require('../../helpers/extractToken')



const verifyJWT = (req, res, next) =>{

    const token = extractToken(req)
    try {

        req.tokenID= jwt.verify(token, process.env.JWT_PRIVATE).id
        next();
    }
    catch (err){ 
        // console.log(err)
        return res.status(401).json({
            ok: false, 
            msg: "Token Invalido"
        })
    }
}


module.exports = verifyJWT  
