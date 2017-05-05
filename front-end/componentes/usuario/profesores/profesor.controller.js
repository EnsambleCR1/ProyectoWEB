(function(){
  angular
    .module('myEnsamble')
    .controller('profesorController',profesorController);
    function profesorController(profesorService, $scope, $mdSidenav, $timeout, $sessionStorage, Notification){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var profesorCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute

         var usarioSessionStorage = sessionStorage.usuario;

      }init();

      $scope.toggleLeft = buildToggler('left');
      $scope.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      }





      $scope.warningTitle = function() {

        var getUser = sessionStorage.getItem("user");


        var user = JSON.parse(getUser);

        var messages = ['Bienvenido a Cenfotec Software House ' + user.nombre 
        ];


        for (var i = 0; i < messages.length; i++) {
          Notification({message: messages[i], title: 'Cenfotec Software House'});
        }

      };



    }


})();
