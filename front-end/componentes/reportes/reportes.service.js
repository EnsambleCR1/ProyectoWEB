(function(){
  angular
  .module('myEnsamble')
  .service('reporteService', reporteService);

  function reporteService($http){

    var publicAPI = {
    };
    return publicAPI; // todas las funciones que sean llamadas por ajax deben estar debajo del return, para que cuando angular corra el script haga el return y devuelva el api , las funciones debajo del return son privadas y se devuelve el api que es el que contiene las funciones



}})();
