angular.module('app.services', [])

.factory('BlankFactory', [function(){

}])

// .service('BlankService', [function(){

// }])

// .service('APIInterceptor', function ($rootScope, $q) {
//     var service = this;

//     service.responseError = function (response) {
//         if (response.status === 401) {
//             $rootScope.$broadcast('unauthorized');
//         }
//         return $q.reject(response);
//     };
// })

// .service('UsersModel', [function ($http, Backand) {
//     var service = this,
//         baseUrl = '/1/objects/',
//         objectName = 'users/';

//     function getUrl() {
//         return Backand.getApiUrl() + baseUrl + objectName;
//     }

//     function getUrlForId(id) {
//         return getUrl() + id;
//     }

//     service.all = function () {
//         return $http.get(getUrl());
//     };

//     service.fetch = function (id) {
//         return $http.get(getUrlForId(id));
//     };

//     service.create = function (object) {
//         return $http.post(getUrl(), object);
//     };

//     service.update = function (id, object) {
//         return $http.put(getUrlForId(id), object);
//     };

//     service.delete = function (id) {
//         return $http.delete(getUrlForId(id));
//     };
// }])

.service('UsersService', function ($http, Backand) {
  var baseUrl = '/1/objects/';
  var objectName = 'users/';
 
  function getUrl() {
    return Backand.getApiUrl() + baseUrl + objectName;
  }
 
  function getUrlForId(id) {
    return getUrl() + id;
  }
 
  getTodos = function () {
    return $http.get(getUrl());
  };
 
  addTodo = function(todo) {
    return $http.post(getUrl(), todo);
  }
 
  deleteTodo = function (id) {
    return $http.delete(getUrlForId(id));
  };
 
  return {
    getTodos: getTodos,
    addTodo: addTodo,
    deleteTodo: deleteTodo
  }
});