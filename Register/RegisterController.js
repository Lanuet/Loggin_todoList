/**
 * Created by nguye on 11/11/2016.
 */
mainApp.controller('RegisterController', function ($scope, $location) {
    $scope.profile = [];
    if (localStorage['profile']) {
        $scope.profile = JSON.parse(localStorage.getItem("profile"));
    }
    $scope.register = function () {
        // alert("1");
        $scope.profile.push({
            username: $scope.username,
            email: $scope.email,
            password: $scope.password
        });
        localStorage.setItem('profile', JSON.stringify($scope.profile));
        alert("done");
        $location.path('/');
    }
});