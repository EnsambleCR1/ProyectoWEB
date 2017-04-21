(function(){
  angular
    .module('myEnsamble')
    .controller('solicitudEstudianteController',solicitudEstudianteController);
    function solicitudEstudianteController(solicitudEstudianteService,administradorService,$state,ImagenesService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var solicitudEstudianteCtrl = this; //binding del controlador con el html, solo en el controlador
          solicitudEstudianteCtrl.cloudObj = ImagenesService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        solicitudEstudianteCtrl.solicitudEstudiantes = solicitudEstudianteService.getSolicitudEstudiantes();
        administradorService.getCarreras().success(function(data){
          solicitudEstudianteCtrl.carreras = data; });
        //administradorService.getCursos().success(function(data){
          //solicitudEstudianteCtrl.cursos = data; });

        // solicitudEstudianteCtrl.solicitudEstudiante = administradorService.getSolicitudEstudiantes();
      }init();



          
            solicitudEstudianteCtrl.preSave = function(){
          solicitudEstudianteCtrl.cloudObj.data.file = document.getElementById("Foto").files[0];
          //solicitudEstudianteCtrl.cloudObj.data.file = document.getElementById("Curriculum").files[0];
            Upload.upload(solicitudEstudianteCtrl.cloudObj)
              .success(function(data){
                solicitudEstudianteCtrl.save(data.url);
              });
          }


        solicitudEstudianteCtrl.save = function (pFoto){
        if (solicitudEstudianteCtrl.nombreEstudiante != null && solicitudEstudianteCtrl.apellido1Estudiante != null && solicitudEstudianteCtrl.apellido2Estudiante != null && 
          solicitudEstudianteCtrl.genero != null && solicitudEstudianteCtrl.nivelAcademico != null && solicitudEstudianteCtrl.emailEstudiante != null && 
          solicitudEstudianteCtrl.carreras != null) {
              var nuevoEstudiante = {
                  nombreEstudiante: solicitudEstudianteCtrl.nombreEstudiante,
                  apellido1Estudiante: solicitudEstudianteCtrl.apellido1Estudiante,
                  apellido2Estudiante: solicitudEstudianteCtrl.apellido2Estudiante,
                  genero: solicitudEstudianteCtrl.genero,
                  emailEstudiante: solicitudEstudianteCtrl.emailEstudiante,
                  nivelAcademico: solicitudEstudianteCtrl.nivelAcademico,
                  carreraSeleccionada: solicitudEstudianteCtrl.carreraSeleccionada,
                  //cursoSeleccionado: solicitudEstudianteCtrl.cursoSeleccionado,
                  foto : pFoto
                 // curriculum : pCurriculum
                }
                solicitudEstudianteService.setSolicitudEstudiantes(nuevoEstudiante);
                alert('Gracias por la información prontos nos pondrémos en contacto');
                $state.go('inicio');
                  nombreEstudiante: solicitudEstudianteCtrl.nombreEstudiante = '';
                  apellido1Estudiante: solicitudEstudianteCtrl.apellido1Estudiante = '';
                  apellido2Estudiante: solicitudEstudianteCtrl.apellido2Estudiante = '';
                  genero: solicitudEstudianteCtrl.genero = '';
                  emailEstudiante: solicitudEstudianteCtrl.emailEstudiante = '';
                  nivelAcademico: solicitudEstudianteCtrl.nivelAcademico = '';
                  carreraSeleccionada: solicitudEstudianteCtrl.carreraSeleccionada = '';
                  //cursoSeleccionado: solicitudEstudianteCtrl.cursoSeleccionado = '';
                  foto : pFoto = '';
                  //curriculum : pCurriculum = '';
              }else{
                alert('Favor llenar los espacios en blanco ');
              }
      }
    }
})();

