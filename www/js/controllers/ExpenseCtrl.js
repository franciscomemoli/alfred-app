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
	$scope.expense = {};
	var expenseRef = firebase.database().ref(`groups_expenses/${groupId}/`);
	$scope.submit = function(expense){
		var newExpenseRef = expenseRef.push();
		expense._id = newExpenseRef.key;
		var saveRef = firebase.database().ref(`groups_expenses/${groupId}/${newExpenseRef.key}`);
		saveRef.update(expense);
	}
});