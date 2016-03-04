var app = angular.module('ECSApp');

app.controller("BadgesController", ['$location', '$scope', 'BadgeService', function($location, $scope, BadgeService) {
	
	$scope.badges = [];
	
	$scope.getBadge = function() {
		BadgeService.getBadges().then(function(response) {
			BadgeService.badges = response;
			$scope.badges = BadgeService.badges;
		});
	}
	
	$scope.getBadge();
	
}]);