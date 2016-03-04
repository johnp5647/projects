var app = angular.module('ECSApp');

app.controller("LoginController", ['$location', '$scope', 'UserService', 'NavbarService', function($location, $scope, UserService, NavbarService) {
	
    $scope.login = function(user) {
        //perform the login
        UserService.login(user).then(function(response) {
            $location.path('/');
			
			UserService.currentUser = response.data.user;
			
        }, function(response) {
            alert('There was a problem logging in');
        });
    }
    
}]);