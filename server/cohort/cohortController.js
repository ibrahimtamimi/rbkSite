const mongoose = require ('mongoose');
const cohortModel = require('./cohortModel.js');
const helper = require('../config/helper.js');


module.exports = {
	addCohort:(req, res)=>{
        let cohortData = req.body.cohort;
        console.log(cohortData)
        cohortModel.find({}, (err, result) => {
            if (!result) {
                res.status(500).send(err);
            } else {
                cohortData.number = cohortData.number || result.length + 1;
                cohortModel.findOne({ number: cohortData.number }, (err, cohortEX) => {
                    if (cohortEX) {
                        res.json({ iscohortExist: true })
                    } else {
                        cohortModel.create(cohortData, (err, data) => {
                            if (err) {
                                res.status(500).send(err);
                            } else {
                                res.json(data);
                            }
                        });
                    }
                });
            }
        });
    },
    
    deleteCohortById: (req, res) => { 
        cohortModel.remove({ _id: req.body.cohort.id }, (err, result) => {
            if (!result) {
                res.status(500).send(err);
            } else {
                res.json(result);
            }
        });
    },

    deletLastCohort: (req, res) => { 
        cohortModel.find({}, (err, result) => {
            console.log(result);
            if (!result) {
                res.status(500).send(err);
            } else {
                let lastCohortID = result[result.length - 1]._id;
                cohortModel.remove({ _id: lastCohortID }, (err, result) => {
                    if (!result) {
                        res.status(500).send(err);
                    } else {
                        res.json(result);
                    }
                });
            }
        });
    }

}
