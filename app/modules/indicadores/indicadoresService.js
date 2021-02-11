(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:indicadoresService
	 * @description
	 * # indicadoresService
	 * Service of the app
	 */

  	angular
		.module('indicadores')
		.factory('IndicadoresService', Indicadores);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Indicadores.$inject = ['$rootScope', '$http'];

		function Indicadores ($rootScope, $http) {
			var url = $rootScope.url_indicadores;

			var service = {
				getUltIndicadores: getUltIndicadores,
				getValorIndicadorFecha: getValorIndicadorFecha,
				getValorIndicador: getValorIndicador,
			};
			return service;
			
			function getUltIndicadores(){
				return $http({
					url: url + '/last',   
					method: "GET",
					params: {}
				});
			}
			
			function getValorIndicadorFecha(indicador, fecha){
				return $http({
					//https://www.indecon.online/date/cobre/02-01-2010
					url: url + '/date/' + indicador + '/' + fecha,  
					method: "GET",
					params: {}
				});
			}

			function getValorIndicador(indicador){
				return $http({
					//https://www.indecon.online/values/cobre
					url: url + '/values/' + indicador,   
					method: "GET",
					params: {}
				});
			}
		}

})();
