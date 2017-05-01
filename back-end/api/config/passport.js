var JwtStrategy = require('passport-jwt').Strategy;
var Carrera = require('../models/carrera.model');
var Curso = require('../models/curso.model');
var Profesor = require('../models/profesor.model');
var SolicitudEstudiante = require('../models/solicitudEstudiante.model');

var config = require('../config/database');

module.exports = function(passport){
  var opts = {};
  opts.secretOrKey = 'ksk';
  passport.use(new JwtStrategy(opts,function(jwt_payload,done){

    Carrera.find({id:jwt_payload.sub},function(err,carrera){
      if(err){
        return done(err,false);
      }
      if(carrera){
        done(null,carrera);
      }else{
        done(null,false);
      }
    });

    Curso.find({id:jwt_payload.sub},function(err,curso){
      if(err){
        return done(err,false);
      }
      if(curso){
        done(null,curso);
      }else{
        done(null,false);
      }
    });

<<<<<<< HEAD
    Profesor.find({id:jwt_payload.sub},function(err,profesor){
      if(err){
        return done(err,false);
      }
      if(profesor){
        done(null,profesor);
=======
    SolicitudEstudiante.find({id:jwt_payload.sub},function(err,solicitudEstudiante){
      if(err){
        return done(err,false);
      }
      if(solicitudEstudiante){
        done(null,solicitudEstudiante);
>>>>>>> 6cc516614e2112e0c4dfb88ba9b3e68a45a1fab7
      }else{
        done(null,false);
      }
    });

<<<<<<< HEAD
=======
<<<<<<< HEAD

=======
<<<<<<< HEAD

=======

>>>>>>> 85a0353358099d3528224ad2bf76d79d823b49d4
>>>>>>> 165a10ab3f14e643372df0310e0d61bd97808c8b

>>>>>>> 6cc516614e2112e0c4dfb88ba9b3e68a45a1fab7
  }));
};
