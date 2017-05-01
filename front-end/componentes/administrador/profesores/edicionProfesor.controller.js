(function(){
  angular
    .module('myEnsamble')
    .controller('edicionProfesorController', edicionProfesorController);
    function edicionProfesorController(administradorService,inicioSesionService, $scope, $mdDialog){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var edicionProfesorCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute

        administradorService.getCarreras()
          .success(function(data){
            edicionProfesorCtrl.carreras = data;
          });


        administradorService.getCursos()
          .success(function(data){
            edicionProfesorCtrl.cursos = data;

          });

        administradorService.getProfesores()
          .success(function(data){
            edicionProfesorCtrl.profesores = data;

          });


      }init();


      edicionProfesorCtrl.save = function (valido){

        if (valido) {


          var nuevoProfesor = {
            nombre : edicionProfesorCtrl.nombre,
            primerApellido : edicionProfesorCtrl.primerApellido,
            segundoApellido : edicionProfesorCtrl.segundoApellido,
            email : edicionProfesorCtrl.email,
            estado : 'Elegible',
            cursos : edicionProfesorCtrl.cursosSeleccionados,
            especialidad : edicionProfesorCtrl.especialidad,
            enfasis : edicionProfesorCtrl.enfasis,
            contrasenna : password
          }


           administradorService.setProfesores(nuevoProfesor)
           .success(function(data){
             console.log(data);

             $mdDialog.show(
               $mdDialog.alert()
               .clickOutsideToClose(true)
               .title(data.msg)
               .textContent('')
               .ariaLabel('Left to right demo')
               .ok('OK')
             );
           edicionProfesorCtrl.nombre = null;
           edicionProfesorCtrl.primerApellido = null;
           edicionProfesorCtrl.segundoApellido = null;
           edicionProfesorCtrl.email = null;
           edicionProfesorCtrl.cursosSeleccionados = null;
           edicionProfesorCtrl.especialidad = null;
           edicionProfesorCtrl.enfasis = null;

           init();

           if (data.success == true) {

             var tempUsuario = {
               nombre : nuevoProfesor.nombre,
               correo : nuevoProfesor.email,
               contrasenna : nuevoProfesor.contrasenna,
               tipo : 'Profesor',
               acceso : nuevoProfesor.estado
             }

             inicioSesionService.setUsuarios(tempUsuario);

           }

         })


        }else {
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

      edicionProfesorCtrl.update = function (profesorObj){

        edicionProfesorCtrl.id = profesorObj._id;
        edicionProfesorCtrl.nombreE = profesorObj.nombre;
        edicionProfesorCtrl.primerApellidoE = profesorObj.primerApellido;
        edicionProfesorCtrl.segundoApellidoE = profesorObj.segundoApellido;
        edicionProfesorCtrl.emailE = profesorObj.email;
        edicionProfesorCtrl.especialidadE = profesorObj.especialidad;
        edicionProfesorCtrl.enfasisE = profesorObj.enfasis;
        edicionProfesorCtrl.cursosSeleccionadosE = profesorObj.cursos;
        edicionProfesorCtrl.estadoE = profesorObj.estado;

      }

      edicionProfesorCtrl.edit = function (valido){

        if (valido) {

          var nuevoProfesor = {
            _id: edicionProfesorCtrl.id,
            nombre : edicionProfesorCtrl.nombreE,
            primerApellido : edicionProfesorCtrl.primerApellidoE,
            segundoApellido : edicionProfesorCtrl.segundoApellidoE,
            email : edicionProfesorCtrl.emailE,
            estado : edicionProfesorCtrl.estadoE,
            cursos : edicionProfesorCtrl.cursosSeleccionadosE,
            especialidad : edicionProfesorCtrl.especialidadE,
            enfasis : edicionProfesorCtrl.enfasisE
          }



          administradorService.updateProfesores(nuevoProfesor)
          .success(function(data){
          console.log(data);

          $mdDialog.show(
            $mdDialog.alert()
            .clickOutsideToClose(true)
            .title(data.msg)
            .textContent('')
            .ariaLabel('Left to right demo')
            .ok('OK')
          );

          init();

        })

        $('#showEditForm').modal('hide');


      }else {
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
