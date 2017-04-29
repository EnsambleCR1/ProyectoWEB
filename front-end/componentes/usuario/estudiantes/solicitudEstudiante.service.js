<<<<<<< HEAD
(function(){
  angular
  .module('myEnsamble')
  .service('solicitudEstudianteService',solicitudEstudianteService);

  function solicitudEstudianteService(){
    var solicitudEstudiantes = [];
    var publicAPI = {
      setSolicitudEstudiantes : _setSolicitudEstudiantes,
      getSolicitudEstudiantes : _getSolicitudEstudiantes
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setSolicitudEstudiantes(nuevoEstudiante){
      solicitudEstudiantes.push(nuevoEstudiante);
      console.log('Estudiante guardado');
    }

    function _getSolicitudEstudiantes(){
      return solicitudEstudiantes;
    }
  }

})();
=======
(function(){
  angular
  .module('myEnsamble')
  .service('solicitudEstudianteService',solicitudEstudianteService);

  function solicitudEstudianteService(){
    var solicitudEstudiantes = [];
    var publicAPI = {
      setSolicitudEstudiantes : _setSolicitudEstudiantes,
      getSolicitudEstudiantes : _getSolicitudEstudiantes
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones


    function _setSolicitudEstudiantes(pnuevoEstudiante){
      return $http.post('http://localhost:8000/api/solicitudEstudiantes', pnuevoEstudiante);
    }

    function _getSolicitudEstudiantes(){
      return $http.get('http://localhost:8000/api/solicitudEstudiantes');
    }

  }

})();
>>>>>>> c3a1f5a1161226f9ffbc2fbb72b340b3b3af7506
