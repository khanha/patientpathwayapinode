var bodyParser = require('body-parser');
var express = require('express');
var patientRouter = express.Router();
var patient = require("../controller/patients");

/* GET patients' pages */
patientRouter.use(bodyParser.json());
patientRouter.route('/')
.all(function(req, res, next){
    //res.writeHead(200, {'Content-Type': 'application/json+fhir'});
    patient.getList(req,res);
    //next();
})
.get(function(req, res, next){
    //res.end('Will send all the patients to you');
    patient.getList(req,res);
})
.post(function(req, res, next){
    res.end('Will add the patients ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req, res, next){
    res.end('Deleting patient:' + req.params.patientID);
});

patientRouter.route('/:patientID')
.all(function(req, res, next){
    //res.writeHead(200, {'Content-Type': 'application/json+fhir'});
    patient.get(req,res,req.params.patientID);
    //next();
})
.get(function(req, res, next){
    //res.end('Will send details of the patients: ' + req.params.patientID + ' to you!');
    patietn.get(req,res, req.params.patientID);
})
.put(function(req, res, next){
    res.end('Will send all the patients to you');
    res.write('Updating the patient: ' + req.params.patientID + '\n');
    res.end('Will update the patient ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req, res, next){
    res.end('Deleting patient:' + req.params.patientID);
});

module.exports = patientRouter;


