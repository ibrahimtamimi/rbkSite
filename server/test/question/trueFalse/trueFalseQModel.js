const mongoose = require ('mongoose');

const TrueFalseQSchema = new mongoose.Schema({
	section : {
		type : String,
		required : true
	},
	arabic : {
		type : String,
		required : true
	},
	english : {
		type : String,
		required : true
	},
	trueValue : {
		type : String,
		required : true
	},
	falseValue : {
		type : String,
		required : true
	}
})

const TrueFalseQ = mongoose.model('TrueFalseQ', TrueFalseQSchema);
module.exports = TrueFalseQ;
