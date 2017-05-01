//Requerimos el modelo  de usuarios
var Usuario = require('./usuario.model.js');
var config = require('../../config/database');


module.exports.save = function(req,res){ //exporta el controlador



        var nuevoUsuario = new Usuario({
          nombre:req.body.nombre,
          correo:req.body.correo,
          contrasenna:req.body.contrasenna,
          tipo:req.body.tipo,
        });

        nuevoUsuario.save(function(err){
          if(err){
            res.json({success:false,msg:'Usuario agregado'});
          }else {
            res.json({success:true,msg:'Usuario ya existe'});
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
