const express = require('express');
const Router = express.Router();
const Cohort = require('../../cohort/cohortController.js');

//=============================================================================
/*										empRoute			   				 */
//=============================================================================
   Router.route('/addCohort').post(Cohort.addCohort);
   Router.route('/deleteCohortById').post(Cohort.deleteCohortById);
   Router.route('/deletLastCohort').get(Cohort.deletLastCohort); 


module.exports = Router


