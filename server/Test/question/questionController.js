const jwt = require('jwt-simple');
const questionModel = require('./questionModel.js');
const mongoose = require ('mongoose');

const fillQModel = require('./questionsModels/fillQModel.js');
const trueFalseQModel = require('./questionsModels/trueFalseQModel.js');
const multiChoiceQModel = require('./questionsModels/multiChoiceQModel.js');



module.exports = {
	addQuestions :(req, res)=>{
		let question  = req.body.question;
		questionModel.findOne({_id : question.testId}, (err, questionEX)=>{
			if (questionEX) {
				res.json({isquestionExist : true })
			}else {
				questionModel.create(question, (err, data)=> {
					if (err) {
						res.status(500).send(err);
					}else{
						res.json(data);
					}
				});
			}
		})
	},
    //=============================================================================
    /*                                  Question                                 */
    //=============================================================================
        addTueFalseQ : (req, res)=>{
            let question = req.body.question;
            trueFalseQModel.create(question, (err, data)=> {
                if (err) {
                    res.status(500).send(err);
                }else{
                    res.json(data);
                }
            });
        },
        removeTueFalseQ : (req, res)=>{

        },
        editTueFalseQ : (req, res)=>{},

        addMultiChoiceQ : (req, res)=>{
            let question = req.body.question;
            multiChoiceQModel.create(question, (err, data)=> {
                if (err) {
                    res.status(500).send(err);
                }else{
                    res.json(data);
                }
            });
        },
        removeMultiChoiceQ : (req, res)=>{},
        editMultiChoiceQ : (req, res)=>{},

        addFillQ : (req, res)=>{
            let question = req.body.question;
            fillQModel.create(question, (err, data)=> {
                if (err) {
                    res.status(500).send(err);
                }else{
                    res.json(data);
                }
            });
        },
        removeFillQ : (req, res)=>{},
        editFillQ : (req, res)=>{},

    //=============================================================================
    /*                                  Answers                                  */
    //=============================================================================
        addTueFalseA : (req, res)=>{},
        editTueFalseA : (req, res)=>{},

        addMultiChoiceA : (req, res)=>{},
        editMultiChoiceA : (req, res)=>{},

        addFillA : (req, res)=>{},
        editFillA : (req, res)=>{},
}
