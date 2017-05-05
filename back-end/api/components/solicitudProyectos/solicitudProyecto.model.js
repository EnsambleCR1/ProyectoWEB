//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var nuevoProyectoSchema = new mongoose.Schema({
  nombre: String,
  cedula: String,
  nombreContacto:String,
  emailContacto : {
    type: String,
    unique: true,
    required: true
  },
  telefonoContacto:String,
  industria: String,
  descripcion: String,
  estado:String,
  photo:String,
  bitacoras: [],
  profesores: [],
  estudiantes: [],
  bio:String
});

module.exports = mongoose.model('SolicitudProyecto', nuevoProyectoSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
//
