app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);
app.controller('DocumentCtrl', function ($scope, $stateParams, ionicMaterialInk, Auth) {
	$scope.auth = Auth;
    $scope.auth.$onAuthStateChanged(function(firebaseUser) {
    	debugger
      $scope.firebaseUser = firebaseUser;
    });
});