(function(){
  angular
    .module('myEnsamble')
    .controller('estadoEstudianteController', estadoEstudianteController);
    function estadoEstudianteController(solicitudEstudianteService,administradorService,$scope, $mdDialog){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var estadoEstudianteCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
       //estadoEstudianteCtrl.estadoEstudiantes = administradorService.getEstadoEstudiante();
     //  estadoEstudianteCtrl.cambiosEstadoEstudiantes = administradorService.getCambiosEstadoEstudiantes();
       solicitudEstudianteService.getSolicitudEstudiantes().success(function(data){estadoEstudianteCtrl.solicitudEstudiantes = data; });
       
      }init();

      var solicitudEstudiantesAceptados = [];
      var solicitudEstudiantesRechazados = [];

      estadoEstudianteCtrl.aceptar = function(pobjEstado){
        var nuevoEstudiante = {
            nombreEstudiante: pobjEstado.nombreEstudiante,
            apellido1Estudiante: pobjEstado.apellido1Estudiante,
            apellido2Estudiante: pobjEstado.apellido2Estudiante,
            genero: pobjEstado.genero,
            emailEstudiante: pobjEstado.emailEstudiante,
            nivelAcademico: pobjEstado.nivelAcademico,
            carreraSeleccionada: pobjEstado.carreraSeleccionada,
            cursoSeleccionado: pobjEstado.cursoSeleccionado,
            foto : pobjEstado.pFoto,
            urlCurriculum : pobjEstado.pCurriculum,
            estado : 'Aceptado',
            _id : pobjEstado._id
          }
        administradorService.setSolicitudEstudiantesCambio(nuevoEstudiante)
        .success(function(data){
          console.log(data);
        init();
         })
 
  }
      estadoEstudianteCtrl.rechazado = function(pobjEstado){
         var nuevoEstudiante = {
            nombreEstudiante: pobjEstado.nombreEstudiante,
            apellido1Estudiante: pobjEstado.apellido1Estudiante,
            apellido2Estudiante: pobjEstado.apellido2Estudiante,
            genero: pobjEstado.genero,
            emailEstudiante: pobjEstado.emailEstudiante,
            nivelAcademico: pobjEstado.nivelAcademico,
            carreraSeleccionada: pobjEstado.carreraSeleccionada,
            cursoSeleccionado: pobjEstado.cursoSeleccionado,
            foto : pobjEstado.pFoto,
            urlCurriculum : pobjEstado.pCurriculum,
            estado : 'Rechazado',
            _id : pobjEstado._id
          }
        administradorService.setSolicitudEstudiantesCambio(nuevoEstudiante)
        .success(function(data){
          console.log(data);
        init();
       })
     
  }
}
})();

