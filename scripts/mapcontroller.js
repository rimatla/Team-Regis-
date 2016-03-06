app.controller('MapController', ['$scope', '$http', '$location', 'ReviewService', function($scope, $http, $location, ReviewService){
    ReviewService.checkIfLoggedIn();

    $scope.currentReview = ReviewService.currentReview;
    $scope.type = ReviewService.type;
    $scope.submitStatus = ReviewService.submitStatus;
    //var getMyReview

    $scope.empSubmit = function() {
        console.log("empSubmit function hit");

        var stateToSend = {
            regisId: $scope.currentReview.empInfo.RegisId,
            ReviewStatus: 3
        };

        console.log("stateToSend", stateToSend);
        $http.post('/updateData/changeState', stateToSend).then(function(response){
            if(response.status == 200){
                ReviewService.updateMyReviewStatuses();
                $location.path('/');
            }
        });
    }

    $scope.leaderSubmitSendToEmp = function() {
        console.log("leaderSubmitSendToEmp function hit");

        var stateToSend = {
            regisId: $scope.currentReview.empInfo.RegisId,
            ReviewStatus: 5
        };

        console.log("stateToSend", stateToSend);
        $http.post('/updateData/changeState', stateToSend).then(function(response){
            if(response.status == 200){
                $location.path('/');
            }
        });
    }

    $scope.leaderSubmitForSignatures = function() {
        console.log("leaderSubmitForSignatures function hit");

        var stateToSend = {
            regisId: $scope.currentReview.empInfo.RegisId,
            ReviewStatus: 6
        };

        console.log("stateToSend", stateToSend);
        $http.post('/updateData/changeState', stateToSend).then(function(response){
            if(response.status == 200){
                $location.path('/');
            }
        });
    }

}]);
