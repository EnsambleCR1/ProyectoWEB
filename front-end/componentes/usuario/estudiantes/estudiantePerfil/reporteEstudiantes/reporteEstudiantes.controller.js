(function(){
  angular
    .module('myEnsamble')
    .controller('reporteController', reporteController);
    function reporteController(estudianteService,$scope, $mdDialog,solicitudEstudianteService,solicitudProyectoService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var reporteEstCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
       solicitudProyectoService.getSolicitudProyectos().success(function(data){reporteEstCtrl.solicitudProyectos = data;});
       solicitudEstudianteService.getSolicitudEstudiantes().success(function(data){reporteEstCtrl.solicitudEstudiantes = data;});
       administradorService.getProfesores().success(function(data){reporteEstCtrl.profesores = data;});
       
      }init();

      

  }
})();

