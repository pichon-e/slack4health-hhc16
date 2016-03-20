(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .controller('BioController', BioController);

  /** @ngInject */
  function BioController($scope, $mdDialog, $state) {

  	  // PDF reader

    $scope.changeToLeft = function() {
      $state.go('prescription');
    }

    $scope.changeToRight = function() {
      $state.go('chat');
    }

    $scope.showPdf = function (ev, path) {
      $scope.pdfUrl = path;
      $mdDialog.show({
        controller: function ($scope, pdfDelegate, $mdDialog) {
          $scope.cancel = function() {
            $mdDialog.cancel();
          };
          $scope.pdfHandle = pdfDelegate.$getByHandle('pdfView');
        },
        scope: $scope.$new(),
        templateUrl: "app/chat/pdfDialog.tmpl.html",
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true,
        fullscreen: true
      });
    };

  }
})();
