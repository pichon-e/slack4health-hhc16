(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .controller('ChatController', ChatController);

  /** @ngInject */

  function ChatController($scope, $mdDialog, $filter, $localStorage) {
    $scope.$storage = $localStorage;
    if (!$scope.$storage.messages) {
      $scope.$storage.messages = [];
    }

    var client = XMPP.createClient({
      jid: 'user1@localhost',
      password: 'user1',
      transport: 'websocket',
      wsURL: 'ws://localhost:5280/websocket'
    });

    client.on('session:started', function () {
      client.getRoster();
      client.sendPresence();
    });

    client.on('chat', function(msg) {
      $scope.messages.push({
        avatar: '../assets/images/sample-avatar2.png',
        date: '19/03/2016 : 16h58',
        job: 'Infirmier(e)',
        name: 'Nathalie DUPOND',
        content: msg.body
      });
      $scope.$apply();
    });

    client.connect();

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
    }
      ];

    $mdDialog.show({
      controller: ChatController,
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
    };

    var avatarDr = '../assets/images/sample-avatar.jpg';
    var avatarNurse = '../assets/images/sample-avatar2.png';

    $scope.test = false;

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
    ]
    $scope.messages = $scope.messages.concat($scope.$storage.messages);

    $scope.messagePost = "";

    $scope.sendMessage = function() {
      client.sendMessage({
        from: 'user1@localhost',
        to: 'user2@localhost',
        body: $scope.messagePost
      });
      var newMessage = {
        avatar: avatarDr,
        date: $filter('date')(new Date(), "dd/MM/yyyy : HH'h'mm"),
        job: 'Médecin',
        name: 'Frédéric HOUSE',
        content: $scope.messagePost,
        me:false
      };
      $scope.messages.push(newMessage);
      $scope.$storage.messages.push(newMessage);
      $scope.messagePost = "";
    }
}
})();
