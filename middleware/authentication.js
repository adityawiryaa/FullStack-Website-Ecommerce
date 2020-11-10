const jwt = require('jsonwebtoken')
const User = require('../models/UserData')

const userAuth = (req,res,next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    if (token.startsWith('Bearer')) {
        // Remove Bearer from string
        token = token.slice(7, token.length);
      }
    if(token) {
        jwt.verify(token,'WIRYA',(err,decoded) => {
            if(err) next({name : 'INVALID_TOKEN'})
            else {
                req._userId = decoded._id;
                next()
            }
        })
    }else next({name : 'MISSING_TOKEN'})
}
module.exports = userAuth