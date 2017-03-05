
var app = angular.module('app',[]);
app.controller('WerController', ['$scope', function($scope) {

    $scope.taskList = [];

    $scope.submit = function() {
        var taskItem = {
            name: $scope.task;
            check: false;
        }
        $scope.taskList.push(taskItem);
        $scope.task = '';

    }



}])
