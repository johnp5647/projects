var app = angular.module('ECSApp');

app.controller("ProfileController", ['$location', '$scope', 'ProfileService', 'BadgeService', 'UserService', function ($location, $scope, ProfileService, BadgeService, UserService) {

	$scope.user = null;
	$scope.badges = [];

	$scope.isLoggedIn = function () {
		if (UserService.currentUser === 'null') {
			$location.path('/login');
		} else {
			$scope.user = UserService.currentUser;
			BadgeService.getBadges().then(function (response) {
				BadgeService.badges = response;
				$scope.badges = BadgeService.badges;
				for (var i = 0; i < $scope.badges.length; i++) {
					for (var j = 0; j < $scope.user.badges.length; j++) {
						if ($scope.badges[i]._id === $scope.user.badges[j]._id) {
							$scope.badges.splice(i, 1);
						}
					}
				}
			});
		}
	}

	$scope.isLoggedIn();
	
	$scope.submit = function() {
		ProfileService.submitBadge($scope.user._id, $scope.selected).then(function(response) {
			UserService.currentUser = response;
			$scope.user = UserService.currentUser;
			for (var i = 0; i < $scope.badges.length; i++) {
					for (var j = 0; j < $scope.user.badges.length; j++) {
						if ($scope.badges[i]._id === $scope.user.badges[j]._id) {
							$scope.badges.splice(i, 1);
						}
					}
				}
		});
	}

}]);