(function(){
  angular
  .module('myEnsamble')
  .service('estudianteService', estudianteService);

  function estudianteService(){
    var estudiantes = [];
    var calendarios = [];
    var horas = [];
    var publicAPI = {
      setEstudiantes : _setEstudiantes,
      getEstudiantes : _getEstudiantes,
      setCalendarios : _setCalendarios,
      getCalendarios : _getCalendarios,
      setHoras : _setHoras,
      getHoras : _getHoras
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones

    function _setEstudiantes(pEstudiantes){
      return $http.post('http://localhost:8000/api/solicitudProyectos', pEstudiantes);
    }

    function _getEstudiantes(){
      return $http.get('http://localhost:8000/api/solicitudProyectos');
    }



    function _setCalendarios(pCalendario){
      calendarios.push(pCalendario);
      alert("Tarea añadida");
    }
    function _getCalendarios(){
      return calendarios
    }

    function _setHoras(pRegistro){
      horas.push(pRegistro);
      alert("Registro añadido");
    }
    function _getHoras(){
      return horas
    }


  }

})();
