const express = require('express')
const dataUser = express.Router()
const authentication = require('../middleware/authentication')
const userController = require('../controllers/userControllers')

dataUser.post('/signup',userController.register)
dataUser.post('/signin',userController.login)
dataUser.get('/',authentication,userController.getUser)
dataUser.put('/update',authentication,userController.updateUser)

module.exports = dataUser