(function() {
    'use strict';
    angular
        .module('todos', ['ui.router'])
        .config(function($stateProvider, $urlRouterProvider) {

	  	$urlRouterProvider.otherwise("/404");

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
	    .state('contact', {
      	url: '/contact',
      	views: {
      		'main': {
		        templateUrl: '../views/contact.html',
		      },
		      'nav': {
		        templateUrl: '../views/contact-nav.html',
		      },
		  },
	    });
	});
})();


