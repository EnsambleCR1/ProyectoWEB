(function(){
  angular
    .module('myEnsamble')
    .controller('calendarioController', calendarioController);
    function calendarioController(estudianteService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var calendarioCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        calendarioCtrl.calendarios = estudianteService.getCalendarios();
      }init();

      calendarioCtrl.save = function(){
        var newTarea = {
          fechaEntrega: calendarioCtrl.fechaEntrega,
          nombre: calendarioCtrl.nombre,
          descripcion: calendarioCtrl.descripcion
        }
        estudianteService.setCalendarios(newTarea);
      }
    }
     //se establece un objeto de angular normal

})();
