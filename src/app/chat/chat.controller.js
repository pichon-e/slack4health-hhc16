(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .controller('ChatController', ChatController);

  /** @ngInject */
  function ChatController($scope, $mdDialog, $filter, $localStorage, $mdSidenav, $timeout, $mdToast, $state) {
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

    $scope.goToBio = function() {
      $state.go('bio');
    }

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
          specialization: "Ophtalmologue",
          firstName: "Sylvain",
          lastName: "Courlis",
          photo: "img/sylvainCourlis.jpg"
        },
        {
          specialization: "Kinésithérapeute",
          firstName: "Oskar",
          lastName: "Euskarien",
          photo: "img/oskarEuskarien.jpg"
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
        date: '18/03/2016 : 08h02',
        job: 'Infirmier(e)',
        name: 'Nathalie DUPOND',
        content: 'RAS.',
        me: true
      },
      {
        avatar: avatarDr,
        date: '18/03/2016 : 08h34',
        job: 'Médecin',
        name: 'Frédéric HOUSE',
        content: 'Quelle est la TA du patient ?',
        me:false
      },
      {
        avatar: avatarNurse,
        date: '18/03/2016 : 08h42',
        job: 'Infirmier(e)',
        name: 'Nathalie DUPOND',
        content: 'La TA du patient est à <strong>18/12</strong>.',
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
        name: 'Frederic House',
        content: $scope.messagePost,
        me:false
      };
      var newResponse = {
        avatar: avatarDr,
        date: $filter('date')(new Date(), "dd/MM/yyyy : HH'h'mm"),
        job: 'Médecin généraliste',
        name: 'Michel Lantier',
        content: 'app/chat/ordonnance.pdf',
        me:true
      };
      $scope.newDocMessage.push(newMessage);
      $scope.$storage.messages.push(newMessage);
      $scope.messagePost = "";
      $timeout(function() {
        $scope.newDocMessage.push(newResponse);
        $scope.$storage.messages.push(newResponse);
        $scope.$apply();
      }, 8000);
    };

    function buildToggler(navID) {
      return function() {
        $mdSidenav(navID)
          .toggle()
          .then(function () {});
      }
    }


  // PDF reader

    $scope.showPdf = function (ev, path) {
      $scope.pdfUrl = path;
      if ($scope.pdfUrl === 'app/chat/ordonnance.pdf') {
        $timeout(function() {
          $mdToast.show(
           $mdToast.simple()
             .content('Une nouvelle biologie est arrivée !')
             .position('top right')
             .hideDelay(3000)
           );
        }, 4000)
      }
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
