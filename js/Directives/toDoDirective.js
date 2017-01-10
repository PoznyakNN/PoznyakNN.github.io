/**
 * Created by RAZZKO on 10.01.2017.
 */

app.directive('todoList', [
    function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/toDoTemplate.html',
        }
    }
]);