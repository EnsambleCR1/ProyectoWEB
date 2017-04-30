var express = require('express');
var	router = express.Router();
var solicitudEstudianteController = require('./solicitudEstudiante.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/solicitudEstudiantes')
  .post(function(req, res){
    solicitudEstudianteController.save(req,res);
 	});
<<<<<<< HEAD
router.route('/solicitudEstudiantes')
  .put(function(req, res){
    solicitudEstudianteController.update(req,res);
 	});
=======
>>>>>>> 85a0353358099d3528224ad2bf76d79d823b49d4

router.route('/solicitudEstudiantes')
  .get(function(req, res){
    solicitudEstudianteController.findAll(req,res);
  });
router.route('/solicitudEstudiantes/:id')
  .delete(function(req, res){
    solicitudEstudianteController.remove(req,res);
 	});



// Se exporta el modulo
module.exports = router;
