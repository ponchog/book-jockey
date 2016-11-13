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
    $scope.id = 54; //Hardcoded for now
    $scope.userObjName = 'users';
    $scope.userBookObjName = 'user_books';
    $scope.TYPE_NEED = 1;
    $scope.TYPE_HAVE = 2;    
    $scope.activeType = 1;
    $scope.countBooksNeed = 0;
    $scope.countBooksHave = 0;

    
    $scope.getUser = function(id, obj) {
        UsersService.getUser(id, obj)
            .then(function (result) {
                $scope.user = result.data;
                console.log($scope.user.books);

                angular.forEach($scope.user.books, function(book) {
                    if(book.type == 1){
                        $scope.countBooksNeed++;
                    }else{
                        $scope.countBooksHave++;
                    }
                });

            }).catch(function(e){
                   console.log("got an error in initial processing",e);
                   throw e; // rethrow to not marked as handled, 
                            // in $q it's better to `return $q.reject(e)` here
                }).then(function(res){
                    // do more stuff
                }).catch(function(e){
                    // handle errors in processing or in error.
                });
    }

    $scope.showBooksNeed = function(){
        $scope.activeType = $scope.TYPE_NEED;
    }

    $scope.showBooksHave = function(){
        $scope.activeType = $scope.TYPE_HAVE;
      }

    $scope.getUser($scope.id, $scope.userObjName);

    $scope.demoBooks = {
        '0': {
          'id': '234',
          'title': 'Bullshit',
          'author': 'abe lincoln',
          'genre': 'fiction',
          'isbn': '23214234325',
          'type': 'need',
          'description': "This is a really long description that really cannot be displayed completely on the page because it is pretty long."
        },
        '1': {
          'id': '12',
          'title': 'Some Title',
          'author': 'frank q.',
          'genre': 'non-fiction',
          'isbn': '3452345342523',
          'type': 'have',
          'description': "This is a really long description that really cannot be displayed completely on the page because it is pretty long."
        },
        '2': {
          'id': '45',
          'title': 'Suicide',
          'author': 'Sean Ginger',
          'genre': 'non-fiction',
          'isbn': '4563564654',
          'type': 'have',
          'description': "This is a really long description that really cannot be displayed completely on the page because it is pretty long."
        },
        '3': {
          'id': '88',
          'title': 'Gone with the racism',
          'author': 'Nigger Joe',
          'genre': 'non-fiction',
          'isbn': '98765678654',
          'type': 'need',
          'description': "This is a really long description that really cannot be displayed completely on the page because it is pretty long."
        }
      };

})

.controller('bookDetailCtrl',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, UsersService, $ionicActionSheet) {
    $scope.bookObjName = 'books';
    $scope.book = [];    
    $scope.viewMode = $stateParams.viewMode;
    $scope.subHeaderMessage = $scope.viewMode == 1 ? 'People nearby with the book you seek' : 'People nearby looking for this book';    
    $scope.actionButtonText = $scope.viewMode == 1 ? 'Get the book!' : 'Offer the book!';

    $scope.getBook = function(id, obj) {
        UsersService.getBook(id, obj)
            .then(function (result) {
                $scope.book = result.data;

                angular.forEach($scope.book.users, function(user) {
                  user.user.miles = $scope.randomFloatBetween(0.1, 5, 1);
                  console.log(user);
                });
            });
    };

     // Triggered on a button click, or some other target
    $scope.show = function(userFirstName, userId, book) {
      console.log(book);
        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                { text: '<b>' + $scope.actionButtonText + '</b>' },
                { text: 'View ' + userFirstName + "'s Profile" }
            ],
            cancelText: 'Cancel',
            cancel: function() {
                // add cancel code..
                },
            buttonClicked: function(index) {
                //Request
                if(index === 0) {
                    // $state.go('tabsController.request');
                    $state.go('tabsController.request', {bookId: book.id, userId: userId, requestType: $scope.viewMode});
                }
                    
                //View Profile
                if(index === 1) {
                   console.log('2')
                }
             },
        });
    }

    // Random float between
    $scope.randomFloatBetween = function(minValue,maxValue,precision){
      console.log(minValue,maxValue,precision);
      if(typeof(precision) == 'undefined'){
          precision = 1;
      }
      return parseFloat(Math.min(minValue + (Math.random() * (maxValue - minValue)),maxValue).toFixed(precision));
    }

    $scope.getBook($stateParams.bookId, $scope.bookObjName);

})

