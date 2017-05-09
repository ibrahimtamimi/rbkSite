const mongoose = require ('mongoose');

const EmployeeSchema = new mongoose.Schema({
	firstName : {
		type : String,
		required : true
	},
	lastName : {
		type : String,
		required : true
	},
	password : {
		type : String
		//required : true
	},
	email : {
		type : String,
	},
	userName : {
		type : String,
		//required : true
	},
	isAdmin : {
		type : Boolean,
		default: false
	}

})

const Employee = mongoose.model('Employee', EmployeeSchema);
module.exports = Employee;
