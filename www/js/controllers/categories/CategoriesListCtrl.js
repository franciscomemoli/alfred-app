app.controller('CategoriesListCtrl', function ($scope, $rootScope, $stateParams, ionicMaterialMotion, $state, $firebaseArray) {
	if($stateParams.groupId == undefined){
		$state.go("app.groups_list");
	}else{
		loadInformation();
	}
	function loadInformation(){
		var groupId = $stateParams.groupId;
		$rootScope.groupIdSelected = groupId;
		var ref = firebase.database().ref(`groups_categories/${groupId}/`);
		//Guarda todo el array pisando
		//ref.set({categories: JSON.parse(angular.toJson($scope.categories))});
		var categories = $firebaseArray(ref);
		categories.$loaded()
		.then(function() {
		    document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
			$scope.categories = categories;
		    setTimeout(function() {
		        ionicMaterialMotion.blinds(); // ionic.material.motion.blinds(); //ionicMaterialMotion
		    }, 100);
		})
		.catch(function(err) {
			console.error(err);
		});
		$scope.editCategory = function (category){
			$state.go("app.categories_edit",{id: category._id});
		}
	}

});
