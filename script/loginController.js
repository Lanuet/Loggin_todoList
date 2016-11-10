/**
 * Created by nguye on 09/11/2016.
 */
mainApp.controller('LoginController', function ($scope, $location, $rootScope, $cookieStore) {
    $rootScope.state = $cookieStore.get('state');
    if ($rootScope.state) {
        $location.path('/home');
    }

    $scope.login = function () {
        if ($scope.userName == 'test' && $scope.password == 'test') {
            $rootScope.state = {
                currentState: true
            };
            $cookieStore.put('state', $rootScope.state);
            $location.path('/home');
        }
        else alert("password or username is incorrect");
    };


});