app.controller('GroupsListCtrl', function ($scope, $rootScope, $stateParams, ionicMaterialMotion, $state, $firebaseObject, currentAuth) {
	var ref = firebase.database().ref(`users/${currentAuth.uid}/groups`);
	//Guarda todo el array pisando
	//ref.set({categories: JSON.parse(angular.toJson($scope.categories))});
	var groups = $firebaseObject(ref);
	groups.$loaded()
	.then(function() {
	    document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
	    setTimeout(function() {
	        ionicMaterialMotion.blinds(); // ionic.material.motion.blinds(); //ionicMaterialMotion
	    }, 100);
		$scope.groups = groups;
	})
	.catch(function(err) {
		console.error(err);
	});
	$scope.selectGroup = function(group){
		$rootScope.groupIdSelected = group.id;
		$state.go("app.group",{id: group.id}) 
	}
	$scope.editCategory = function (category){
		$state.go("app.categories_edit",{id: category._id, groupId: $rootScope.groupIdSelected});
	}

});