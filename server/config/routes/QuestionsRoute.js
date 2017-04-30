const Questions = require('../../test/question/questionController.js');
const express = require('express');
const Router = express.Router();

//=============================================================================
/*										testRoute			   				 */
//=============================================================================
   Router.route('/add').post(Questions.addQuestions);

module.exports = Router
