angular.module('app.routes', ['ionicUIRouter'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    .state('tabsController.dashboard', {
      url: '/dashboard',
      views: {
        'tab1': {
          templateUrl: 'templates/dashboard.html',
          controller: 'dashboardCtrl'
        }
      }
    })

    /* 
      The IonicUIRouter.js UI-Router Modification is being used for this route.
      To navigate to this route, do NOT use a URL. Instead use one of the following:
        1) Using the ui-sref HTML attribute:
          ui-sref='tabsController.userDetail'
        2) Using $state.go programatically:
          $state.go('tabsController.userDetail');
      This allows your app to figure out which Tab to open this page in on the fly.
      If you're setting a Tabs default page or modifying the .otherwise for your app and
      must use a URL, use one of the following:
        /page1/tab1/user-detail
        /page1/tab4/user-detail
    */
    .state('tabsController.userDetail', {
      url: '/user-detail',
      views: {
        'tab1': {
          templateUrl: 'templates/userDetail.html',
          controller: 'userDetailCtrl'
        },
        'tab4': {
          templateUrl: 'templates/userDetail.html',
          controller: 'userDetailCtrl'
        }
      }
    })

    .state('tabsController.map', {
      url: '/map',
      views: {
        'tab3': {
          templateUrl: 'templates/map.html',
          controller: 'mapCtrl'
        }
      }
    })

    .state('tabsController', {
      url: '/page1',
      templateUrl: 'templates/tabsController.html',
      abstract:true
    })

    .state('mapExample', {
      url: '/map-example',
      templateUrl: 'templates/mapExample.html',
      controller: 'mapExampleCtrl'
    })

    .state('login', {
      url: '/page6',
      templateUrl: 'templates/login.html',
      controller: 'loginCtrl'
    })

    .state('signup', {
      url: '/page7',
      templateUrl: 'templates/signup.html',
      controller: 'signupCtrl'
    })

    .state('tabsController.messages', {
      url: '/messages',
      views: {
        'tab2': {
          templateUrl: 'templates/messages.html',
          controller: 'messagesCtrl'
        }
      }
    })

    .state('tabsController.messageDetail', {
      url: '/message-detail',
      views: {
        'tab2': {
          templateUrl: 'templates/messageDetail.html',
          controller: 'messageDetailCtrl'
        }
      }
    })

    /* 
      The IonicUIRouter.js UI-Router Modification is being used for this route.
      To navigate to this route, do NOT use a URL. Instead use one of the following:
        1) Using the ui-sref HTML attribute:
          ui-sref='tabsController.bookDetail'
        2) Using $state.go programatically:
          $state.go('tabsController.bookDetail');
      This allows your app to figure out which Tab to open this page in on the fly.
      If you're setting a Tabs default page or modifying the .otherwise for your app and
      must use a URL, use one of the following:
        /page1/tab1/book-detail
        /page1/tab4/book-detail
    */
    .state('tabsController.bookDetail', {
      url: '/book-detail/:bookId?viewMode',
      views: {
        'tab1': {
          templateUrl: 'templates/bookDetail.html',
          controller: 'bookDetailCtrl',
          params: ['bookId', 'type']
        },
        // 'tab4': {
        //   templateUrl: 'templates/bookDetail.html',
        //   controller: 'bookDetailCtrl'
        // }
      }
    })

    .state('tabsController.bookInfo', {
      url: '/book-info/:bookId',
      views: {
        'tab4': {
          templateUrl: 'templates/bookInfo.html',
          controller: 'bookInfoCtrl',
          params: ['bookId']
        },
        // 'tab4': {
        //   templateUrl: 'templates/bookDetail.html',
        //   controller: 'bookDetailCtrl'
        // }
      }
    })

    .state('page', {
      url: '/page12',
      templateUrl: 'templates/page.html',
      controller: 'pageCtrl'
    })

    /* 
      The IonicUIRouter.js UI-Router Modification is being used for this route.
      To navigate to this route, do NOT use a URL. Instead use one of the following:
        1) Using the ui-sref HTML attribute:
          ui-sref='tabsController.request'
        2) Using $state.go programatically:
          $state.go('tabsController.request');
      This allows your app to figure out which Tab to open this page in on the fly.
      If you're setting a Tabs default page or modifying the .otherwise for your app and
      must use a URL, use one of the following:
        /page1/tab1/request
        /page1/tab4/request
    */
    .state('tabsController.request', {
      url: '/request/:bookId?userId?requestType',
      views: {
        'tab1': {
          templateUrl: 'templates/request.html',
          controller: 'requestCtrl',
          params: ['bookId', 'userId', 'requestType']
        },
        // 'tab4': {
        //   templateUrl: 'templates/request.html',
        //   controller: 'requestCtrl'
        // }
      }
    })

    .state('tabsController.search', {
      url: '/search',
      views: {
        'tab4': {
          templateUrl: 'templates/search.html',
          controller: 'searchCtrl'
        }
      }
    })

$urlRouterProvider.otherwise('/page1/dashboard')

  

});