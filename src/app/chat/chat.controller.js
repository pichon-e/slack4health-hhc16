(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .controller('ChatController', ChatController);

  /** @ngInject */
  function ChatController($scope, $mdDialog, $mdMedia) {
    $scope.showPdf = function (ev) {
    	$mdDialog.show({
    		controller: PdfController,
    		templateUrl: "app/chat/pdfDialog.tmpl.html",
    		parent: angular.element(document.body),
    		targetEvent: ev,
    		clickOutsideToClose: true,
    		fullscreen: true
    	})
    	.then(function(answer) {
    		console.log(answer);
    	}, function() {
    		console.log('Nope !');
    	});
    };
  }

  function PdfController($scope, pdfDelegate, $mdDialog) {
  	$scope.pdfUrl = 'app/chat/ordonnance.pdf';
  	$scope.cancel = function() {
      $mdDialog.cancel();
    };
    var pdfHandle = pdfDelegate.$getByHandle('pdfView');

    $scope.zoomIn = function(ev) {
    	pdfHandle.zoomIn();
    };
    $scope.zoomOut = function(ev) {
    	pdfHandle.zoomOut();
    };
    $scope.prev = function(ev) {
    	pdfHandle.prev();
    };
    $scope.next = function(ev) {
    	pdfHandle.next();
    };
  }
})();
