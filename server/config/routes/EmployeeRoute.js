const Employee = require('../../employee/employeeController.js');
const express = require('express');
const Router = express.Router();

//=============================================================================
/*										empRoute			   				 */
//=============================================================================
   Router.route('/addEmp').post(Employee.addEmp);
   Router.route('/signin').post(Employee.signin);

//=============================================================================
/*										DashboardRoute			   			 */
//=============================================================================
   Router.route('/getAllAplicantNumber').get(Employee.getAllAplicantNumber);
   Router.route('/getAllFemaleNumber').get(Employee.getAllFemaleNumber);
   Router.route('/getAllMaleNumber').get(Employee.getAllMaleNumber);
   Router.route('/getAllRefugee').get(Employee.getAllRefugee);
   Router.route('/getAllAplicantProgress').get(Employee.getAllAplicantProgress); 
   Router.route('/getApplicantByCohortNumber').post(Employee.getApplicantByCohortNumber);
   Router.route('/getStudentByCohortNumber').post(Employee.getStudentByCohortNumber);


module.exports = Router


