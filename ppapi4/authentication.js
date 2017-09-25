//var passport = require('passport');
//var LocalStrategy = require('passport-local').Strategy;
//var config = require('./config');

//exports.local = passport.use(new LocalStrategy(User.authenticate()));
//passport.serializeUser(User.serializeUser());
//passport.deserializeUser(User.deserializeUser());



/* var OAuth2Strategy = require('passport-oauth2'),
OAuth2RefreshTokenStrategy = require('passport-oauth2-middleware').Strategy,
passport = require('passport');

module.exports = function() {
  var refreshStrategy = new OAuth2RefreshTokenStrategy({
    refreshWindow: 10, // Time in seconds to perform a token refresh before it expires
    userProperty: 'ticket', // Active user property name to store OAuth tokens
    authenticationURL: '/login', // URL to redirect unathorized users to
    callbackParameter: 'callback' //URL query parameter name to pass a return URL
  });

  passport.use('main', refreshStrategy);  //Main authorization strategy that authenticates
                                          //user with OAuth access token
                                          //and performs a token refresh if needed

  var oauthStartegy = new OAuth2Strategy({
    authorizationURL: 'https://authserver/oauth2/auth',
    tokenURL: 'https://authserver/oauth2/token',
    clientID: 'clientID',
    clientSecret: 'clientSecret',
    callbackURL: '/oauth/callback',
    passReqToCallback: false //Must be omitted or set to false in order to work with OAuth2RefreshTokenStrategy
  },
    refreshStrategy.getOAuth2StrategyCallback() //Create a callback for OAuth2Strategy
  );

  passport.use('oauth', oauthStartegy); //Strategy to perform regular OAuth2 code grant workflow
  refreshStrategy.useOAuth2Strategy(oauthStartegy); //Register the OAuth strategy
                                                    //to perform OAuth2 refresh token workflow
}; */