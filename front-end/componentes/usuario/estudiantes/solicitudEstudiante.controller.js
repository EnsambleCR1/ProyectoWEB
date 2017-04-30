(function(){
  angular
    .module('myEnsamble')
    .controller('solicitudEstudianteController',solicitudEstudianteController);
<<<<<<< HEAD
    function solicitudEstudianteController(solicitudEstudianteService,$scope,administradorService,$state,ImagenesService,Upload,$mdDialog){ //se inyecta el service userService en el controlador para que se tenga acceso
=======
    function solicitudEstudianteController(solicitudEstudianteService,$scope,administradorService,$state,ImagenesService,Upload,$mdDialog,$scope){ //se inyecta el service userService en el controlador para que se tenga acceso
>>>>>>> 165a10ab3f14e643372df0310e0d61bd97808c8b
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

<<<<<<< HEAD
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
=======
        var myFileStack = filestack.init('ARK9lXB5WRCGe5NtlubYWz');
          solicitudEstudianteCtrl.showPicker = function (){
              myFileStack.pick({
              }).then(function(result) {
                  curriculum = result.filesUploaded[0].url;
                  solicitudEstudianteCtrl.save(curriculum);
                  
              });
          }


            solicitudEstudianteCtrl.preSave = function(){
          solicitudEstudianteCtrl.cloudObj.data.file = document.getElementById("Foto").files[0];
>>>>>>> 165a10ab3f14e643372df0310e0d61bd97808c8b
          //solicitudEstudianteCtrl.cloudObj.data.file = document.getElementById("Curriculum").files[0];
            Upload.upload(solicitudEstudianteCtrl.cloudObj)
              .success(function(data){
               solicitudEstudianteCtrl.save(data.url);
              });

        
        }

<<<<<<< HEAD

         
        solicitudEstudianteCtrl.save = function (pFoto){
        if (solicitudEstudianteCtrl.nombreEstudiante != null && solicitudEstudianteCtrl.apellido1Estudiante != null && solicitudEstudianteCtrl.apellido2Estudiante != null
         && solicitudEstudianteCtrl.genero != null && solicitudEstudianteCtrl.nivelAcademico != null && solicitudEstudianteCtrl.emailEstudiante != null && 
         solicitudEstudianteCtrl.carreraSeleccionada != null && solicitudEstudianteCtrl.cursoSeleccionado != null) {
=======
          $scope.selected = [1];
          $scope.toggle = function (curso, listaCursos) {
            var idx = listaCursos.indexOf(curso);
            if (idx > -1) {
              listaCursos.splice(idx, 1);
            }
            else {
              listaCursos.push(curso);
              solicitudEstudianteCtrl.save(listaCursos);
            }
          };

          $scope.exists = function (curso, listaCursos) {
            return listaCursos.indexOf(curso) > -1;
          };

         
        solicitudEstudianteCtrl.save = function (pFoto,pCurriculum){
        if (solicitudEstudianteCtrl.nombreEstudiante != null && solicitudEstudianteCtrl.apellido1Estudiante != null && solicitudEstudianteCtrl.apellido2Estudiante != null && 
          solicitudEstudianteCtrl.genero != null && solicitudEstudianteCtrl.nivelAcademico != null && solicitudEstudianteCtrl.emailEstudiante != null && solicitudEstudianteCtrl.carreraSeleccionada != null && solicitudEstudianteCtrl.cursoSeleccionado != null) {
>>>>>>> 165a10ab3f14e643372df0310e0d61bd97808c8b
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
<<<<<<< HEAD
                  urlCurriculum : solicitudEstudianteCtrl.curriculum[0],
=======
                  urlCurriculum : pCurriculum,
>>>>>>> 165a10ab3f14e643372df0310e0d61bd97808c8b
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

<<<<<<< HEAD

                
=======
              
>>>>>>> 165a10ab3f14e643372df0310e0d61bd97808c8b
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

