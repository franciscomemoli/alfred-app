app.controller('CategoriesListCtrl', function ($scope, $stateParams, ionicMaterialMotion, $state, $firebaseObject) {
	var ref = firebase.database().ref("categories");
	//Guarda todo el array pisando
	//ref.set({categories: JSON.parse(angular.toJson($scope.categories))});
	$scope.categories = $firebaseObject(ref);
	$scope.categories.$loaded()
	.then(function() {
	    document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
	    setTimeout(function() {
	        ionicMaterialMotion.blinds(); // ionic.material.motion.blinds(); //ionicMaterialMotion
	    }, 100);

		console.log($scope.categories);
	})
	.catch(function(err) {
		console.error(err);
	});
	$scope.editCategory = function (category){
		$state.go("app.categories_edit",{id: category._id});
	}

});