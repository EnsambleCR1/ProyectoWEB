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
