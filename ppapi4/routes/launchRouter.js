var bodyParser = require('body-parser');
var express = require('express');
var launchRouter = express.Router();
var Guid = require('guid');
//var launch = require("../controller/launch");

var scope = 'profile openid name online_access user/Patient.read user/Person.read';
var escaped_str = require('querystring').escape(scope);
console.log(escaped_str);


/* GET launchs' pages */
launchRouter.use(bodyParser.json());
launchRouter.route('/')
.all(function(req, res, next){
    //res.writeHead(200, {'Content-Type': 'application/json+fhir'});
    var clientId = '7bbcd840-f484-44b6-bb18-ea1089aba6d4';
    var stateGuid = Guid.create();
    //var str = stateGuid.value;
    var redirect_uri = 'https://ov-dub-ltp-122:3443/redirect_url';
    var redirect_uriurl = require('querystring').escape(redirect_uri);
    console.log(redirect_uriurl);
    var aud = 'https://ov-dub-ltp-122:3443';
    var audurl = require('querystring').escape(aud);
    console.log(audurl);
    
    var authurl = 'https://authorization.sandboxcerner.com/tenants/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/protocols/oauth2/profiles/smart-v1/personas/provider/authorize/?response_type=code&state=' + stateGuid.value + '&client_id=' + clientId + '&redirect_uri=' + redirect_uriurl + '&scope=' + escaped_str +'&aud='+ audurl; 
    res.redirect(authurl);
    console.log(authurl);
    //launch.getList(req,res);
    //next();
})
.get(function(req, res, next){
    //res.end('Will send all the launchs to you');
    launch.getList(req,res);
});

module.exports = launchRouter;


