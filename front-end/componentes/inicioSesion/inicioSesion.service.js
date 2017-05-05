(function(){
  angular
  .module('myEnsamble')
  .service('inicioSesionService', inicioSesionService);

  function inicioSesionService($http){
  
    var publicAPI = {
      inicioSesionUsuario : _inicioSesionUsuario,
      setUsuarios : _setUsuarios,
      getUsuarios : _getUsuarios

    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _inicioSesionUsuario(pUsuario){

        var usuarioValido = false.
            tipoUsuario = '';


        for (var i = 0; i < usuarios.length; i++) {
          if (usuarios[i].correo == aUsuario.correo && usuarios[i].contrasenna == aUsuario.contrasenna) {
            if (usuarios[i].tipo == 'administrador') {
              usuarioValido = true;
              tipoUsuario = usuarios[i].tipo;
            }else if (usuarios[i].tipo == 'estudiante') {
              usuarioValido = true;
              tipoUsuario = usuarios[i].tipo;
            }else if (usuarios[i].tipo == 'asistente') {
              usuarioValido = true;
              tipoUsuario = usuarios[i].tipo;
            }else if (usuarios[i].tipo == 'profesor') {
              usuarioValido = true;
              tipoUsuario = usuarios[i].tipo;
            }
          }
        }





    }

    function _setUsuarios(pNuevoUsuario){
      return $http.post('http://localhost:8000/api/usuarios', pNuevoUsuario);
    }

    function _getUsuarios() {
      return $http.get('http://localhost:8000/api/usuarios');
    }






  }
})();
