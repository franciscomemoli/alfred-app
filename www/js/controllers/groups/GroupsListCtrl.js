app.controller('GroupsListCtrl', function ($scope, $stateParams, ionicMaterialMotion, $state, $firebaseObject, currentAuth) {
	var ref = firebase.database().ref(`users/${currentAuth.uid}/groups`);
	//Guarda todo el array pisando
	//ref.set({categories: JSON.parse(angular.toJson($scope.categories))});
	var groups = $firebaseObject(ref);
	groups.$loaded()
	.then(function() {
		debugger
	    document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
	    setTimeout(function() {
	        ionicMaterialMotion.blinds(); // ionic.material.motion.blinds(); //ionicMaterialMotion
	    }, 100);

		console.log($scope.groups);
	})
	.catch(function(err) {
		console.error(err);
	});
	$scope.editCategory = function (category){
		$state.go("app.categories_edit",{id: category._id});
	}

});