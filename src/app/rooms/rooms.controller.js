(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .controller('RoomsController', RoomsController);

  /** @ngInject */
  function RoomsController($scope) {
    $scope.rooms = [
    {
      number: "001",
      patient: {
          first_name: "Julie",
          last_name:"Weil",
          picture: "patient1.jpg"
      }
    },
    {
      number: "002",
      patient: {
          first_name: "Alexis",
          last_name:"Dupond",
          picture: "patient2.jpg"
      }
    },
    {
      number: "003"
    },
    {
      number: "004",
      patient: {
          first_name: "Maugane",
          last_name:"Delgrange",
          picture: "patient3.jpg"
      }
    },
    {
      number: "005"
    },
    {
      number: "006",
      patient: {
          first_name: "Julie",
          last_name:"Weil",
          picture: "patient1.jpg"
      }
    },
    {
      number: "007",
      patient: {
          first_name: "Alexis",
          last_name:"Dupond",
          picture: "patient2.jpg"
      }
    },
    {
      number: "008",
      patient: {
          first_name: "Maugane",
          last_name:"Delgrange",
          picture: "patient3.jpg"
      }
    },
   ]
  }
})();
