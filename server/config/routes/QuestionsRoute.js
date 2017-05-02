const Questions = require('../../test/question/questionController.js');
const Fill = require('../../test/question/fill/fillController.js');

const express = require('express');
const Router = express.Router();

//=============================================================================
/*									QuestionsRoute			   				 */
//=============================================================================
   Router.route('/add').post(Questions.addQuestions);

//=============================================================================
/*									fillQuestionRoute  			   			 */
//=============================================================================
    Router.route('/addFillQ').post(Fill.addFillQ);

module.exports = Router
