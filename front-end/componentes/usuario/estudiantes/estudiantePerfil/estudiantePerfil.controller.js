(function(){
  angular
    .module('myEnsamble')
    .controller('estudianteController',estudianteController);
    function estudianteController(estudianteService,solicitudEstudianteService,$http,inicioSesionService,$scope){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var estudianteCtrl = this; //binding del controlador con el html, solo en el controlador

      $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        solicitudEstudianteService.getSolicitudEstudiantes().success(function(data){estudianteCtrl.solicitudEstudiantes = data; });
      }init(); 

  }
})()
