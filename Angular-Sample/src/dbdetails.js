/**
 * 
 */
var app = angular.module('mainApp', []);

app.controller('table', ['$scope', '$http', function($scope, $http) {
	$http.get('http://localhost:8080/getAllBics')
	.then(successCallback, errorCallback);
	
	function successCallback(response) {
		console.log(response.data);
		$scope.records = response.data;
	}
	function errorCallback(response) {
		console.log(response);
		alert('Error Occured Code:' + response.status);
	}
}]);