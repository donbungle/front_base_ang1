'use strict';

/**
 * @ngdoc function
 * @name app.route:indicadoresRoute
 * @description
 * # indicadoresRoute
 * Route of the app
 */

angular.module('indicadores')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
		.state('home.indicadores', {
			url:'/indicadores',
			templateUrl: 'app/modules/indicadores/indicadores.html',
			controller: 'IndicadoresCtrl',
			controllerAs: 'vm'
		});

		
	}]);
