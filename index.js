var app = angular.module("myApp", []);
app.controller('myCtrl', ($scope) => {
     $scope.data = 1;
     $scope.sayHello = () => {
          $scope.data = $scope.data + 1;
     };
});
