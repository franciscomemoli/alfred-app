app.controller('GroupShowCtrl', function ($scope, $stateParams, ionicMaterialMotion, $state, $firebaseObject, currentAuth) {
	var groupId = $stateParams.id;
	var ref = firebase.database().ref(`groups/${groupId}`);
	var group = $firebaseObject(ref);
	group.$loaded()
	.then(function() {
		$scope.group = group;
	})
});