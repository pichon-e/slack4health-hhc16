(function() {
  'use strict';

  angular
    .module('slack4healthHhc')
    .controller('ChatController', ChatController);

  /** @ngInject */
 
  function ChatController($scope, $mdDialog) {
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
};
})();