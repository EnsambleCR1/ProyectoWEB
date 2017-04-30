(function(){
  angular
    .module('myEnsamble')
    .controller('solicitudProyectoController', solicitudProyectoController);
    function solicitudProyectoController(solicitudProyectoService,$location,$scope,$mdDialog,ImagenesService,Upload){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador 
      var solicitudProyectoCtrl = this; //binding del controlador con el html, solo en el controlador
      var url='';

      solicitudProyectoCtrl.cloudObj=ImagenesService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        solicitudProyectoCtrl.solicitudProyectos = solicitudProyectoService.getSolicitudProyectos();
       
      }init();


       var client = filestack.init('ARK9lXB5WRCGe5NtlubYWz');
        $scope.showPicker =  function() {
            client.pick({
            }).then(function(result) {
              urlBio=result.filesUploaded[0].url;
              console.log(result);
                console.log(JSON.stringify(result.filesUploaded))
            });
        };

      solicitudProyectoCtrl.presave= function(){
        solicitudProyectoCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(solicitudProyectoCtrl.cloudObj)
          .success(function(data){
            save(data.url, formulario);
          });
       } 

    function save(url, formulario){
      if (solicitudProyectoCtrl.nombre != null && solicitudProyectoCtrl.cedula != null && solicitudProyectoCtrl.nombreContacto != null && solicitudProyectoCtrl.emailContacto != null && solicitudProyectoCtrl.telefonoContacto != null && solicitudProyectoCtrl.descripcion != null && solicitudProyectoCtrl.industria != null  && url != null && urlBio != null) {
          var newProyecto = {
              nombre: solicitudProyectoCtrl.nombre,
              cedula: solicitudProyectoCtrl.cedula,
              nombreContacto: solicitudProyectoCtrl.nombreContacto,
              emailContacto: solicitudProyectoCtrl.emailContacto,
              telefonoContacto: solicitudProyectoCtrl.telefonoContacto,
              descripcion: solicitudProyectoCtrl.descripcion,
              industria: solicitudProyectoCtrl.industria,
              photo : url,
              bio : urlBio,
              estado : 'pendiente',
            
            }
            solicitudProyectoService.setSolicitudProyectos(newProyecto)
            .success(function(data){
          
             $mdDialog.show(
                $mdDialog.alert()
                  .parent(angular.element(document.querySelector('#popupContainer')))
                  .clickOutsideToClose(true)
                  .title('Cenfotec Software House')
                  .textContent('Gracias por la información prontos nos pondrémos en contacto')
                  .ariaLabel('Alert Dialog Demo')
                  .ok('Cerrar!')
                  .targetEvent()
              )
                 solicitudProyectoCtrl.nombre = null;
                 solicitudProyectoCtrl.cedula = null;
                 solicitudProyectoCtrl.nombreContacto = null;
                 solicitudProyectoCtrl.emailContacto = null;
                 solicitudProyectoCtrl.telefonoContacto = null;
                 solicitudProyectoCtrl.descripcion = null;
                 solicitudProyectoCtrl.industria = null;
                 solicitudProyectoCtrl.photo = null;
                 solicitudProyectoCtrl.bio= null;
            init();

          })
               // $location.path( "/inicio" );
            // $state.go('inicio');
          }else{
              $mdDialog.show(
                $mdDialog.alert()
                  .parent(angular.element(document.querySelector('#popupContainer')))
                  .clickOutsideToClose(true)
                  .title('Cenfotec Software House')
                  .textContent('Favor llenar los espacios en blanco')
                  .ariaLabel('Alert Dialog Demo')
                  .ok('Ok entendido!')
                  .targetEvent()
              );
                 solicitudProyectoCtrl.nombre = null;
                 solicitudProyectoCtrl.cedula = null;
                 solicitudProyectoCtrl.nombreContacto = null;
                 solicitudProyectoCtrl.emailContacto = null;
                 solicitudProyectoCtrl.telefonoContacto = null;
                 solicitudProyectoCtrl.descripcion = null;
                 solicitudProyectoCtrl.industria = null;
                 solicitudProyectoCtrl.photo = null;
                 solicitudProyectoCtrl.bio= null;
          };
      }  
  }
     //se establece un objeto de angular normal

})();
