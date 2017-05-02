const jwt = require('jwt-simple');
const mongoose = require ('mongoose');
const questionModel = require('../questionModel.js');
const fillQModel = require('./fillQModel.js');

module.exports = {
	
    //=============================================================================
    /*                                  Question                                 */
    //=============================================================================
        addFillQ : (req, res)=>{
            let question = req.body.question;
            fillQModel.create(question, (err, data)=> {
                if (err) {
                    res.status(500).send(err);
                }else{
                    res.json(data);
                }
            });

            questionModel.find({
                 "_id": id, "readers.user": { "$ne": req.user.id } 
            }).updateOne({
                "$push": { "readers": { "user": req.user.id, "someData": data } }
            });
        },
        removeFillQ : (req, res)=>{},
        editFillQ : (req, res)=>{},

    //=============================================================================
    /*                                  Answers                                  */
    //=============================================================================
        addFillA : (req, res)=>{},
        editFillA : (req, res)=>{}
}
