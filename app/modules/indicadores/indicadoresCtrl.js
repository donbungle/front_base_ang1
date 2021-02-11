(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:indicadoresCtrl
	* @description
	* # indicadoresCtrl
	* Controller of the app
	*/

  	angular
		.module('indicadores')
		.controller('IndicadoresCtrl', Indicadores);

		Indicadores.$inject = ['$rootScope', 'IndicadoresService', '$timeout'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Indicadores($rootScope, IndicadoresService, $timeout) {
			/*jshint validthis: true */
			var vm = this;
			vm.indicadores = [];
			vm.testing = 'TEST XD';
			vm.labels = [];
			vm.series = [];
			vm.data = [];
			vm.indicador_default = 'dolar';


			vm.$onInit = onInit;
			vm.getValoresIndicador = getValoresIndicador;
			vm.onClick = function (points, evt) {
				console.log(points, evt);
			};

			function getValoresIndicador(ind){
				vm.series = [''];
				
				IndicadoresService.getValorIndicador(ind)
				.then(function(response) {
					console.log('click response', response.data);
					
					vm.ind_sel = response.data;
					vm.labels = [];						
					vm.data = [[]];

					var f = moment();
					
					angular.forEach(vm.ind_sel.values, function(o,i) {
						vm.labels.push(moment.unix(i).format('DD-MM-YYYY'));
						vm.data[0].push(o);						
					});

					
				},function(error) {
					
				});
				
			}

			function onInit(){
				IndicadoresService.getUltIndicadores()
				.then(function(response){
					console.log('response', response);
					vm.indicadores = response.data;
					$timeout(function(){
						vm.getValoresIndicador(vm.indicador_default);
					}, 100);
				},function(error){
					console.log('error', error);
				});
			}
		}

})();
