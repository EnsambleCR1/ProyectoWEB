(function(){
  angular
    .module('myEnsamble')
    .controller('estadoProyectoController', estadoProyectoController);
    function estadoProyectoController(solicitudProyectoService,solicitudEstudianteService,administradorService,$mdDialog){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var estadoProyectoCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){

         solicitudProyectoService.getSolicitudProyectos()
          .success(function(data){
            estadoProyectoCtrl.solicitudProyectos = data;
          });

         administradorService.getProfesores()
         .success(function(data){
            estadoProyectoCtrl.profesores = data;
          });

         solicitudEstudianteService.getSolicitudEstudiantes()
         .success(function(data){
            estadoProyectoCtrl.estudiantes = data;
          });

      }init();

      var solicitudEstudiantesAceptados = [];
      var solicitudEstudiantesRechazados = [];

      estadoProyectoCtrl.aceptar = function (pobjEstado,ev){

          confirm = $mdDialog.confirm()
        .title('¿Está seguro de que desea aceptar el proyecto seleccionado?')
        .textContent('')
        .ariaLabel('Lucky day')
        .targetEvent(ev)
        .ok('Sí')
        .cancel('No');


         $mdDialog.show(confirm).then(function() {
           var nuevoProyecto = {
              nombre: pobjEstado.nombre,
              cedula: pobjEstado.cedula,
              nombreContacto: pobjEstado.nombreContacto,
              emailContacto: pobjEstado.emailContacto,
              telefonoContacto: pobjEstado.telefonoContacto,
              descripcion: pobjEstado.descripcion,
              industria: pobjEstado.industria,
              photo: pobjEstado.photo,
              bio:pobjEstado.bio,
              estado : 'Aceptado',
              bitacoras : [],
              profesores : [],
              estudiantes : [],
              _id : pobjEstado._id

            }
          administradorService.setSolicitudProyectosCambio(nuevoProyecto)
            .success(function(data){
              init();
            })

            $mdDialog.show(
              $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('¡El proyecto fue aceptado exitosamente!')
              .textContent('')
              .ariaLabel('Left to right demo')
              .ok('OK')
            );
          });

       }

      estadoProyectoCtrl.agregarPersonal = function(){
        var newPersonal = {
          nombreProfesor : estadoProyectoCtrl.nombreProfesor,
          nombreEstudiante : estadoProyectoCtrl.nombreEstudiante
        }
        console.log(newPersonal);
        administradorService.setPersonal(newPersonal);

      }


      estadoProyectoCtrl.rechazar = function(pobjEstado,ev){

        confirm = $mdDialog.confirm()
        .title('¿Está seguro de que desea rechazar el proyecto seleccionado?')
        .textContent('')
        .ariaLabel('Lucky day')
        .targetEvent(ev)
        .ok('Sí')
        .cancel('No');

          $mdDialog.show(confirm).then(function() {
           var nuevoProyecto = {
              nombre: pobjEstado.nombre,
              cedula: pobjEstado.cedula,
              nombreContacto: pobjEstado.nombreContacto,
              emailContacto: pobjEstado.emailContacto,
              telefonoContacto: pobjEstado.telefonoContacto,
              descripcion: pobjEstado.descripcion,
              industria: pobjEstado.industria,
              photo: pobjEstado.photo,
              bio:pobjEstado.bio,
              estado : 'Rechazado',
              _id : pobjEstado._id

            }
          administradorService.setSolicitudProyectosCambio(nuevoProyecto)
            .success(function(data){
              init();
            })

            $mdDialog.show(
              $mdDialog.alert()
              .clickOutsideToClose(true)
              .title('¡El proyecto fue rechazado exitosamente!')
              .textContent('')
              .ariaLabel('Left to right demo')
              .ok('OK')
            );
          });
      }

      estadoProyectoCtrl.guardarCambios = function(pobjEstado){

        var newBitacora = {
          inicio : estadoProyectoCtrl.inicio,
          final : estadoProyectoCtrl.final,
          costo : estadoProyectoCtrl.costo,
          remitente : estadoProyectoCtrl.remitente,
          comentario : estadoProyectoCtrl.comentario,
          _id : pobjEstado._id


        }
        pobjEstado.bitacoras.push( newBitacora);
        administradorService.setSolicitudProyectosCambio(pobjEstado);
        console.log(newBitacora);


      }
      // estadoProyectoCtrl.asignarProfesor = function(pobjEstado){
      //   var newProfesor = {
      //       tipo : 'profesor',
      //       estado : 'Asignado',
      //       _id : pobjEstado._id
      //   }
      //    pobjEstado.profesores.push( newProfesor);
      //   administradorService.setSolicitudProyectosCambio(pobjEstado);
      //   console.log(newProfesor);

      // }

      // estadoProyectoCtrl.asignarEstudiante = function(pobjEstado){
      //   var newEstudiante = {
      //       // nombreEstudiante: pobjEstado.nombreEstudiante,
      //       // apellido1Estudiante: pobjEstado.apellido1Estudiante,
      //       // apellido2Estudiante: pobjEstado.apellido2Estudiante,
      //       // genero: pobjEstado.genero,
      //       // emailEstudiante: pobjEstado.emailEstudiante,
      //       // nivelAcademico: pobjEstado.nivelAcademico,
      //       // carreraSeleccionada: pobjEstado.carreraSeleccionada,
      //       // cursoSeleccionado: pobjEstado.cursoSeleccionado,
      //       // foto : pobjEstado.pFoto,
      //       // urlCurriculum : pobjEstado.pCurriculum,
      //       tipo : 'estudiante',
      //       _id : pobjEstado._id
      //   }
      //    pobjEstado.bitacoras.push( newEstudiante);
      //   administradorService.setSolicitudProyectosCambio(pobjEstado);
      //   console.log(newEstudiante);

      // }

      estadoProyectoCtrl.guardarCambios = function(pobjEstado){

        var newBitacora = {
          inicio : estadoProyectoCtrl.inicio,
          final : estadoProyectoCtrl.final,
          costo : estadoProyectoCtrl.costo,
          remitente : estadoProyectoCtrl.remitente,
          comentario : estadoProyectoCtrl.comentario,
          _id : pobjEstado._id


        }
        pobjEstado.bitacoras.push( newBitacora);
        administradorService.setSolicitudProyectosCambio(pobjEstado);
        console.log(newBitacora);


      }
    }
     //se establece un objeto de angular normal

})();
