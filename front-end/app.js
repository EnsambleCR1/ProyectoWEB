(function(){
  angular.module('myEnsamble', ['ui.router','ngMaterial','ngFileUpload', 'ngMessages', 'ngStorage', 'ui-notification'])
  .config(function(NotificationProvider) {
        NotificationProvider.setOptions({
            delay: 10000,
            startTop: 70,
            startRight: 10,
            verticalSpacing: 20,
            horizontalSpacing: 20,
            positionX: 'right',
            positionY: 'top'
        });
    });
})();

//https://material.angularjs.org/latest/Theming/03_configuring_a_theme
