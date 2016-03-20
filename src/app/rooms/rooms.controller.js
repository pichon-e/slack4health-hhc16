(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .controller('RoomsController', RoomsController);

  /** @ngInject */
  function RoomsController($rootScope, $scope, $localStorage, $state) {
    console.log($rootScope);
    $scope.$storage = $localStorage;
    if (!$scope.$storage.patient) {
      $scope.$storage.patient = "";
    }

    $scope.setPatient = function($patient) {
      $rootScope.title = $patient.patient.first_name + " " + $patient.patient.last_name;
      $scope.$storage.patient = $patient.first_name + " " + $patient.last_name;
      $state.go("chat");
    }

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
    }
   ]
  }
})();
