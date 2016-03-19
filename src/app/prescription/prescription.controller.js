(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .controller('PrescriptionController', PrescriptionController);

  /** @ngInject */
  function PrescriptionController($scope) {
    $scope.medicaments = {
      "medicaments": [
        {
          "name": "Diamicron",
          "dosage": "30mg",
          "forme": "comprimé",
          "posologie": "3-0-0"
        },
        {
          "name": "Januvia",
          "dosage": "100mg",
          "forme": "comprimé",
          "posologie": "1-0-0"
        },
        {
          "name": "Metformine",
          "dosage": "1000mg",
          "forme": "comprimé",
          "posologie": "1-1-1"
        },
        {
          "name": "Tiatec",
          "dosage": "2.5mg",
          "forme": "comprimé",
          "posologie": "1-0-0"
        }
      ]
    };  

  }
})();
