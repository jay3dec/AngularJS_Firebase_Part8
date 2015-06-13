'use strict';

angular.module('myApp.test', ['ngRoute','firebase'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/test', {
    templateUrl: 'test/test.html',
    controller: 'TestCtrl'
  });
}])

.controller('TestCtrl', ['$scope',function($scope) {

var login={};

$scope.test = function(){
	login.loading = true;
}

$scope.login=login;
  
}])
.directive('uiLadda', [
    function() {
        return {
            link: function(scope, element, attrs) {
                var Ladda = window.Ladda;
                var ladda = Ladda.create(element[0]);
                // Watching login.loading for change
                scope.$watch(attrs.uiLadda, function(newVal, oldVal) {
                    // if true show loading indicator
                    if (newVal) {
                        ladda.start();
                    } else {
                        ladda.stop();
                    }
                });
            }
        };
    }
]);
