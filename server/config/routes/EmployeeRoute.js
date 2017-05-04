const Employee = require('../../employee/employeeController.js');
const express = require('express');
const Router = express.Router();

//=============================================================================
/*										testRoute			   				 */
//=============================================================================
   Router.route('/addEmp').post(Employee.addEmp);
   Router.route('/signin').post(Employee.signin);

module.exports = Router


