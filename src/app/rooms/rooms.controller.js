(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .controller('RoomsController', RoomsController);

  /** @ngInject */
  function RoomsController($scope) {
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
    },
    {
      name: "Chambre vide"
    }]
  }
})();
