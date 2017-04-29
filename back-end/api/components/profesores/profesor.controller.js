//Requerimos el modelo  de usuarios
var Profesor = require('./profesor.model.js');
var config = require('../../config/database');
var email = require('emailjs/email');


module.exports.save = function(req,res){ //exporta el controlador



        var nuevoProfesor = new Profesor({
          nombre : req.body.nombre,
          primerApellido : req.body.primerApellido,
          segundoApellido : req.body.segundoApellido,
          email : req.body.email,
          estado : req.body.estado,
          cursos : req.body.cursos,
          especialidad : req.body.especialidad,
          enfasis : req.body.enfasis,
          contrasenna : req.body.contrasenna

        });

        nuevoProfesor.save(function(err){
          if(err){
            res.json({success:false,msg:'El profesor ya existe en el sistema.'});
          }else {
            res.json({success:true,msg:'Nuevo profesor se ha registrado correctamente.'});

            console.log(req.body.id);
            var server 	= email.server.connect({
             user:    "ensamblecostarica@gmail.com",
             password: "ensamblecr11",
             host:    "smtp.gmail.com",
             ssl:     true
          });

            // send the message and get a callback with an error or details of the message that was sent
            server.send({
               text:    "Hola " + req.body.nombre + "! le damos coordialmente la bienvenida a Cenfotec Software House. Para ingresar, favor utilizar los siguientes crendeciales: Correo electrónico: " + req.body.email + " Contraseña: " + req.body.contrasenna ,
               from:    "ensamblecostarica@gmail.com",
               to:      req.body.email,
               subject: "Bienvenido a Cenfotec Software House"
            }, function(err, message) { console.log(err || message); });
          }
        });



}

module.exports.findAll = function(req,res){
  Profesor.find().then(function(profesores){
    res.send(profesores);
  });
};
//
module.exports.remove = function(req,res){
  console.log(req.body.id);
  Profesor.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Profesor se ha eliminado correctamente.'});
  });

}

module.exports.update = function(req,res){
  console.log(req.body.id);
  Profesor.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
    res.json({success:true,msg:'Cambios guardados.'});
  });

}
