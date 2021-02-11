(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:indicadoresTest
	 * @description
	 * # indicadoresTest
	 * Test of the app
	 */

	describe('indicadores test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('bice-lab-app');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('IndicadoresCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

		it('Should indicador_default must be defined and must be dolar', function () {
			expect(controller.indicador_default).toBeDefined();
			expect(controller.indicador_default).toBe('dolar');
		});

	});
})();
