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
    var estadoEstudiantes = [];
    var solicitudEstudiantesAceptados = [];
    var solicitudEstudiantesRechazados = [];
    var publicAPI = {
      setCarreras : _setCarreras,
      setCursos : _setCursos,
      getCarreras : _getCarreras,
      getCursos : _getCursos,
      eliminarCarrera : _eliminarCarrera,
      eliminarCurso : _eliminarCurso,
      setProfesores : _setProfesores,
      getProfesores : _getProfesores,
<<<<<<< HEAD
      setSolicitudEstudiantesCambio : _setSolicitudEstudiantesCambio,
      //setASignarEstudianteProyecto : _setASignarEstudianteProyecto
=======
<<<<<<< HEAD
      setSolicitudEstudiantesCambio : _setSolicitudEstudiantesCambio
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setSolicitudEstudiantesCambio(nuevoEstudiante){
      return $http.put('http://localhost:8000/api/solicitudEstudiantes', nuevoEstudiante);
=======
<<<<<<< HEAD
      setEstadoEstudiante : _setEstadoEstudiante,
      getEstadoEstudiante : _getEstadoEstudiante,
      setSolicitudAceptado : _setSolicitudAceptado,
      setSolicitudRechazado : _setSolicitudRechazado
=======
      getSolicitudEstud : _getSolicitudEstud
>>>>>>> c3a1f5a1161226f9ffbc2fbb72b340b3b3af7506
>>>>>>> 165a10ab3f14e643372df0310e0d61bd97808c8b
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    //function _setAsignarEstudianteProyecto(pnuevoEstudianteAceptado){
   //   return $http.post('http://localhost:8000/api/proyectos', pnuevoEstudianteAceptado);
    //}

<<<<<<< HEAD
    function _setSolicitudEstudiantesCambio(nuevoEstudiante){
      return $http.put('http://localhost:8000/api/solicitudEstudiantes', nuevoEstudiante);
=======
    function _getSolicitudEstud(){
      return $http.get('http://localhost:8000/api/solicitudEstudiantes');
>>>>>>> 85a0353358099d3528224ad2bf76d79d823b49d4
>>>>>>> 165a10ab3f14e643372df0310e0d61bd97808c8b
    }

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
      profesores = _getProfesores();
      profesores.push(pProfesor);
      localStorage.setItem('profesoreslLS',JSON.stringify(profesores));
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

<<<<<<< HEAD
    
=======
    //estado estudiantes//

//    function _setEstadoEstudiante(pEstadoEstudiante){
//      estadoEstudiante = _getEstadoEstudiante();
//      estadoEstudiante.push(pEstadoEstudiante);
//    }
//
//    function _getEstadoEstudiante(){
//      var listarEstadoEstudiantes = [];
//      if (localStorage.getItem('mEstadoEstudianteLocal') == null) {
//        listarEstadoEstudiantes = [];
//      }else{
//        listarEstadoEstudiantes = JSON.parse(localStorage.getItem('mEstadoEstudianteLocal'));
//      }
//      return listarEstadoEstudiantes;
//    }
//
//    function _setSolicitudEstudianteAceptado(pEstudianteAceptado){
//      console.log(pEstudianteAceptado);
//      var listarEstadoEstudiantes = _getEstadoEstudiante();
//      for(var i = 0; i < listarEstadoEstudiantes.length;i++){
//        if(listarEstadoEstudiantes[i].emailEstudiante === pEstudianteAceptado.emailEstudiante){
//          listarEstadoEstudiantes[i] = pEstudianteAceptado;
//        }
//      }
//      
//    }
//
//    function _setSolicitudEstudianteRechazado(pEstudianteRechazado){
//      console.log(pEstudianteRechazado);
//      var listarEstadoEstudiantes = _getEstadoEstudiante();
//      for (var i = 0; i < listarEstadoEstudiantes.length; i++) {
//        if (listarEstadoEstudiantes[i].emailEstudiante == pEstudianteRechazado.emailEstudiante) {
//          listarEstadoEstudiantes[i] = pEstudianteRechazado;
//        }
//      }
//      
//    }
//
//    function _setCambiosEstadoEstudiantes(pcambiosEstadoEstudiantes ){
//      var estadoEstudiantes = _getEstadoEstudiantes();
//      for(var i=0;i<estadoEstudiantes.length;i++){
 //       if(estadoEstudiantes[i].emailEstudiante == pcambiosEstadoEstudiantes.emailEstudiante){
 //         estadoEstudiantes[i] = pcambiosEstadoEstudiantes;
 //         
 //       }
 //     }
//    }
//
//    function _getCambiosEstadoEstudiantes(){
//      var cambiosEstadoEstudiantes = [];
//      if(localStorage.getItem('cambiosLs') == null){
//        cambiosEstadoEstudiantes = [];
//      }else{
//        cambiosEstadoEstudiantes = JSON.parse(localStorage.getItem('cambiosEstadoEstudiantesLs'));
//      }
//      return cambiosEstadoEstudiantes;
//    }
//
//  }
>>>>>>> 165a10ab3f14e643372df0310e0d61bd97808c8b

}})();
