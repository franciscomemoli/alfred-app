// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'ionic.cloud', 'ionic-material', 'firebase']);
app.run(["$rootScope", "$state", function($rootScope, $state) {
  $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireSignIn promise is rejected
    // and redirect the user back to the home page
    if (error === "AUTH_REQUIRED") {
      $state.go("login");
    }
  });
}]);
app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)

        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

app.config(function($ionicCloudProvider) {
  $ionicCloudProvider.init({
    "core": {
      "app_id": "a79312e0"
    }
  })
})
app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl',
        resolve: {
            // controller will not be loaded until $requireSignIn resolves
            // Auth refers to our $firebaseAuth wrapper in the factory below
            "currentAuth": ["Auth", function(Auth) {
              // $requireSignIn returns a promise so the resolve waits for it to complete
              // If the promise is rejected, it will throw a $stateChangeError (see above)
              return Auth.$requireSignIn();
            }]
        }
    })
    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    })
    .state('logout', {
        url: '/logout',
        template: 'saliendo',
        controller: 'LogoutCtrl'
    })
    .state('app.groups_list', {
        url: '/groups',
        views: {
            'menuContent': {
                templateUrl: 'templates/groups/index.html',
                controller: 'GroupsListCtrl'
            }
        }
    })
    .state('app.group', {
        url: '/group/{id}',
        views: {
            'menuGroupItems': {
                templateUrl: 'templates/menuGroup.html',
                controller: 'GroupsListCtrl'
            },
            'menuContent': {
                templateUrl: 'templates/groups/show.html',
                controller: 'GroupShowCtrl',
            }
        }
    })
    .state('app.groupexpense', {
        url: '/group/{id}/expense',
        views: {
            'menuContent': {
                templateUrl: 'templates/documents/expense.html',
                controller: 'ExpenseCtrl'
            }
        }
    })
    .state('app.lists', {
        url: '/lists',
        views: {
            'menuContent': {
                templateUrl: 'templates/lists.html',
                controller: 'ListsCtrl'
            }
        }
    })

    .state('app.ink', {
        url: '/ink',
        views: {
            'menuContent': {
                templateUrl: 'templates/ink.html',
                controller: 'InkCtrl'
            }
        }
    })

    .state('app.motion', {
        url: '/motion',
        views: {
            'menuContent': {
                templateUrl: 'templates/motion.html',
                controller: 'MotionCtrl'
            }
        }
    })

    .state('app.components', {
        url: '/components',
        views: {
            'menuContent': {
                templateUrl: 'templates/components.html',
                controller: 'ComponentsCtrl'
            }
        }
    })

    .state('app.extensions', {
        url: '/extensions',
        views: {
            'menuContent': {
                templateUrl: 'templates/extensions.html',
                controller: 'ExtensionsCtrl'
            }
        }
    })
    .state('app.categories_list', {
        url: '/categories',
        views: {
            'menuContent': {
                templateUrl: 'templates/categories/index.html',
                controller: 'CategoriesListCtrl'
            }
        }
    })
    .state('app.categories_edit', {
        url: '/categories/edit/{id}',
        views: {
            'menuContent': {
                templateUrl: 'templates/categories/new.html',
                controller: 'CategoriesEditCtrl'
            }
        }
    })
    ;

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/components');
});
app.factory("Auth", ["$firebaseAuth",
  function($firebaseAuth) {
    return $firebaseAuth();
  }
]);