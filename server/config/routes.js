const TestRoute = require('./routes/TestRoute.js');
const UserRoute = require('./routes/UserRoute.js');
const EmployeeRoute = require('./routes/EmployeeRoute.js')
const QuestionsRoute = require('./routes/QuestionsRoute.js')

module.exports = function(app, express) {
	app.use('/api/test', TestRoute); // testRoute
	app.use('/api/user', UserRoute); // UserRoute
	app.use('/api/emp', EmployeeRoute); // employeeRoute
	app.use('/api/test/questions', QuestionsRoute); // QuestionsRoute
};
