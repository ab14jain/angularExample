/// <reference path="angular.js" />
var myApp = angular.module("myModule", []);
myApp.controller("myController", function ($scope, $http, $log, stringService, $location, $anchorScroll) {

    var employees = [
        { name: "abhishek", age: "24", gender: "male" },
        { name: "sita", age: "27", gender: "female" },
        { name: "ram", age: "34", gender: "male" }
    ]
    $scope.currentView = "list.html";
    $scope.employees = employees;
    $scope.greeting = "Hello module 2";

    $http.get("https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc")
                      .then(function (response) {
                          $scope.topGits = response.data.items;
                          $log.info(response);
                      });

    $scope.output = stringService.processString("MyFav HomePage");

    $scope.scrollTo = function (location) {
        $location.hash(location);
        $anchorScroll();
    }
});