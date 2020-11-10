const jwt = require('jsonwebtoken')
const User = require('../models/UserData')

const adminAuth = (req,res,next) => {
    let token = req.headers['x-access-token'] || req.headers['authorization']
    if (token.startsWith('Bearer')) {
        token = token.slice(7, token.length);
      }
    if(token) {
        jwt.verify(token,'WIRYA',(err,decoded) => {
            if(err || decoded.role == 'user') next({name : 'INVALID_TOKEN'})
            else {
                next()
            }
        })
    }else next({name : 'MISSING_TOKEN'})
}
module.exports = adminAuth