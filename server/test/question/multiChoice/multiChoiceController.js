const jwt = require('jwt-simple');
const mongoose = require ('mongoose');
const questionModel = require('../questionModel.js');
const multiChoiceQModel = require('./questionsModels/multiChoiceQModel.js');



module.exports = {
    //=============================================================================
    /*                                  Question                                 */
    //=============================================================================
       
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

    //=============================================================================
    /*                                  Answers                                  */
    //=============================================================================
        
        addMultiChoiceA : (req, res)=>{},
        editMultiChoiceA : (req, res)=>{}
}
