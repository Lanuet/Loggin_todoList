/**
 * Created by nguye on 09/11/2016.
 */

mainApp.controller('HomeController', function ($scope, $location, $rootScope, $cookieStore) {
    $scope.todos = [];
    if (localStorage['todos']) {
        $scope.todos = JSON.parse(localStorage.getItem("todos"));
        // console.log($scope.todos)
        // localStorage.getItem('todos');
    }
    $rootScope.state = $cookieStore.get('state');
    if (!$rootScope.state) {
        $location.path('/');
    }
    //logout
    $rootScope.logout = function () {
        $rootScope.state = {};
        $cookieStore.remove('state');
        $location.path('/');
    };
// add new items
    $scope.addTodo = function () {
        if (!$scope.text) {
            alert("You must enter somethings");
        }
        else if ($scope.text == "") {
            alert("You must enter somethings");
        }
        else {
            $scope.todos.push({
                text: $scope.todoText,
                done: false
            });
            $scope.todoText = ''; //clear the input after adding
            localStorage.setItem('todos', JSON.stringify($scope.todos));
        }
    };


    $scope.deleted = function (index) {
        // console.log("1");
        $scope.todos.splice(index, 1);
        localStorage.removeItem(index);
        jsonToLocalStorage($scope.todos);
    }
    function jsonToLocalStorage(todos) {
        var jsonTodo = angular.toJson(todos);

        if (jsonTodo != 'null') {
            localStorage.setItem("todos", jsonTodo);
        } else {
            alert("Invalid JSON!");
        }
    }
//mark all checked

    //count
    $scope.remaining = function () {
        var count = 0;
        angular.forEach($scope.todos, function (todo) {
            count += todo.done ? 0 : 1;
        });
        return count;
    };

    $scope.archive = function () {
        var oldTodos = $scope.todos;
        $scope.todos = [];
        angular.forEach(oldTodos, function (todo) {
            if (!todo.done)
                $scope.todos.push(todo);
        });
        localStorage.setItem('todos', JSON.stringify($scope.todos));
    };
});

