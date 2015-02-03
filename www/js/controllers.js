angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

  .controller('PlaylistsCtrl', function($scope) {
    $scope.playlists = [
      { title: 'Reggae', id: 1 },
      { title: 'Chill', id: 2 },
      { title: 'Dubstep', id: 3 },
      { title: 'Indie', id: 4 },
      { title: 'Rap', id: 5 },
      { title: 'Cowbell', id: 6 }
    ];
  })

  .controller('PaymentsCtrl', function($scope) {
    $scope.paid = [
      { title: 'pReggae', id: 1 },
      { title: 'pChill', id: 2 },
      { title: 'pDubstep', id: 3 },
      { title: 'pIndie', id: 4 },
      { title: 'pRap', id: 5 },
      { title: 'pCowbell', id: 6 }
    ];

    $scope.latest = [
      { title: 'lReggae', id: 1 },
      { title: 'lChill', id: 2 },
      { title: 'lDubstep', id: 3 },
      { title: 'lIndie', id: 4 },
      { title: 'lRap', id: 5 },
      { title: 'lCowbell', id: 6 }
    ];
  })

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
