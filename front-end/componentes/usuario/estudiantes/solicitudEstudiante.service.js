(function(){
  angular
  .module('myEnsamble')
  .service('solicitudEstudianteService',solicitudEstudianteService);

  function solicitudEstudianteService($http){
    var solicitudEstudiantes = [];
    var publicAPI = {
      setSolicitudEstudiantes : _setSolicitudEstudiantes,
      getSolicitudEstudiantes : _getSolicitudEstudiantes,
      getSolicitudEstudiantesAceptados : _getSolicitudEstudiantesAceptados,
      getSolicitudEstudiantesRechazados : _getSolicitudEstudiantesRechazados,
    

    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

 

    function _setSolicitudEstudiantes(pSolicitudEstudiante){
      return $http.post('http://localhost:8000/api/solicitudEstudiantes', pSolicitudEstudiante);
    }

    function _getSolicitudEstudiantes(){
      return $http.get('http://localhost:8000/api/solicitudEstudiantes');
    }


    function _getSolicitudEstudiantesAceptados(){
      return $http.get('http://localhost:8000/api/_getSolicitudEstudiantesAceptados');
    }

    function _getSolicitudEstudiantesRechazados(){
      return $http.get('http://localhost:8000/api/_getSolicitudEstudiantesRechazados');
    }
   
  }

})();
