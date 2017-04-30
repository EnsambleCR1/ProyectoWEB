(function(){
  angular
    .module('myEnsamble')
    .controller('solicitudEstudianteController',solicitudEstudianteController);
    function solicitudEstudianteController(solicitudEstudianteService,$scope,administradorService,$state,ImagenesService,Upload,$mdDialog){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var solicitudEstudianteCtrl = this; //binding del controlador con el html, solo en el controlador
       solicitudEstudianteCtrl.cloudObj = ImagenesService.getConfiguration();
  
      $scope.toggleLeft = buildToggler('left');
      $scope.toggleRight = buildToggler('right');

      function buildToggler(componentId) {
        return function() {
          $mdSidenav(componentId).toggle();
        };
      }   

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        solicitudEstudianteCtrl.solicitudEstudiantes = solicitudEstudianteService.getSolicitudEstudiantes();
        administradorService.getCarreras().success(function(data){solicitudEstudianteCtrl.carreras = data;});
        administradorService.getCursos().success(function(data){solicitudEstudianteCtrl.cursos = data; });
        

        // solicitudEstudianteCtrl.solicitudEstudiante = administradorService.getSolicitudEstudiantes();
      }init();

      solicitudEstudianteCtrl.showPicker = function (){
        var myFileStack = filestack.init('ARK9lXB5WRCGe5NtlubYWz');

          
              myFileStack.pick({
              }).then(function(result) {
                solicitudEstudianteCtrl.curriculum = JSON.stringify(result.filesUploaded[0].url);
                solicitudEstudianteCtrl.curriculum = JSON.parse("[" + solicitudEstudianteCtrl.curriculum + "]");
              });
        }


          solicitudEstudianteCtrl.preSave = function(valido){

           
                solicitudEstudianteCtrl.cloudObj.data.file = document.getElementById("Foto").files[0];
          //solicitudEstudianteCtrl.cloudObj.data.file = document.getElementById("Curriculum").files[0];
            Upload.upload(solicitudEstudianteCtrl.cloudObj)
              .success(function(data){
               solicitudEstudianteCtrl.save(data.url);
              });

        
        }


         
        solicitudEstudianteCtrl.save = function (pFoto){
        if (solicitudEstudianteCtrl.nombreEstudiante != null && solicitudEstudianteCtrl.apellido1Estudiante != null && solicitudEstudianteCtrl.apellido2Estudiante != null
         && solicitudEstudianteCtrl.genero != null && solicitudEstudianteCtrl.nivelAcademico != null && solicitudEstudianteCtrl.emailEstudiante != null && 
         solicitudEstudianteCtrl.carreraSeleccionada != null && solicitudEstudianteCtrl.cursoSeleccionado != null) {
              var nuevoEstudiante = {
                  nombreEstudiante: solicitudEstudianteCtrl.nombreEstudiante,
                  apellido1Estudiante: solicitudEstudianteCtrl.apellido1Estudiante,
                  apellido2Estudiante: solicitudEstudianteCtrl.apellido2Estudiante,
                  genero: solicitudEstudianteCtrl.genero,
                  emailEstudiante: solicitudEstudianteCtrl.emailEstudiante,
                  nivelAcademico: solicitudEstudianteCtrl.nivelAcademico,
                  carreraSeleccionada: solicitudEstudianteCtrl.carreraSeleccionada,
                  cursoSeleccionado: solicitudEstudianteCtrl.cursoSeleccionado,
                  foto : pFoto,
                  urlCurriculum : solicitudEstudianteCtrl.curriculum[0],
                  estado : 'Pendiente'
                }

                solicitudEstudianteService.setSolicitudEstudiantes(nuevoEstudiante).success(function(data){
                
                $mdDialog.show(
                $mdDialog.alert()
                .clickOutsideToClose(true)
                .title('La solicitud fue recibida satisfactoriamente, pronto nos pondremos en contacto! Cenfotec Software House')
                .textContent('')
                .ariaLabel('Left to right demo')
                .ok('OK')
              );

                $state.go('inicio');
                  nombreEstudiante: solicitudEstudianteCtrl.nombreEstudiante = '';
                  apellido1Estudiante: solicitudEstudianteCtrl.apellido1Estudiante = '';
                  apellido2Estudiante: solicitudEstudianteCtrl.apellido2Estudiante = '';
                  genero: solicitudEstudianteCtrl.genero = '';
                  emailEstudiante: solicitudEstudianteCtrl.emailEstudiante = '';
                  nivelAcademico: solicitudEstudianteCtrl.nivelAcademico = '';
                  carreraSeleccionada: solicitudEstudianteCtrl.carreraSeleccionada = '';
                  cursoSeleccionado: solicitudEstudianteCtrl.cursoSeleccionado = '';
                  foto : pFoto = '';
                  urlCurriculum : pCurriculum = '';

                 })


                
              }else{
                $mdDialog.show(
              $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('¡Por favor complete los campos requeridos!')
              .textContent('')
              .ariaLabel('Left to right demo')
              .ok('OK')
            );
          }
      }
    }
})();

