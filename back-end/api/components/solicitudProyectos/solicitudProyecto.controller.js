//Requerimos el modelo  de usuarios
var SolicitudProyecto = require('./solicitudProyecto.model.js');
var config = require('../../config/database');


module.exports.save = function(req,res){ //exporta el controlador

    var nuevoProyecto = new SolicitudProyecto({
        nombre:req.body.nombre,
        cedula:req.body.cedula,
        nombreContacto:req.body.nombreContacto,
        emailContacto:req.body.emailContacto,
        telefonoContacto:req.body.telefonoContacto,
        industria:req.body.industria,
        descripcion:req.body.descripcion,
        estado:req.body.estado,
        photo:req.body.photo,
        bio:req.body.bio,
        bitacoras : [],
        profesores : [],
        estudiantes :[],
        estado:'pendiente'

        }); 
        nuevoProyecto.save(function(err){
          if(err){
            res.json({success:false,msg:'La solicitud del proyecto ya existe en la aplicación'});
          }else {
            res.json({success:true,msg:'La solicitud de estudiante ' + nuevoProyecto.nombre +' se ha registrado correctamente.'});
          }
        });

}

module.exports.findAll = function(req,res){
  SolicitudProyecto.find().then(function(solicitudProyectos){
    res.send(solicitudProyectos);
  });
};
//
module.exports.remove = function(req,res){
  console.log(req.body.id);
   SolicitudProyecto.findByIdAndRemove({_id:req.body.id}).then(function(data){
    res.json({success:true,msg:'Se ha eliminado correctamente.'});
  });

}

 module.exports.update = function(req,res){
   console.log(req.body.id);
   SolicitudProyecto.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
     res.json({success:true,msg:'Se ha actualizado correctamente.'});
   });

 }

// module.exports.update = function(req,res){
//   console.log(req.body.id);
//   User.findByIdAndUpdate(req.body._id,{$set:req.body}).then(function(data){
//     res.json({success:true,msg:'Se ha actualizado correctamente.'});
//   });
//
// }

