//Requerimos mongoose
var mongoose = require('mongoose');
//Esquema de usuarios
var nuevoEstudianteSchema = new mongoose.Schema({
  nombreEstudiante: String,
  apellido1Estudiante: String,
  apellido2Estudiante: String,
  genero:String,
  emailEstudiante: String,
  nivelAcademico: String,
  carreraSeleccionada:String,
  cursoSeleccionado:String,
  foto:String,
<<<<<<< HEAD
  urlCurriculum:String,
  estado:String
=======
<<<<<<< HEAD
  urlCurriculum:String,
  estado:String
=======
  urlCurriculum:String
>>>>>>> 85a0353358099d3528224ad2bf76d79d823b49d4
>>>>>>> 165a10ab3f14e643372df0310e0d61bd97808c8b
});

module.exports = mongoose.model('SolicitudEstudiante', nuevoEstudianteSchema); //nombre del modelo dentro del back end y el userSchema es el nombre dentro de mongoose
//User va en mayúscula y singular aunque en la bd todo se pone en minúscula y plural
//
