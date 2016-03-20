(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .controller('PdfController', PdfController);

    function PdfController($scope, pdfDelegate, $mdDialog) {
      $scope.pdfUrl = $scope.pdfUrl;
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.pdfHandle = pdfDelegate.$getByHandle('pdfView');
    }

})();