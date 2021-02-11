(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('bice-lab-app')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService', '$rootScope'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService, $rootScope) {
		/*jshint validthis: true */
		var vm = this;
		vm.app_name = $rootScope.app_name;
		vm.title = "Hello, " + vm.app_name + "!";
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();

	}

})();
