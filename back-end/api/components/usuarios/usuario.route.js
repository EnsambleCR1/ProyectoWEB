var express = require('express');
var	router = express.Router();
var usuarioController = require('./usuario.controller.js');

//Para las rutas con id
router.param('id',function(req, res, next, id){
  req.body.id = id;
  next();
});


//Declaracion de las rutas

router.route('/usuarios')
  .post(function(req, res){
    usuarioController.save(req,res);
 	});

router.route('/usuarios')
  .get(function(req, res){
    usuarioController.findAll(req,res);
  });
router.route('/usuarios/:id')
  .delete(function(req, res){
    usuarioController.remove(req,res);
 	});
// router.route('/carreras')
//   .put(function(req, res){
//     carreraController.update(req,res);
//  	});




// Se exporta el modulo
module.exports = router;
