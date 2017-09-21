app.controller('LoginCtrl', function ($scope, $stateParams, ionicMaterialInk, Auth, $state) {
	$scope.auth = Auth;
    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
      $scope.firebaseUser = firebaseUser;
      if(firebaseUser){
      	$state.go("app.groups_list");
      }
    });
});