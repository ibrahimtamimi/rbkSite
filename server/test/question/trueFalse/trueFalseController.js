const jwt = require('jwt-simple');
const mongoose = require ('mongoose');
const questionModel = require('../questionModel.js');
const trueFalseQModel = require('./questionsModels/trueFalseQModel.js');



module.exports = {
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

        
    //=============================================================================
    /*                                  Answers                                  */
    //=============================================================================
        addTueFalseA : (req, res)=>{},
        editTueFalseA : (req, res)=>{}
        
}
