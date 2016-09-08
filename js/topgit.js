var myApp = angular.module("myModule", []);
myApp.controller("myController", function($scope){
	$scope.message = "This is angular JS";
	
	var employees = [
					 {
					 	name : "Abhishek", dob : "14/08/2016", gender : "Male", salary : "64789"
					 },
					 
					 {
					 	name : "Sita", dob : "29/04/2016", gender : "Female", salary : "13409"
					 },
					 
					 {
					 	name : "Ram", dob : "13/07/2016", gender : "Male", salary : "16400"
					 },
					 
					 {
					 	name : "Vaibhav", dob : "19/02/2016", gender : "Male", salary : "43789"
					 },
					 
					 {
					 	name : "Soha", dob : "24/03/2016", gender : "Female", salary : "45820"
					 }

	];
	
	var technologies = [
					 {
					 	name : "ASP.Net", likes: 0, dislikes : 0
					 },
					 
					 {
					 	name : "Java", likes: 0, dislikes : 0
					 },
					 
					 {
					 	name : "JavaScript", likes: 0, dislikes : 0
					 },
					 
					 {
					 	name : "SQL", likes: 0, dislikes : 0
					 },
					 
					 {
					 	name : "Angular JS", likes: 0, dislikes : 0
					 }

	];

	
	$scope.employees = employees;
	$scope.technologies = technologies;
	$scope.rowLimit = 3;
	$scope.sortBy = "name";
	$scope.sortClass = "";
	$scope.sortColumn = "";
	$scope.sorted = false;
	
	$scope.incrementLike = function(technology){
	
		technology.likes++;
	}
	
	$scope.incrementDislike = function(technology){
	
		technology.dislikes++;
	}
	
	$scope.sortByColumn = function(name){
		
		if($scope.sortColumn != name){			
			$scope.sortColumn = name;
			$scope.sorted = true;			
		}
		else if($scope.sortColumn == name){		
			$scope.sortColumn = "-" + name;
			$scope.sorted = false;
		}	
	}
	
	$scope.getsortClass = function(name){
		
		if($scope.sortColumn == name || $scope.sortColumn == ("-" + name)){		
			return $scope.sorted ? "arrow-up" : "arrow-down";
		} 
		else{		
			return "";
		}	
	}

	
	
})






















