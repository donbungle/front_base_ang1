(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('bice-lab-app')
		.config(configure)
		.run(runBlock);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider', '$mdThemingProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider, $mdThemingProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
		$httpProvider.defaults.useXDomain = true;
		delete $httpProvider.defaults.headers.common['X-Requested-With'];
		
		
		$urlRouterProvider
			.otherwise('/dashboard');
			
	
			$mdThemingProvider.theme('tema')
			.primaryPalette('blue-grey')
			.accentPalette('blue')
			.warnPalette('pink')
			.backgroundPalette('grey');
	
			$mdThemingProvider.setDefaultTheme('tema');	
			$mdThemingProvider.alwaysWatchTheme(true);
		
	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope) {
		'use strict';
		$rootScope.url_indicadores = 'https://www.indecon.online/';
		$rootScope.app_name = "App Bice";
	}


})();
