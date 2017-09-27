app.controller('CategoriesEditCtrl', function ($scope, $stateParams, ionicMaterialInk) {
	var groupId = $stateParams.groupId;
	var id = $stateParams.id;
	$scope.save = function(category){
		ref.update(category);
	}
	var categoriesRef = firebase.database().ref(`groups_categories/${groupId}/${$stateParams.id}`);
	$scope.category = {};
	if($stateParams.id){
		var ref = firebase.database().ref(`groups_categories/${groupId}/${id}`);
		return ref.once('value').then(function(snapshot) {
		  $scope.category = snapshot.val();
		});
	}else{
		var newCategoriesRef = categoriesRef.push();
		$scope.category._id = newCategoriesRef.key;
		var ref = firebase.database().ref(`groups_categories/${groupId}/${newCategoriesRef.key}`);

	}
});