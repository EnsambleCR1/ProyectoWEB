(function(){
  angular
  .module('myEnsamble')
  .service('solicitudProyectoService', solicitudProyectoService);

 function solicitudProyectoService($http){
    var solicitudProyectos = [];
    var publicAPI = {
      setSolicitudProyectos : _setSolicitudProyectos,
      getSolicitudProyectos : _getSolicitudProyectos,
      getSolicitudProyectosAceptados : _getSolicitudProyectosAceptados,
      getSolicitudProyectosRechazados : _getSolicitudProyectosRechazados,
    //  eliminarSolicitudEstudiante : _eliminarSolicitudEstudiante

    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setSolicitudProyectos(pSolicitudProyecto){
      return $http.post('http://localhost:8000/api/solicitudProyectos', pSolicitudProyecto);
    }

    function _getSolicitudProyectos(){
      return $http.get('http://localhost:8000/api/solicitudProyectos');
    }


    function _getSolicitudProyectosAceptados(){
      return $http.get('http://localhost:8000/api/_getSolicitudProyectosAceptados');
    }

    function _getSolicitudProyectosRechazados(){
      return $http.get('http://localhost:8000/api/_getSolicitudProyectosRechazados');
    }
  }

})();
