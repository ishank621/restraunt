var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var User = require("./models/users");

exports.local = passport.use(new LocalStrategy(User.authenticate())); //passport's own authenticate fn which is more comprehensive instead of our own which does the username and password verification itself
passport.serializeUser(User.serializeUser()); //for serialising the user
passport.deserializeUser(User.deserializeUser()); //for deserialising the user
