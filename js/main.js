(function() {
    'use strict';
    angular
        .module('shopSite', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {

	  	$urlRouterProvider.otherwise("/");

	  	$stateProvider
	    .state('home', {
      	url: '/',
      	views: {
      		'main': {
		        templateUrl: '../views/home.html',
		        controller: 'MainController',
		        controllerAs: 'main'
		      },
		      'nav': {
		        templateUrl: '../views/partials/nav.html',
		      },
		  },
	    })
	    .state('category', {
      	url: '/category',
      	views: {
      		'main': {
		        templateUrl: '../views/category.html',
		         controller: 'CategoryController',
		        controllerAs: 'category'
		      },
		      'nav': {
		        templateUrl: '../views/partials/nav.html',
		      },
		  },
	    })
	    .state('list', {
      	url: '/list',
      	views: {
      		'main': {
		        templateUrl: '../views/list.html',
		      },
		      'nav': {
		        templateUrl: '../views/partials/nav.html',
		      },
		  },
	    });
	});
})();


