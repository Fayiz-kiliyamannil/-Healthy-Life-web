 const express = require('express')
 const userRoute =  express();
 const userController = require('../controllers/users/userController');


 userRoute.post('/login',userController.userLogin)
 userRoute.post('/register',userController.register);


 module.exports = userRoute;


