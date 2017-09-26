app.controller('GroupShowCtrl', function ($scope, $rootScope, $stateParams, ionicMaterialMotion, $state, $firebaseObject, currentAuth) {
	var groupId = $stateParams.id;
	if(groupId == ""){
		$state.go("app.groups_list");
	}else{
		loadInformation();
	}
	function loadInformation(){
		var ref = firebase.database().ref(`groups/${groupId}`);
		var group = $firebaseObject(ref);
		group.$loaded()
		.then(function() {
			$scope.group = group;
			$rootScope.groupIdSelected = group.id;
		})
	}
});