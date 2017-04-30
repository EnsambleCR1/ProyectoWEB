(function(){
  angular
    .module('myEnsamble')
    .controller('estadoProyectoController', estadoProyectoController);
    function estadoProyectoController(solicitudProyectoService,administradorService,estadoEstudianteService,$mdDialog){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var estadoProyectoCtrl = this; //binding del controlador con el html, solo en el controlador

      function init(){ 

         solicitudProyectoService.getSolicitudProyectos()
          .success(function(data){
            estadoProyectoCtrl.solicitudProyectos = data; 
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
              estado : 'aceptado',
              bitacoras : [],
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
              estado : 'rechazado',
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
      // estadoProyectoCtrl.guardarCambios = function(pobjProyecto){
      //   var newBitacora = {
      //     inicio : estadoProyectoCtrl.inicio,
      //     final : estadoProyectoCtrl.final,
      //     costo : estadoProyectoCtrl.costo,
      //     descripcion : estadoProyectoCtrl.descripcion,
      //     industria : estadoProyectoCtrl.industria
      //   }
      //   pobjProyecto.bitacoras.push( newBitacora);
      //   administradorService.setCambios(pobjProyecto);
      //   console.log(newBitacora);
      // }
      //  aceptadoCtrl.agregarPersonal = function(){
      //   var newPersonal = {
      //     nombreProfesor : aceptadoCtrl.nombreProfesor,
      //     nombreEstudiante : aceptadoCtrl.nombreEstudiante
      //   }
      //   console.log(newPersonal);
      //   proyectosService.setPersonal(newPersonal);

      // }

      // aceptadoCtrl.guardarCambios = function(pobjProyecto){
      //   var newBitacora = {
      //     inicio : aceptadoCtrl.inicio,
      //     final : aceptadoCtrl.final,
      //     costo : aceptadoCtrl.costo,
      //     descripcion : aceptadoCtrl.descripcion,
      //     industria : aceptadoCtrl.industria
      //   }
      //   pobjProyecto.bitacoras.push( newBitacora);
      //   proyectosService.setCambios(pobjProyecto);
      //   console.log(newBitacora);
      // }
    }
     //se establece un objeto de angular normal

})();
