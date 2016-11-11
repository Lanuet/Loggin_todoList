/**
 * Created by nguye on 09/11/2016.
 */
mainApp.controller('LoginController', function ($scope, $location, $rootScope, $cookieStore) {
    $rootScope.state = $cookieStore.get('state');
    if ($rootScope.state) {
        $location.path('/home');
    }

    $scope.login = function () {
        $scope.temp = [];
        $scope.temp = JSON.parse(localStorage.getItem("profile"));
        if (localStorage['profile'] != null){
            for (var i = 0; i < $scope.temp.length; i++) {
                if ($scope.username == $scope.temp[i].username && $scope.password == $scope.temp[i].password) {
                    $rootScope.state = {
                        currentState: true
                    };
                    $cookieStore.put('state', $rootScope.state);
                    $location.path('/home');
                    break;
                }
                else {
                    alert ("Username or password is not correct");
                }
            }
        }
        else {
            alert ("Username or password is not correct");
        }
    }
    $scope.register = function () {
        $location.path('/register');
    };


});