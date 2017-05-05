var express = require('express');
var	router = express.Router();
var solicitudProyectoController = require('./solicitudProyecto.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/solicitudProyectos')
  .post(function(req, res){
    solicitudProyectoController.save(req,res);
 	});

router.route('/solicitudProyectos')
  .put(function(req, res){
    solicitudProyectoController.update(req,res);
 	});


router.route('/solicitudProyectos')
  .get(function(req, res){
    solicitudProyectoController.findAll(req,res);
  });
router.route('/solicitudProyectos/:id')
  .delete(function(req, res){
    solicitudProyectoController.remove(req,res);
 	});



// Se exporta el modulo
module.exports = router;
