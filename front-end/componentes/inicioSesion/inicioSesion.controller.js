(function(){
  angular
    .module('myEnsamble')
    .controller('inicioSesionController', inicioSesionController);
    function inicioSesionController(inicioSesionService,$state,$mdDialog, $scope,administradorService){ //se inyecta el service userService en el controlador para que se tenga acceso
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

                    if (usuarioTemp.comite == true) {
                      var comite = true;
                    }
                  }
                }
              }
            }


          if (usuarioValido == true && contrasennaValida == true) {
            alert('yeah!');
          }else {
            alert('wrong');
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



      // if (usuario == 'administrador') {
      //   $state.go('administrador');
      // }else if (usuario == 'profesor') {
      //   $state.go('profesorPerfil');
      // }else if (usuario == 'estudiante') {
      //   $state.go('estudiantePerfil');
      // }else if (usuario == 'asistente') {
      //   $state.go('asistente');
      // }
      //
      // }
    }

  }
     //se establece un objeto de angular normal

})();
