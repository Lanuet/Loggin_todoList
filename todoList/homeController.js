/**
 * Created by nguye on 09/11/2016.
 */

mainApp.controller('HomeController', function ($scope, $location, $rootScope, $cookieStore) {
    $scope.todos = [];
    $scope.status = "ALL";
    // $scope.allChecked = false;
    if (localStorage['todos']) {
        $scope.todos = JSON.parse(localStorage.getItem("todos"));
    }
    $rootScope.state = $cookieStore.get('state');
    if (!$rootScope.state && !localStorage['profile']) {
        $location.path('/');
    }

// add new items
    $scope.addTodo = function () {
        if (!$scope.todoText) {
            alert("You must enter somethings");
        }
        else if ($scope.todoText == "") {
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
        $scope.todos.splice(index, 1);
        localStorage.removeItem(index);
        localStorage.setItem("todos", angular.toJson(todos));
    }
//mark all checked
    $scope.MarkallChecked = function () {
        for (var i = 0; i < todos.length; i++) {
            $scope.todos[i].done = $scope.allChecked;
        }
    }
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
    $scope.filterCompleted = function (todo) {
        switch ($scope.status) {
            case "ALL":
                return todo;
                break;
            case "ACTIVE":
                return !todo.done;
                break;
            case "COMPLETED":
                return todo.done;
                break;
        }
        return todo.completed;
    };
    //logout
    $rootScope.logout = function () {
        $rootScope.state = {};
        $cookieStore.remove('state');
        $location.path('/');
    };
    $scope.$watch("todos", function (newVal, oldVal) {
        if (newVal !== null && angular.isDefined(newVal) && newVal !== oldVal) {
            // localStorageService.add("todos",angular.toJson(newVal));
            localStorage.setItem('todos', angular.toJson(newVal));
        }
    }, true);
});

