const jwt = require('jwt-simple');
const mongoose = require ('mongoose');
const questionModel = require('../questionModel.js');
const trueFalseQModel = require('./trueFalseQModel.js');



module.exports = {
    //=============================================================================
    /*                                  Question                                 */
    //=============================================================================
        addTueFalseQ : (req, res, model)=>{
            let question = req.body.question;
            trueFalseQModel.create(question, (err, data)=> {
                if (err) {
                    res.status(500).send(err);
                }else{
                    questionModel.findByIdAndUpdate(question.QuestionModelId, {$push: { "trueFalseQ": data.id}}, (err,data)=>{
                        res.json(data)
                    });
                }
                  
            });          
        },
        removeTueFalseQ : (req, res)=>{
            
        },
        editTueFalseQ : (req, res)=>{},

        
    //=============================================================================
    /*                                  Answers                                  */
    //=============================================================================
        addTueFalseA : (req, res)=>{},
        editTueFalseA : (req, res)=>{}
        
}
