var app = angular.module("ECSApp", ["ngRoute", "ECSAuth", 'ECSForumService', 'ECSNavbarService', 'ECSBadgeService', 'ECSProfileService']);

app.config(function($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: "home/home.html",
			controller: 'NavbarController'
        })
        .when('/signup', {
            templateUrl: 'auth/signup.html',
            controller: 'SignupController'
        })
        .when('/login', {
            templateUrl: 'auth/login.html',
            controller: 'LoginController'
        })
		.when('/logout', {
			templateUrl: 'auth/logout.html',
			controller: 'LogoutController'
		})
		.when('/forum', {
			templateUrl: 'forum/forumhome.html',
			controller: 'ForumController'
		})
		.when('/forum/:postId', {
			templateUrl: 'forum/forumincident.html',
			controller: 'ForumIncController'
		})
		.when('/badges', {
			templateUrl: 'badges/badges.html',
			controller: 'BadgesController'
		})
		.when('/profile', {
			templateUrl: 'profile/profile.html',
			controller: 'ProfileController'
		})
		.when('/explorers', {
			templateUrl: 'explorers/explorers.html',
			controller: 'ExplorerController'
		});
});
