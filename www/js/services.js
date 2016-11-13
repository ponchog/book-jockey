angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

.service('UsersService', function ($http, Backand) {
	var baseUrl = '/1/objects/';	
	// var userObjName = 'users/';

	function getUrl(obj) {
		return Backand.getApiUrl() + baseUrl + obj + '/';
	}

	function getUrlForId(id) {
		return getUrl() + id;
	}

	getUser = function (id, obj) {
	    return $http({
	      method: 'GET',
	      url: getUrl(obj) + id,
	      params: {
	       	deep: true // to get the related user objects
	      }
	    }).then(function(response) {
			return response;
	    });	    
	 };


	getBook = function(id, obj) {
		return $http({
	      method: 'GET',
	      url: getUrl(obj) + id,
	      params: {
	       	deep: true // to get the related user objects
	      }
	    }).then(function(response) {
			return response;
	    });
	};



	// getTodos = function () {
	// return $http.get(getUrl());
	// };

	// addTodo = function(todo) {
	// return $http.post(getUrl(), todo);
	// };

	// deleteTodo = function (id) {
	// return $http.delete(getUrlForId(id));
	// };

	return {
	// getTodos: getTodos,
	// addTodo: addTodo,
	// deleteTodo: deleteTodo,
	getUser: getUser,
	getBook, getBook,

	}
});