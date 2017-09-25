var bodyParser = require('body-parser');
var express = require('express');
var redirectRouter = express.Router();
//var redirect = require("../controller/redirects");
var Guid = require('guid');

/* GET redirects' pages */
redirectRouter.use(bodyParser.json());
redirectRouter.route('/')
.all(function(req, res, next){
    //res.writeHead(200, {'Content-Type': 'application/json+fhir'});
    var clientId = '7bbcd840-f484-44b6-bb18-ea1089aba6d4';
    var stateGuid = Guid.create();
    console.log('We are here');

    console.log(req.query.code);
    console.log(req.query.state);
    console.log(req.query);

    var code = req.query.code;
    console.log(code);

    var apiTokenURI = 'https://authorization.sandboxcerner.com/tenants/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/protocols/oauth2/profiles/smart-v1/token';
    //var str = stateGuid.value;
    //res.redirect('https://authorization.sandboxcerner.com/tenants/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/protocols/oauth2/profiles/smart-v1/personas/provider/authorize?response_type=code&state=' + stateGuid.value + 'client_id=' + clientId + '&redirect_uri=https%3a%2f%2flocalhost%2fredirect_url%2f&scope=profile+openid+online_access+user%2fPatient.read&aud=https%3a%2f%2flocalhost');
    //redirect.getList(req,res);
    //next();
})
.get(function(req, res, next){
    //res.end('Will send all the redirects to you');
    redirect.getList(req,res);
    console.log('We are there');
});

module.exports = redirectRouter;


