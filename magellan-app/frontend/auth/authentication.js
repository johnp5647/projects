var app = angular.module('ECSAuth', []);



app.service('TokenService', [function () {
    var userToken = 'token'
    
    this.saveToken = function(token) {
        sessionStorage[userToken] = token;
    }
    
    this.getToken = function () {
        return sessionStorage[userToken];
    }
    
    this.removeToken = function () {
        sessionStorage.removeItem(userToken);
    }
}]);



app.service('UserService', ['$http', 'TokenService', function($http, TokenService) { 
    var baseUrl = 'http://localhost:9000/auth';
    this.currentUser = 'null';
    this.signup = function(user) {
        return $http.post(baseUrl + '/signup', user);    
    }
    
    this.login = function(user) {
        return $http.post(baseUrl + '/login', user).then(function(response) {
			this.currentUser = 'null';
            TokenService.saveToken(response.data.token);
            return response;
        });
    }
    
    this.logout = function() {
		this.currentUser = 'null';
        TokenService.removeToken();
		
		
    }
	
	
}]);

// httpInterceptor
    //In charge of adding token to the request and handling errors related to $http request

app.factory('AuthInterceptor', ['$q', '$location' ,'TokenService', function($q, $location, TokenService) {
    var interceptor = {
        request: function(config) {
            var token = TokenService.getToken();
            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = 'Bearer ' + token;
            }
            
            return config;
        },
        responseError: function(response) {
            if (response.status === 401) {
                TokenService.removeToken();
                $location.path('/login');
            }
            $q.reject(response);
        }
    }
    return interceptor;
}]);

app.config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push("AuthInterceptor");
}]);