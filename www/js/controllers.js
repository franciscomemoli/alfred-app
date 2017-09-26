angular.module('starter.controllers', [])

.controller('AppCtrl', function($rootScope, $scope, $ionicModal, $timeout, $ionicDeploy) {
  $ionicDeploy.check().then(function(snapshotAvailable) {
    if (snapshotAvailable) {
      $ionicDeploy.download().then(function() {
        $ionicDeploy.extract().then(function() {
          $ionicDeploy.load();
        }, function(error) {
        }, function(progress) {
          // Do something with the zip extraction progress
          console.log(progress);
        });
      }, function(error) {
      }, function(progress) {
          if(progress>=100){
            $cordovaSplashscreen.hide()
          }
          console.log(progress);
      });
    }
  }, function(error) {
  });

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
   $scope.groupIdSelected = $rootScope.groupIdSelected;
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
