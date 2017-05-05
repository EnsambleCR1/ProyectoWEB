//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var UsuarioSchema = new mongoose.Schema({
  nombre:String,
  correo:String,
  contrasenna:String,
  tipo:String,
  foto:String,
  acceso:String
});

module.exports = mongoose.model('Usuario', UsuarioSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
//
