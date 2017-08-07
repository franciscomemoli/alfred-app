app.controller('CategoriesEditCtrl', function ($scope, $stateParams, ionicMaterialInk) {
	$scope.save = function(category){
		ref.update(category);
	}
	var categoriesRef = firebase.database().ref("categories");
	$scope.category = {};
	if($stateParams.id){
		var ref = firebase.database().ref("categories/"+$stateParams.id);
		return ref.once('value').then(function(snapshot) {
		  $scope.category = snapshot.val();
		});
	}else{
		var newCategoriesRef = categoriesRef.push();
		$scope.category._id = newCategoriesRef.key;
		var ref = firebase.database().ref("categories/"+newCategoriesRef.key);
	}
});