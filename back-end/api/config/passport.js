var JwtStrategy = require('passport-jwt').Strategy;
var Carrera = require('../models/carrera.model');
var Curso = require('../models/curso.model');
var Profesor = require('../models/profesor.model');
var config = require('../config/database');
var SolicitudProyecto = require('../models/solicitudProyecto.model');

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

    Profesor.find({id:jwt_payload.sub},function(err,profesor){
      if(err){
        return done(err,false);
      }
      if(profesor){
        done(null,profesor);
      }else{
        done(null,false);
      }
    });

     SolicitudProyecto.find({id:jwt_payload.sub},function(err,solicitudProyecto){
      if(err){
        return done(err,false);
      }
      if(solicitudProyecto){
        done(null,solicitudProyecto);
      }else{
        done(null,false);
      }
    });

     SolicitudEstudiante.find({id:jwt_payload.sub},function(err,solicitudEstudiante){
      if(err){
        return done(err,false);
      }
      if(solicitudEstudiante){
        done(null,solicitudEstudiante);
      }else{
        done(null,false);
      }
    });

  }));
};
