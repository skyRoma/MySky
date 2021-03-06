const env = process.env.NODE_ENV || 'development';
const ExtractJwt = require('passport-jwt').ExtractJwt;
const JwtStrategy = require('passport-jwt').Strategy;

const config = require('../config/config')[env];
const userService = require('../services/user-service');

module.exports = function(passport) {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret,
  };
  passport.use(
    'jwt',
    new JwtStrategy(opts, function(jwt_payload, done) {
      userService
        .findById(jwt_payload.id)
        .then(user => {
          return done(null, user);
        })
        .catch(error => {
          return done(error, false);
        });
    })
  );
};
