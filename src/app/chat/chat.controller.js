(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .controller('ChatController', ChatController);

  /** @ngInject */
  function ChatController($scope, $mdDialog, $filter, $localStorage, $mdSidenav, $timeout) {
    $scope.$storage = $localStorage;
    if (!$scope.$storage.messages) {
      $scope.$storage.messages = [];
    }

    if (!$scope.$storage.newDoc) {
      $scope.$storage.newDoc = false;
    }

    // ChatService.getClient1().on('chat', function(msg) {
    //   var newMessage = {
    //     avatar: '../assets/images/sample-avatar2.png',
    //     date: '19/03/2016 : 16h58',
    //     job: 'Médecin généraliste',
    //     name: 'Lou LOU',
    //     content: msg.body,
    //     me: true
    //   };
    //   $scope.newDocMessage.push(newMessage);
    //   $scope.$storage.messages.push(newMessage);
    //   $scope.$apply();
    // });
    //
    // ChatService.getClient2().on('chat', function(msg) {
    //   console.log(msg);
    //   var newMessage = {
    //     avatar: '../assets/images/sample-avatar2.png',
    //     date: '19/03/2016 : 16h58',
    //     job: 'Médecin de service',
    //     name: 'Malo SEKS',
    //     content: msg.body,
    //     me: false
    //   };
    //   $scope.newDocMessage.push(newMessage);
    //   $scope.$storage.messages.push(newMessage);
    //   $scope.$apply();
    // });

    // ChatService.getClient1().connect();
    // ChatService.getClient2().connect();

    $scope.setNewDoc = function() {
      $scope.$storage.newDoc = true;
      $mdDialog.hide();
      close();
    }

    function close() {
      $mdSidenav('right').close()
        .then(function () {
        });
    }

    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };

    $scope.showTabDialog = function(ev) {

      $scope.doctors = [
        {
          specialization: "Généraliste",
          firstName: "Michel",
          lastName: "Lantier",
          photo: "img/michelLantier.jpg"
        },
        {
          specialization: "Dermatologue",
          firstName: "Martine",
          lastName: "Paellaso",
          photo: "img/martinePaellaso.jpg"
        },
        {
          specialization: "Oculiste",
          firstName: "Sylvain",
          lastName: "Courlis",
          photo: "img/sylvainCourlis.jpg"
        },
        {
          specialization: "Kinésithérapeute",
          firstName: "Oskar",
          lastName: "Euskarien",
          photo: "img/oskarEuskarien.jpg"
        },
        {
          specialization: "Généraliste",
          firstName: "Michel",
          lastName: "Lantier",
          photo: "img/michelLantier.jpg"
        },
        {
          specialization: "Dermatologue",
          firstName: "Martine",
          lastName: "Paellaso",
          photo: "img/martinePaellaso.jpg"
        }
      ];

      $mdDialog.show({
        templateUrl: 'app/chat/medecinChoice.tmpl.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        scope: $scope.$new()
      })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
    }

    var avatarDr = '../assets/images/sample-avatar.jpg';
    var avatarNurse = '../assets/images/sample-avatar2.png';

    $scope.test = false;

    $scope.toggleRight = buildToggler('right');

    $scope.messages = [
      {
        avatar: avatarNurse,
        date: '19/03/2016 : 16h58',
        job: 'Infirmier(e)',
        name: 'Nathalie DUPOND',
        content: 'RAS.',
        me: true
      },
      {
        avatar: avatarDr,
        date: '19/03/2016 : 18h34',
        job: 'Médecin',
        name: 'Frédéric HOUSE',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi tempor tincidunt erat, non auctor turpis congue et. Fusce varius arcu a lobortis mattis. Nullam pellentesque sem blandit, imperdiet turpis a, efficitur dolor.',
        me:false
      },
      {
        avatar: avatarNurse,
        date: '19/03/2016 : 21h02',
        job: 'Infirmier(e)',
        name: 'Nathalie DUPOND',
        content: 'Prise de température : 38,9°C, à surveiller.',
        me:true
      }
    ];

    $scope.newDocMessage = [];

    $scope.newDocMessage = $scope.newDocMessage.concat($scope.$storage.messages);

    $scope.messagePost = "";

    $scope.sendMessage = function() {
      // ChatService.sendMessage(1, $scope.messagePost);
      var newMessage = {
        avatar: avatarDr,
        date: $filter('date')(new Date(), "dd/MM/yyyy : HH'h'mm"),
        job: 'Médecin de service',
        name: 'Malo SEKS',
        content: $scope.messagePost,
        me:false
      };
      var newResponse = {
        avatar: avatarDr,
        date: $filter('date')(new Date(), "dd/MM/yyyy : HH'h'mm"),
        job: 'Médecin généraliste',
        name: 'Lou LOU',
        content: 'Je vous envoie ça de suite !',
        me:true
      };
      $scope.newDocMessage.push(newMessage);
      $scope.$storage.messages.push(newMessage);
      $scope.messagePost = "";
      $timeout(function() {
        $scope.newDocMessage.push(newResponse);
        $scope.$storage.messages.push(newResponse);
        $scope.$apply();
      }, 3000);
    }

    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {
        });
      }
    }
  }

  // PDF reader

  // $scope.showPdf = function (ev) {
  //   	$mdDialog.show({
  //   		controller: PdfController,
  //   		templateUrl: "app/chat/pdfDialog.tmpl.html",
  //   		parent: angular.element(document.body),
  //   		targetEvent: ev,
  //   		clickOutsideToClose: true,
  //   		fullscreen: true
  //   	})
  //   	.then(function(answer) {
  //   		console.log(answer);
  //   	}, function() {
  //   		console.log('Nope !');
  //   	});
  //   };

  //   function PdfController($scope, pdfDelegate, $mdDialog) {
  // 	$scope.pdfUrl = 'app/chat/ordonnance.pdf';
  // 	$scope.cancel = function() {
  //     $mdDialog.cancel();
  //   };
  //   var pdfHandle = pdfDelegate.$getByHandle('pdfView');

  //   $scope.zoomIn = function(ev) {
  //   	pdfHandle.zoomIn();
  //   };
  //   $scope.zoomOut = function(ev) {
  //   	pdfHandle.zoomOut();
  //   };
  //   $scope.prev = function(ev) {
  //   	pdfHandle.prev();
  //   };
  //   $scope.next = function(ev) {
  //   	pdfHandle.next();
  //   };
})();
