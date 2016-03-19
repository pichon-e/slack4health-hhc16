(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .controller('ChatController', ChatController);

  /** @ngInject */
  function ChatController($scope) {
    $scope.rooms = [
    {
        name: "Chambre 1",
        patient: {
            first_name: "Bob",
            last_name:"Bobi"
        }
    },
    {
        name: "Chambre 2"
    }]
  }
})();
