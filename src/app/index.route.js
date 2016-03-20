(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {

    $stateProvider
      .state('rooms', {
        url: '/',
        templateUrl: 'app/rooms/rooms.html',
        controller: 'RoomsController'
      })
      .state('chat', {
        url: '/chat',
        templateUrl: 'app/chat/chat.html',
        controller: 'ChatController'
      })
      .state('bio', {
        url: '/bio',
        templateUrl: 'app/bio/bio.html',
        controller: 'BioController'
      })
      .state('prescription', {
        url: '/prescription',
        templateUrl: 'app/prescription/prescription.html',
        controller: 'PrescriptionController'
      })
      .state('folder', {
        url: '/folder',
        templateUrl: 'app/folder/folder.html',
        controller: 'FolderController'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
