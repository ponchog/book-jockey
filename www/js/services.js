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

	getBooksByIsbn = function(obj, value) {
		return $http({
	      method: 'GET',
	      url: getUrl(obj),
	      params: {	       	
	       	filter: [
	       		{
					fieldName: 'isbn',
					operator: 'contains',
					value: value
				}
			],
	      }
	    }).then(function(response) {
			return response;
	    });
	};
	getBooksByAuthor = function(obj, value) {
		return $http({
	      method: 'GET',
	      url: getUrl(obj),
	      params: {	       	
	       	filter: [
	       		{
					fieldName: 'author',
					operator: 'contains',
					value: value
				}
			],
	      }
	    }).then(function(response) {
			return response;
	    });
	};
	getBooksByTitle = function(obj, value) {
		return $http({
	      method: 'GET',
	      url: getUrl(obj),
	      params: {	       	
	       	filter: [
	       		{
					fieldName: 'title',
					operator: 'contains',
					value: value
				}
			],
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
	getBook: getBook,
	getBooksByIsbn: getBooksByIsbn,
	getBooksByAuthor: getBooksByAuthor,
	getBooksByTitle: getBooksByTitle

	}
});