(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .controller('PrescriptionController', PrescriptionController);

  /** @ngInject */
  function PrescriptionController($scope, $mdDialog) {
    $scope.medicaments = [
        {
          "name": "Diamicron",
          "dosage": "30mg",
          "forme": "comprimé",
          "posologie": "3-0-0"
        }
      ];  

    var self = this;

    self.readonly = false;
    self.selectedItem = null;
    self.searchText = null;
    self.querySearch = querySearch;
    self.pharmaceuticals = loadPharmaceuticals();
    self.selectedVegetables = [];
    self.numberChips = [];
    self.numberChips2 = [];
    self.numberBuffer = '';
    self.autocompleteDemoRequireMatch = true;
    self.transformChip = transformChip;

    /**
     * Return the proper object when the append is called.
     */
    function transformChip(chip) {
    	console.log("test");	
      // If it is an object, it's already a known chip
      if (angular.isObject(chip)) {
        return chip;
      }

      // Otherwise, create a new one
      return { name: chip, type: 'new' }
    }

    /**
     * Search for vegetables.
     */
    function querySearch (query) {

      var results = query ? self.pharmaceuticals.filter(createFilterFor(query)) : [];
      return results;
    }

    /**
     * Create filter function for a query string
     */
    function createFilterFor(query) {
      var lowercaseQuery = angular.lowercase(query);

      return function filterFn(pharmaceuticals) {
        return (pharmaceuticals._lowername.indexOf(lowercaseQuery) === 0);
      };

    }

    function getMedicamentsNames()
    {
      var names = "";
      var i = 0;
      while (i < self.selectedVegetables.length)
      {
        names += self.selectedVegetables[i++].name;
        if (i != self.selectedVegetables.length)
          names += ", ";
      }
      return names;
    }

    $scope.addPharmaceuticals = function(ev){
      if (self.selectedVegetables.length == 0)
        return;
       var confirm = $mdDialog.confirm()
          .title('Voulez vous ajouter ces médicaments ?')
          .content(getMedicamentsNames())
          .ariaLabel('Lucky day')
          .targetEvent(ev)
          .ok('Oui')
          .cancel('Non');

    $mdDialog.show(confirm).then(function() {
        var i = 0;
        while (i < self.selectedVegetables.length)
          $scope.medicaments.push(self.selectedVegetables[i++]);
        self.selectedVegetables = [];
    }, function() {
        self.selectedVegetables = [];
    });
    }

    function loadPharmaceuticals() {
      var pharmaceuticals = [
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
        }
      ];  

      return pharmaceuticals.map(function (pharm) {
        pharm._lowername = pharm.name.toLowerCase();
        return pharm;
      });
    }
  }
})();

