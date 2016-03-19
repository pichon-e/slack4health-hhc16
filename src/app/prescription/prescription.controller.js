(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .controller('PrescriptionController', PrescriptionController);

  /** @ngInject */
  function PrescriptionController($scope) {

    $scope.todos = [
        {
          'name': 'Lettuce',
          'dose': 'Composite'
        },
        {
          'name': 'Spinach',
          'dose': 'Goosefoot'
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
        return (pharmaceuticals._lowername.indexOf(lowercaseQuery) === 0) ||
            (pharmaceuticals._lowertype.indexOf(lowercaseQuery) === 0);
      };

    }

    $scope.addPharmaceuticals = function(){
    	if (self.selectedVegetables.length == 0)
    		return;
    	else
    	{
    		var i = 0;
    		while (i < self.selectedVegetables.length)
    			$scope.todos.push(self.selectedVegetables[i++]);
    		self.selectedVegetables = [];
    	}

    }

    function loadPharmaceuticals() {
      var pharmaceuticals = [
        {
          'name': 'Broccoli',
          'dose': 'Brassica'
        },
        {
          'name': 'Cabbage',
          'dose': 'Brassica'
        },
        {
          'name': 'Carrot',
          'dose': 'Umbelliferous'
        },
        {
          'name': 'Lettuce',
          'dose': 'Composite'
        },
        {
          'name': 'Spinach',
          'dose': 'Goosefoot'
        }
      ];

      return pharmaceuticals.map(function (pharm) {
        pharm._lowername = pharm.name.toLowerCase();
        pharm._lowertype = pharm.dose.toLowerCase();
        return pharm;
      });
    }
  }
})();

