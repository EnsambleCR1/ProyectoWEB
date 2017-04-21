(function(){
  angular
  .module('myEnsamble')
  .service('administradorService', administradorService);

  function administradorService(inicioSesionService,$http){



    var profesores = [
      {
        nombre : 'Pablo Monestel',
        correo : 'pmonestel@ucenfotec.ac.cr',
        contrasenna : 'Pmonestel@',
        tipo : 'profesor'
      }
    ];
    var estadoEstudiante = [];
    var publicAPI = {
      setCarreras : _setCarreras,
      setCursos : _setCursos,
      getCarreras : _getCarreras,
      getCursos : _getCursos,
      eliminarCarrera : _eliminarCarrera,
      eliminarCurso : _eliminarCurso,
      setProfesores : _setProfesores,
      getProfesores : _getProfesores,
      setEstadoEstudiante : _setEstadoEstudiante,
      getEstadoEstudiante : _getEstadoEstudiante,
      setSolicitudAceptado : _setSolicitudAceptado,
      setSolicitudRechazado : _setSolicitudRechazado
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones



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
      preofesores = _getProfesores();
      preofesores.push(pProfesor);
      localStorage.setItem('profesoreslLS',JSON.stringify(preofesores));
      // profesores.push(pProfesor);
      // usuarios.push(pProfesor);
    }

    function _getProfesores() {
      var profesores = [];
      if(localStorage.getItem('profesoreslLS') == null){
        profesores = [];
      }else{
        profesores = JSON.parse(localStorage.getItem('profesoreslLS'));
      }
      return profesores;
    }

    //estado estudiantes//

    function _setEstadoEstudiante(pEstadoEstudiante){
      estadoEstudiante = _getEstadoEstudiante();
      estadoEstudiante.push(pEstadoEstudiante);
      localStorage.setItem('mEstadoEstudianteLocal',JSON.stringify(estadoEstudiante));
    }

    function _getEstadoEstudiante(){
      var listarEstadoEstudiantes = [];
      if (localStorage.getItem('mEstadoEstudianteLocal') == null) {
        listarEstadoEstudiantes = [];
      }else{
        listarEstadoEstudiantes = JSON.parse(localStorage.getItem('mEstadoEstudianteLocal'));
      }
      return listarEstadoEstudiantes;
    }

    function _setSolicitudAceptado(pEstudianteAceptado){
      console.log(pEstudianteAceptado);
      var listarEstadoEstudiantes = _getEstadoEstudiante();
      for(var i = 0; i < listarEstadoEstudiantes.length;i++){
        if(listarEstadoEstudiantes[i].emailEstudiante === pEstudianteAceptado.emailEstudiante){
          listarEstadoEstudiantes[i] = pEstudianteAceptado;
        }
      }
      localStorage.setItem('mEstadoEstudianteLocal',JSON.stringify(listarEstadoEstudiantes));
    }

    function _setSolicitudRechazado(pEstudianteRechazado){
      console.log(pEstudianteRechazado);
      var listarEstadoEstudiantes = _getEstadoEstudiante();
      for (var i = 0; i < listarEstadoEstudiantes.length; i++) {
        if (listarEstadoEstudiantes[i].emailEstudiante == pEstudianteRechazado.emailEstudiante) {
          listarEstadoEstudiantes[i] = pEstudianteRechazado;
        }
      }
      localStorage.setItem('mEstadoEstudianteLocal',JSON.stringify(listarEstadoEstudiantes));
    }





  }

})();
