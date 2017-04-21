(function(){
  angular
    .module('myEnsamble')
    .controller('estadoEstudianteController', estadoEstudianteController);
    function estadoEstudianteController(administradorService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var estadoEstudianteCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
       estadoEstudianteCtrl.estadoEstudiante = administradorService.getEstadoEstudiante();
       // estadoEstudianteCtrl.cambios = administradorService.getCambios();

      }init();

      estadoEstudianteCtrl.save = function (){
        var newProyectos = {
          nombre: estadoEstudianteCtrl.nombre,
          cedula: estadoEstudianteCtrl.cedula,
          nombreContacto: estadoEstudianteCtrl.nombreContacto,
          emailContacto: estadoEstudianteCtrl.emailContacto,
          telefonoContacto: estadoEstudianteCtrl.telefonoContacto,
          descripcion: estadoEstudianteCtrl.descripcion,
          industria: estadoEstudianteCtrl.industria,
          bitacoras:[],
          id: 0,
          estado : 'pendiente'

        }
        administradorService.setProyectos(newProyectos);
        console.log(newProyectos);
      }

      estadoEstudianteCtrl.aceptar = function(pobjProyecto){
        console.log(pobjProyecto);
        pobjProyecto.estado = 'aceptado';
        administradorService.setSolicitudAceptado(pobjProyecto);
        // verProyectoService.setAceptado(pobjProyecto);
      }
      estadoEstudianteCtrl.rechazado = function(pobjProyecto){
        //console.log(pobjProyecto);
        pobjProyecto.estado = 'rechazado';
        administradorService.setSolicitudRechazado(pobjProyecto);
      }
      // estadoEstudianteCtrl.guardarCambios = function(pobjProyecto){
      //   var newBitacora = {
      //     inicio : estadoEstudianteCtrl.inicio,
      //     final : estadoEstudianteCtrl.final,
      //     costo : estadoEstudianteCtrl.costo,
      //     descripcion : estadoEstudianteCtrl.descripcion,
      //     industria : estadoEstudianteCtrl.industria
      //   }
      //   pobjProyecto.bitacoras.push( newBitacora);
      //   administradorService.setCambios(pobjProyecto);
      //   console.log(newBitacora);
      // }
    }
     //se establece un objeto de angular normal

})();