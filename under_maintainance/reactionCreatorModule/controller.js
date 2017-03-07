var listApp = angular.module('listpp', [ 'ui.bootstrap' ]);

function makeid() {
	var text = "";
	var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (var i = 0; i < 5; i++)
		text += possible.charAt(Math.floor(Math.random() * possible.length));

	return text;
}

listApp.controller('userCtrl', function($scope, $http) {

	$scope.inputChemicals = [];
	$scope.addInuputChemicals = function() {
		$scope.inputChemicals.push($scope.newInputChemical);
	}
	$scope.removeInputChemical = function(index) {
		$scope.inputChemicals.splice(index, 1);
	}

	$scope.outputChemicals = [];
	$scope.addOutputChemicals = function() {
		$scope.outputChemicals.push($scope.newOutputChemical);
	}
	$scope.removeOutputChemical= function(index) {
		$scope.outputChemicals.splice(index, 1);
	}

	$scope.observations = [];
	$scope.addObservation = function() {
		$scope.observations.push($scope.newObservation);
	}
	$scope.removeObservation = function(index) {
		$scope.observations.splice(index, 1);
	}

	$scope.catalists = [];
	$scope.addCatalists = function() {
		$scope.catalists.push($scope.newCatalist);
	}
	$scope.removeCatalists = function(index) {
		$scope.catalists.splice(index, 1);
	}





	/** function to add details for products in mysql referecing php * */

	$scope.product_submit = function() {
		$scope.myDashboard = false;
		$scope.myKey = true;
		$scope.reaction_id = makeid();
		$http.post('db.php?action=add_product', {
			'reaction_id' : $scope.reaction_id,
			'input_chemical' : $scope.inputChemicals.toString(),
			'output_chemical' : $scope.outputChemicals.toString(),
			'observation' : $scope.observations.toString(),
			'cataliist' : $scope.catalists.toString()
		}).success(function(data, status, headers, config) {
			alert("Product has been Submitted Successfully");

		})

		.error(function(data, status, headers, config) {
			alert("Error");
		});
	}

	$scope.reactionItems = [];
	$scope.get_reaction = function() {
		$http.get("db.php?action=get_reaction").success(function(data) {
			// $scope.product_detail = data;
			$scope.reactionItems = data;
		});
	}

});