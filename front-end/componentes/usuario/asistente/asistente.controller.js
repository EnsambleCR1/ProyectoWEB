(function(){
  angular
    .module('myEnsamble')
    .controller('asistenteController', asistenteController);
    function asistenteController(asistenteService,administradorService,estadoEstudianteService,proyectosService,$scope,$timeout, $mdSidenav,$mdDialog){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador

      $scope.toggleLeft = buildToggler('left');
      $scope.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      }
      $scope.showDialogCorreo = function(ev) {
        $mdDialog.show({
          controller : asistenteController,
          templateUrl : 'componentes/usuario/asistente/asistentePopup.view.html',
          parent : angular.element(document.body),
          targetEvent : ev,
          clickOutsideToClose : true
        });

      };
      var asistenteCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){

       // función que se llama así misma para indicar que sea lo primero que se ejecute
       asistenteService.getProyectosRevision()
        .success(function(data){
          asistenteCtrl.proyectos = data;
        });


      }init();

      asistenteCtrl.save = function(pobjPendiente,ev){

         confirm = $mdDialog.confirm()
          .title('¿Está seguro de que desea envia el proyecto a bandeja administrador?')
          .textContent('')
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Sí')
          .cancel('No');

            $mdDialog.show(confirm).then(function() {
            pobjPendiente.estado = 'pendiente';
            proyectosService.setPendiente(pobjPendiente)
            .success(function(data){
              console.log(data);

                init();
            })

            $mdDialog.show(
              $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('¡El proyecto se ha enviado a bandeja de pendientes correctamente!')
              .textContent('')
              .ariaLabel('Left to right demo')
              .ok('OK')
            );
          });

      }

    }
     //se establece un objeto de angular normal

})();
