(function(){
  angular
  .module('myEnsamble')
  .service('administradorService', administradorService);

  function administradorService($http,inicioSesionService){

    var bitacoras=[];
    var estadoProyecto = [];
    var solicitudProyectosAceptados = [];
    var solicitudProyectosRechazados = [];

    var publicAPI = {
      setCarreras : _setCarreras,
      setCursos : _setCursos,
      getCarreras : _getCarreras,
      getCursos : _getCursos,
      eliminarCarrera : _eliminarCarrera,
      eliminarCurso : _eliminarCurso,
      setProfesores : _setProfesores,
      getProfesores : _getProfesores,
      updateProfesores : _updateProfesores,
      setSolicitudProyectosCambio : _setSolicitudProyectosCambio,
      setSolicitudEstudiantesCambio : _setSolicitudEstudiantesCambio
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setSolicitudEstudiantesCambio(nuevoEstudiante){
      return $http.put('http://localhost:8000/api/solicitudEstudiantes', nuevoEstudiante);
    };

    function _setSolicitudProyectosCambio(nuevoProyecto){
      return $http.put('http://localhost:8000/api/solicitudProyectos', nuevoProyecto);
    };


    function _setCarreras(pCarrera){
      //users.push(pUser);
      return $http.post('http://localhost:8000/api/carreras', pCarrera);

    }

    function _setCursos(pCurso){
      return $http.post('http://localhost:8000/api/cursos', pCurso);
    }

    function _getCarreras(){
      return $http.get('http://localhost:8000/api/carreras');
    }

    function _getCursos() {
      return $http.get('http://localhost:8000/api/cursos');
    }

    function _eliminarCarrera(id) {
      return $http.delete('http://localhost:8000/api/carreras/' + id);
    }

    function _eliminarCurso(id) {
      return $http.delete('http://localhost:8000/api/cursos/' + id);
    }

    function _setProfesores(pProfesor) {
      return $http.post('http://localhost:8000/api/profesores', pProfesor);
    }

    function _getProfesores() {
      return $http.get('http://localhost:8000/api/profesores');
    }

    function _updateProfesores(pProfesor) {
      return $http.put('http://localhost:8000/api/profesores',pProfesor);
    }

  }

})();
