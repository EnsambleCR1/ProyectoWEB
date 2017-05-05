//Requerimos el modelo  de usuarios
var Usuario = require('./usuario.model.js');
var config = require('../../config/database');
var email = require('emailjs/email');


module.exports.save = function(req,res){ //exporta el controlador



        var nuevoUsuario = new Usuario({
          nombre:req.body.nombre,
          correo:req.body.correo,
          contrasenna:req.body.contrasenna,
          tipo:req.body.tipo,
          acceso:req.body.acceso,
          foto:req.body.foto
        });

        nuevoUsuario.save(function(err){
          if(err){
            res.json({success:false,msg:'Usuario agregado'});
          }else {
            res.json({success:true,msg:'Usuario ya existe'});

            if (req.body.tipo == 'Estudiante') {
              var server 	= email.server.connect({
               user:    "ensamblecostarica@gmail.com",
               password: "ensamblecr11",
               host:    "smtp.gmail.com",
               ssl:     true
            });

              // send the message and get a callback with an error or details of the message that was sent
              server.send({
                 text:    "Hola " + req.body.nombre + "! usted ha sido aceptado a formar parte de nuestro euqipo. Para ingresar, favor utilizar los siguientes crendeciales: Correo electrónico: " + req.body.correo + " Contraseña: " + req.body.contrasenna ,
                 from:    "ensamblecostarica@gmail.com",
                 to:      req.body.correo,
                 subject: "Bienvenido a Cenfotec Software House"
              }, function(err, message) { console.log(err || message); });
            }
          }
        });



}

module.exports.findAll = function(req,res){
  Usuario.find().then(function(usuarios){
    res.send(usuarios);
  });
};
//
module.exports.remove = function(req,res){
  console.log(req.body.id);
  Usuario.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Usuario eliminado correctamente.'});
  });

}
// module.exports.update = function(req,res){
//   console.log(req.body.id);
//   User.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
//     res.json({success:true,msg:'Se ha actualizado correctamente.'});
//   });
//
// }
