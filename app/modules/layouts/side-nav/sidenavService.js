(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('bice-lab-app')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					{
						link: 'indicadores',
							name: 'Indicadores',
							icon: 'timer_off'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	};

		}

})();
