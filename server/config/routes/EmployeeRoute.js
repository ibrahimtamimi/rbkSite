const Employee = require('../../employee/employeeController.js');
const express = require('express');
const Router = express.Router();

//=============================================================================
/*										testRoute			   				 */
//=============================================================================
   Router.route('/addEmp').post(Employee.addEmp);

module.exports = Router


