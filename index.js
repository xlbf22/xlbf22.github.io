var app = angular.module("myApp", []);
app.controller('myCtrl', function($scope) {
     $scope.data = 1;
     $scope.sayHello = function() {
          $scope.data = $scope.data + 1;
     };
});
