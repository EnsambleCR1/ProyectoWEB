(function(){
  angular
    .module('myEnsamble')
    .controller('reporteController', reporteController);
    function reporteController(administradorService,$scope, $mdDialog,solicitudEstudianteService,solicitudProyectoService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var reporteCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
       solicitudProyectoService.getSolicitudProyectos().success(function(data){reporteCtrl.solicitudProyectos = data;});
       solicitudEstudianteService.getSolicitudEstudiantes().success(function(data){reporteCtrl.solicitudEstudiantes = data;});
       administradorService.getProfesores().success(function(data){reporteCtrl.profesores = data;});
       
      }init();

      

  }
})();