.controller('bookInfoCtrl',
function ($scope, $stateParams, $state, UsersService, $ionicActionSheet) {
    console.log('heeeey');
    $scope.bookObjName = 'books';
    $scope.book = [];    
    $scope.getBook = function(id, obj) {
        UsersService.getBook(id, obj)
            .then(function (result) {
                $scope.book = result.data;
                console.log($scope.book);                
            });
    };

     // Triggered on a button click, or some other target
    $scope.show = function(userFirstName, userId) {
        // Show the action sheet
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                { text: '<b>' + $scope.actionButtonText + '</b>' },
                { text: 'View ' + userFirstName + "'s Profile" }
            ],
            cancelText: 'Cancel',
            cancel: function() {
                // add cancel code..
                },
            buttonClicked: function(index) {
                //Request
                if(index === 0) {                    
                    $state.go('tabsController.request');
                }
                    
                //View Profile
                if(index === 1) {
                   console.log('2')
                }
             },
        });
    }

    $scope.getBook($stateParams.bookId, $scope.bookObjName);
    

})

.controller('requestCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
  // You can include any angular dependencies as parameters for this function
  // TIP: Access Route Parameters for your page via $stateParams.parameterName
  function ($scope, $stateParams, UsersService) {
    $scope.bookObjName = 'books';
    $scope.userObjName = 'users';
    $scope.TYPE_NEED = 1;
    $scope.TYPE_HAVE = 2;
    $scope.viewMode = $stateParams.requestType;
    $scope.userId = $stateParams.userId;

    $scope.subHeaderMessage = $scope.viewMode == 1 ? 'Make offer to ' : 'Offer Book to ';

    $scope.getBook = function(id, obj) {
      UsersService.getBook(id, obj)
          .then(function (result) {
              $scope.book = result.data;              
          });
    };

    $scope.getUser = function(id, obj) {
        UsersService.getUser(id, obj)
            .then(function (result) {
                $scope.user = result.data;
                console.log($scope.user.books);
            });
    }

    $scope.sendMessage = function () {
      //Todo - Frank
    }

    
    $scope.getBook($stateParams.bookId, $scope.bookObjName);
    $scope.getUser($scope.userId, $scope.userObjName);


    // params: ['bookId', 'bookAuthor', 'bookImg', 'bookTitle']




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
   
.controller('pageCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   

   
.controller('searchCtrl', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, UsersService) {
    $scope.bookObjName = 'books';
    //950553147113
    $scope.books = new Array();
    $scope.addBooksByIsbn = function(obj, value) {        
        UsersService.getBooksByIsbn(obj, value)
            .then(function (result) {
                $scope.books = $scope.books.concat(result.data.data);
            }).catch(function(e){
                   console.log("got an error in initial processing",e);
                   throw e;
                }).then(function(res){
                    // do more stuff
                }).catch(function(e){
                    // handle errors in processing or in error.
                });
    }
    $scope.addBooksByAuthor = function(obj, value) {        
        UsersService.getBooksByAuthor(obj, value)
            .then(function (result) {
                $scope.books = $scope.books.concat(result.data.data);
            }).catch(function(e){
                   console.log("got an error in initial processing",e);
                   throw e;
                }).then(function(res){
                    // do more stuff
                }).catch(function(e){
                    // handle errors in processing or in error.
                });
    }
    $scope.addBooksByTitle = function(obj, value) {        
        UsersService.getBooksByTitle(obj, value)
            .then(function (result) {
               $scope.books = $scope.books.concat(result.data.data);
            }).catch(function(e){
                   console.log("got an error in initial processing",e);
                   throw e;
                }).then(function(res){
                    // do more stuff
                }).catch(function(e){
                    // handle errors in processing or in error.
                });
    }

    $scope.search = function (searchTxt){
        $scope.books = new Array();   
        $scope.addBooksByIsbn($scope.bookObjName, searchTxt);
        $scope.addBooksByTitle($scope.bookObjName, searchTxt);
        $scope.addBooksByAuthor($scope.bookObjName, searchTxt);
    }

    // $scope.scan = function(){
    //     console.log('Scan');
    //     $ionicPlatform.ready(function() {
    //         $cordovaBarcodeScanner
    //             .scan()
    //             .then(function(result) {
    //                 // Success! Barcode data is here
    //                 $scope.scanResults = "We got a barcode\n" +
    //                 "Result: " + result.text + "\n" +
    //                 "Format: " + result.format + "\n" +
    //                 "Cancelled: " + result.cancelled;
    //             }, function(error) {
    //                 // An error occurred
    //                 $scope.scanResults = 'Error: ' + error;
    //             });
    //     });
    // };

    $scope.scanResults = '';


})
 