const Test = require('../../test/testController.js')
const express = require('express');
const Router = express.Router();

//=============================================================================
/*										testRoute			   				 */
//=============================================================================
   Router.route('/addTest').post(Test.addTest);
   Router.route('/deleteTest').post( Test.deleteTest);
   Router.route('/editTestName').post( Test.editTestName);

module.exports = Router
