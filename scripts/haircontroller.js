app.controller('HairController', ['$scope', '$http', 'ReviewService',function($scope, $http, ReviewService){
  $scope.hairSubsectionH = $scope.currentHAIR == 6;
  $scope.hairSubsectionA = $scope.currentHAIR == 7;
  $scope.hairSubsectionI = $scope.currentHAIR == 8;
  $scope.hairSubsectionR = $scope.currentHAIR == 9;

}]);
