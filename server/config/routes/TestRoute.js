const Test = require('../../test/testController.js')
const express = require('express');
const Router = express.Router();

//=============================================================================
/*										testRoute			   				 */
//=============================================================================
   Router.route('/api/test/addTest').post(Test.addTest);


module.exports = Router
