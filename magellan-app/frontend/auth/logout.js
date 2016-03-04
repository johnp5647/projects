var app = angular.module('ECSApp');

app.controller("LogoutController", ['$location', '$scope', 'UserService', 'NavbarService', function($location, $scope, UserService, NavbarService) {
	
	$scope.logoff = function() {
		UserService.logout();
		
		$location.path('/');
		
	}
}]);