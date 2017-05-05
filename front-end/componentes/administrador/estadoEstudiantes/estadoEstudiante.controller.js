(function(){
  angular
    .module('myEnsamble')
    .controller('estadoEstudianteController', estadoEstudianteController);
    function estadoEstudianteController(solicitudEstudianteService,administradorService,$scope, $mdDialog, inicioSesionService){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador
      var estadoEstudianteCtrl = this; //binding del controlador con el html, solo en el controlador


      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
       //estadoEstudianteCtrl.estadoEstudiantes = administradorService.getEstadoEstudiante();
     //  estadoEstudianteCtrl.cambiosEstadoEstudiantes = administradorService.getCambiosEstadoEstudiantes();
       solicitudEstudianteService.getSolicitudEstudiantes().success(function(data){estadoEstudianteCtrl.solicitudEstudiantes = data; });

      }init();

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


          var specials = '!@#$%^&*()_+{}:"<>?\|[];\',./`~';
          var lowercase = 'abcdefghijklmnopqrstuvwxyz';
          var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
          var numbers = '0123456789';

          var all = specials + lowercase + uppercase + numbers;

          String.prototype.pick = function(min, max) {
          var n, chars = '';

          if (typeof max === 'undefined') {
          n = min;
          } else {
          n = min + Math.floor(Math.random() * (max - min));
          }

          for (var i = 0; i < n; i++) {
          chars += this.charAt(Math.floor(Math.random() * this.length));
          }

          return chars;
          };


          // Credit to @Christoph: http://stackoverflow.com/a/962890/464744
          String.prototype.shuffle = function() {
          var array = this.split('');
          var tmp, current, top = array.length;

          if (top) while (--top) {
          current = Math.floor(Math.random() * (top + 1));
          tmp = array[current];
          array[current] = array[top];
          array[top] = tmp;
          }

          return array.join('');
          };

          var password = (specials.pick(1) + lowercase.pick(1) + uppercase.pick(1) + all.pick(3, 10)).shuffle();




        var  nuevoUsuario = {
          nombre: pobjEstado.nombreEstudiante,
          correo: pobjEstado.emailEstudiante,
          contrasenna : password,
          tipo : 'Estudiante',
          foto : pobjEstado.foto
        }


        inicioSesionService.setUsuarios(nuevoUsuario)
        .success(function(data){
          console.log(data);
        })

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


    estadoEstudianteCtrl.asignarProyecto = function(pobjEstado){
      var nuevoEstudianteAceptado = {
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
        administradorService.setAsignarEstudianteProyecto(nuevoEstudianteAceptado)
        .success(function(data){
          console.log(data);
        init();
       })

    }


}
})();
