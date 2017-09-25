var bodyParser = require('body-parser');
var express = require('express');
var appointmentRouter = express.Router();

/* GET appointments' pages */
appointmentRouter.use(bodyParser.json());
appointmentRouter.route('/')
.all(function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
})
.get(function(req, res, next){
    res.end('Will send all the appointments to you');
})
.post(function(req, res, next){
    res.end('Will add the appointments ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req, res, next){
    res.end('Deleting appointment:' + req.params.appointmentID);
});

appointmentRouter.route('/:appointmentID')
.all(function(req, res, next){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    next();
})
.get(function(req, res, next){
    res.end('Will send details of the appointments: ' + req.params.appointmentID + ' to you!');
})
.put(function(req, res, next){
    res.end('Will send all the appointments to you');
    res.write('Updating the appointment: ' + req.params.appointmentID + '\n');
    res.end('Will update the appointment ' + req.body.name + ' with details: ' + req.body.description);
})
.delete(function(req, res, next){
    res.end('Deleting appointment:' + req.params.appointmentID);
});

module.exports = appointmentRouter;