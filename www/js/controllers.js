angular.module('app.controllers', [])
  
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('dashboardCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, UsersService) {
    console.log('He!');
    console.log(UsersService);

    $scope.todos = [];
    $scope.input = {};

    function getAllTodos() {
        console.log('1');
        UsersService.getTodos()
        .then(function (result) {
          $scope.todos = result.data.data;
          console.log($scope.todos);
        });
    }

    $scope.addTodo = function() {
    UsersService.addTodo($scope.input)
    .then(function(result) {
      $scope.input = {};
      // Reload our todos, not super cool
      getAllTodos();
    });
    }

    $scope.deleteTodo = function(id) {
    UsersService.deleteTodo(id)
    .then(function (result) {
      // Reload our todos, not super cool
      getAllTodos();
    });
    }

    getAllTodos();

  //   $scope.books = {
  //   '0': {
  //     'id': '234',
  //     'title': 'Bullshit',
  //     'author': 'abe lincoln',
  //     'genre': 'fiction',
  //     'isbn': '23214234325',
  //     'type': 'need',
  //     'description': "This is a really long description that really cannot be displayed completely on the page because it is pretty long."
  //   },
  //   '1': {
  //     'id': '12',
  //     'title': 'Some Title',
  //     'author': 'frank q.',
  //     'genre': 'non-fiction',
  //     'isbn': '3452345342523',
  //     'type': 'have',
  //     'description': "This is a really long description that really cannot be displayed completely on the page because it is pretty long."
  //   },
  //   '2': {
  //     'id': '45',
  //     'title': 'Suicide',
  //     'author': 'Sean Ginger',
  //     'genre': 'non-fiction',
  //     'isbn': '4563564654',
  //     'type': 'have',
  //     'description': "This is a really long description that really cannot be displayed completely on the page because it is pretty long."
  //   },
  //   '3': {
  //     'id': '88',
  //     'title': 'Gone with the racism',
  //     'author': 'Nigger Joe',
  //     'genre': 'non-fiction',
  //     'isbn': '98765678654',
  //     'type': 'need',
  //     'description': "This is a really long description that really cannot be displayed completely on the page because it is pretty long."
  //   }
  // };

  // $scope.showOnlyNeed = function(){
  //   _.each($scope.books , function(book){
  //       if(book.type == 'need'){
  //           $('#dashboard-list-item' + book.id).show();
  //       }
  //       if (book.type == 'have'){
  //           $('#dashboard-list-item' + book.id).hide();
  //       }
  //   });
  // }

  // $scope.showOnlyHave = function(){
  //   _.each($scope.books , function(book){
  //       if(book.type == 'have'){
  //           $('#dashboard-list-item' + book.id).show();
  //       }
  //       if (book.type == 'need'){
  //           $('#dashboard-list-item' + book.id).hide();
  //       }
  //   });
  // }

  // console.log(Object.keys($scope.books).length);

  // showOnlyNeed();

})
   
.controller('userDetailCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('mapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
      
.controller('mapExampleCtrl', ['$scope', 'uiGmapGoogleMapApi', function($scope, uiGmapGoogleMapApi) {
    // Do stuff with your $scope.
    // Note: Some of the directives require at least something to be defined originally!
    // e.g. $scope.markers = []

    // uiGmapGoogleMapApi is a promise.
    // The "then" callback function provides the google.maps object.
    uiGmapGoogleMapApi.then(function(maps){
        // Configuration needed to display the road-map with traffic
        // Displaying Ile-de-france (Paris neighbourhood)
        $scope.map = {
            center: {
              latitude: -23.598763,
              longitude: -46.676547
            },
            zoom: 13,
            options: {
                mapTypeId: google.maps.MapTypeId.ROADMAP, // This is an example of a variable that cannot be placed outside of uiGmapGooogleMapApi without forcing of calling the google.map helper outside of the function
                streetViewControl: false,
                mapTypeControl: false,
                scaleControl: false,
                rotateControl: false,
                zoomControl: false
            }, 
            showTraficLayer:true
        };
    });
}])
   
.controller('loginCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('signupCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('messagesCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('messageDetailCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('bookDetailCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('requestCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('searchCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
 