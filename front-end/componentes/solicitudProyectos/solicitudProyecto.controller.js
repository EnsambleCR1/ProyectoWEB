(function(){
  angular
    .module('myEnsamble')
    .controller('solicitudProyectoController', solicitudProyectoController);
    function solicitudProyectoController(solicitudProyectoService,$location,$scope,$mdDialog,ImagenesService,Upload,$state, $location){ //se inyecta el service userService en el controlador para que se tenga acceso
      //controlador 
      var solicitudProyectoCtrl = this; //binding del controlador con el html, solo en el controlador
      var url='';

      solicitudProyectoCtrl.cloudObj=ImagenesService.getConfiguration();

      function init(){ // función que se llama así misma para indicar que sea lo primero que se ejecute
        solicitudProyectoCtrl.solicitudProyectos = solicitudProyectoService.getSolicitudProyectos();
       
      }init();

      solicitudProyectoCtrl.presave= function(formulario){
        solicitudProyectoCtrl.cloudObj.data.file = document.getElementById("photo").files[0];
        Upload.upload(solicitudProyectoCtrl.cloudObj)
          .success(function(data){
            save(data.url,formulario);
          });
       } 

        var client = filestack.init('ARK9lXB5WRCGe5NtlubYWz');
        $scope.showPicker =  function() {
            client.pick({
            }).then(function(result) {
              urlBio=result.filesUploaded[0].url;
              console.log(result);
                console.log(JSON.stringify(result.filesUploaded))
            });
        };


    function save(url,formulario){
      if (solicitudProyectoCtrl.nombre != null && solicitudProyectoCtrl.cedula != null && solicitudProyectoCtrl.nombreContacto != null && solicitudProyectoCtrl.emailContacto != null && solicitudProyectoCtrl.telefonoContacto != null && solicitudProyectoCtrl.descripcion != null && solicitudProyectoCtrl.industria != null ) {

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
              bitacoras : []
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
          
                 // $state.go('inicio');
          })
            $location.path( "/inicio" );
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
                
          };
      }  
  }
     //se establece un objeto de angular normal

})();
