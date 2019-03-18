const env = process.env.NODE_ENV || 'development';
const config = require('./config')[env];
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const User = require('../models').User;

module.exports = function(passport) {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: config.secret,
  };
  passport.use(
    'jwt',
    new JwtStrategy(opts, function(jwt_payload, done) {
      User.findByPk(jwt_payload.sub)
        .then(user => {
          return done(null, user);
        })
        .catch(error => {
          return done(error, false);
        });
    })
  );
};
