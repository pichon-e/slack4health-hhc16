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
      });

    $urlRouterProvider.otherwise('/');
  }

})();
