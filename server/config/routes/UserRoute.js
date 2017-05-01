const User = require('../../user/userController.js');
const express = require('express');
const Router = express.Router();


Router.route('/signup').post( User.signup);
Router.route('/signin').post( User.signin);
Router.route('/update/:id').put(User.updateUser);
Router.route('/verify/isEmailVerified').post(User.isEmailVerified)
Router.route('/verify/:id').post(User.verifyUser);
Router.route('/nextSteps/:id').get(User.nextSteps);
Router.route('/getAll').get(User.getAll);	

module.exports = Router;
