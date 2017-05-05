(function(){
  angular
    .module('myEnsamble')
    .controller('inicioSesionController', inicioSesionController);
    function inicioSesionController(inicioSesionService,$state,$mdDialog, $scope,administradorService, $sessionStorage){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var inicioSesionCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        inicioSesionService.getUsuarios()
          .success(function(data){
            inicioSesionCtrl.usuarios = data;
          });

      }init();

      inicioSesionCtrl.inicioSesion = function(valid){


        if (valid) {

          var nuevoInicio = {
            correo : inicioSesionCtrl.correo,
            contrasenna : inicioSesionCtrl.contrasenna
          }

          var arrayUsuarios = inicioSesionCtrl.usuarios;
          var usuarioValido = false;
          var contrasennaValida = false;

          for (var key in arrayUsuarios) {
              if (arrayUsuarios.hasOwnProperty(key)) {
                var usuarioTemp = arrayUsuarios[key];
                if (nuevoInicio.correo == usuarioTemp.correo) {
                  usuarioValido = true;
                  if (nuevoInicio.contrasenna == usuarioTemp.contrasenna) {
                    contrasennaValida = true;
                    var tipoUsuario = usuarioTemp.tipo;
                    var userSessionStorage = usuarioTemp;
                    if (usuarioTemp.comite == true) {
                      var comite = true;
                    }
                  }
                }
              }
            }


          if (usuarioValido == true && contrasennaValida == true){
            if (tipoUsuario == 'Administrador') {
              $state.go('administrador');
              var userData = JSON.stringify(userSessionStorage);
            }else if (tipoUsuario == 'Estudiante') {
              $state.go('estudiantePerfil');
              var userData = JSON.stringify(userSessionStorage);
              sessionStorage.setItem("user", userData);
            }else if (tipoUsuario == 'Asistente') {
              $state.go('asistente');
              var userData = JSON.stringify(userSessionStorage);
            }else if (tipoUsuario == 'Profesor') {
              $state.go('profesorPerfil');
              var userData = JSON.stringify(userSessionStorage);
              sessionStorage.setItem("user", userData);
            }
          }else if (usuarioValido == true && contrasennaValida == false) {
            $mdDialog.show(
              $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('Contraseña incorrecta. Porfavor, intente de nuevo')
              .textContent('')
              .ariaLabel('Left to right demo')
              .ok('OK')
            );
          }else if (usuarioValido == false) {
            $mdDialog.show(
              $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('Correo ingresado no existe en el sistema')
              .textContent('')
              .ariaLabel('Left to right demo')
              .ok('OK')
            );
          }



        }else {
          $mdDialog.show(
            $mdDialog.alert()
            .clickOutsideToClose(true)
            .title('¡Por favor complete los campos requeridos!')
            .textContent('')
            .ariaLabel('Left to right demo')
            .ok('OK')
          );
        }
    }

  }
     //se establece un objeto de angular normal

})();
