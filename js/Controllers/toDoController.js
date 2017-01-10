/**
 * Created by RAZZKO on 10.01.2017.
 */

app.controller('toDoController', ['$scope', function ($scope) {
    $scope.tasks = [];
    $scope.editIndex = false;
    $scope.sortType = '0';
    $scope.sortReverse = false;
    $scope.addTask = function () {
        if( $scope.editIndex === false){
            $scope.tasks.push({task: $scope.task, done: false})
        } else {
            $scope.tasks[$scope.editIndex].task = $scope.task;
        }
        $scope.editIndex = false;
        $scope.task = '';
    }

    $scope.doneTask = function (index) {
        $scope.tasks[index].done = true;
    }
    $scope.unDoneTask = function (index) {
        $scope.tasks[index].done = false;
    }
    $scope.deleteTask = function (index) {
        $scope.tasks.splice(index, 1);
    }
    $scope.todoSortable = {
        cursor : "pointer"
    }

}])