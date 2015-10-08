/**Servicios**/	

// No olvidar colocar este modulo como dependencia de la aplicacion principal!
var appServices = angular.module('appApp.services', []);

/**appServices.config(['$httpProvider', function($httpProvider){
	
}]);**/

appServices.factory('alertService', function($rootScope) {
    var alertService = {};

    // create an array of alerts available globally
    $rootScope.alertas = [];

    alertService.add = function(type, msg) {
      $rootScope.alertas.push({'type': type, 'msg': msg});
    };

    alertService.closeAlerta = function(index) {
      $rootScope.alertas.splice(index, 1);
    };
	
	alertService.deleteAll = function(index) {
      $rootScope.alertas = [];
    };

    return alertService;
  }); 
  
  /**Un $scope  object no puede ser inyectado en un servicio tiene que ser $rootScope**/
  appServices.service('fileReadService',function($rootScope,$http){
	  return {
		  fileRead: function(file,idCategory){
			  console.log('file '+file);
			  console.log('idCategory '+idCategory);
			  $http.get('docs/urls.txt').then(function(res){
				  //$scope.urlList={};
				$rootScope.urlList = res.data;	
				console.log('$scope.urlList  '+$rootScope.urlList);
				console.log('tamanho:'+$rootScope.urlList.length);
			 } ,function(e){
				console.log("Error leyendo el archivo:", e);				
					//defer.reject(e);
				});			 
			 
			  for (i=0;i<$rootScope.urlList.length;i++)
			  {
				if ($scope.urlList.idCategory== idCategory){
				  console.log("entro..");
				}
			  }
		  },
		  filterIdRead: function(){}		  
	  }
  });
  
