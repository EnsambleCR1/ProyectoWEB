(function(){
  angular
    .module('myEnsamble')
    .controller('administradorController', administradorController);
    function administradorController(administradorService,  $scope, $timeout, $mdSidenav,  $sessionStorage, Notification){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var administradorCtrl = this; //binding del controlador con el html, solo en el controlador

      $scope.toggleLeft = buildToggler('left');
    $scope.toggleRight = buildToggler('right');

    function buildToggler(componentId) {
      return function() {
        $mdSidenav(componentId).toggle();
      };
    }

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute


      }init();


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
     //se establece un objeto de angular normal

})();
