app.controller('ExpenseCtrl', function ($scope, $stateParams, ionicMaterialInk, $firebaseObject) {
	var groupId = $stateParams.id;
	var ref = firebase.database().ref(`groups/${groupId}/accounts/`);
	var accounts = $firebaseObject(ref);
	accounts.$loaded()
	.then(function() {
	    document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
		$scope.accounts = accounts;
	})
	var refCategories = firebase.database().ref(`groups_categories/${groupId}/`);
	var categories = $firebaseObject(refCategories);
	categories.$loaded()
	.then(function() {
	    document.getElementsByTagName('ion-list')[0].className += ' animate-blinds';
		$scope.categories = categories;
	})
});