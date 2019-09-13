var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var User = require("./models/users");
var JwtStrategy = require("passport-jwt").Strategy;
var ExtractJwt = require("passport-jwt").ExtractJwt;
var jwt = require("jsonwebtoken");

var config = require("./config");

exports.local = passport.use(new LocalStrategy(User.authenticate())); //passport's own authenticate fn which is more comprehensive instead of our own which does the username and password verification itself
passport.serializeUser(User.serializeUser()); //for serialising the user
passport.deserializeUser(User.deserializeUser()); //for deserialising the user

exports.getToken = function(user) {
  return jwt.sign(user, config.secretKey, { expiresIn: 3600 });
};

var opts = {};

opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = config.secretKey;

exports.jwtPassport = passport.use(
  new JwtStrategy(opts, (jwt_payload, done) => {
    console.log("JWT payload: ", jwt_payload);
    User.findOne({ _id: jwt_payload._id }, (err, user) => {
      if (err) {
        return done(error, false);
      } else if (user) {
        return done(null, user);
      } else {
        return done(null, false);
      }
    });
  })
);

exports.verifyUser = passport.authenticate("jwt", { session: false });