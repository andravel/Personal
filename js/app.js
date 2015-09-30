/*-- */

var app = angular.module('BibliotecAndravel',['ngRoute','ngResource','ngCookies','ngRoute','ngAnimate','ui.bootstrap',]);
//'ui.bootstrap.tpls'
app.config(['$routeProvider','$httpProvider', function($routeProvider,$httpProvider){
	$routeProvider.when('/', {templateUrl: 'partials/About.html',   controller: 'init_controller'});
	$routeProvider.when('/codes', {templateUrl: 'partials/Codes.html', controller: 'codes_controller'});
	$routeProvider.when('/links', {templateUrl: 'partials/Links.html', controller: 'links_controller'});
	$routeProvider.when('/error', {templateUrl: 'partials/Error.html', controller: 'error_controller'});
	$routeProvider.otherwise({redirectTo: '/'});
	
	/**El siguiente código es el listener de la aplicacion**/
	$httpProvider.interceptors.push(['$q','$rootScope', function ($q,$rootScope) {
	        return {
	            'request': function (config) {  	     
				   //console.log("Request --Url::"+config.url); 					               
	               return config;
	            },
	            'response': function(response) {            	
					//console.log("Listener response"); 					               
	            	return response;
	            },
	            'responseError': function (rejection) {             	
					//console.log("Listener error"); 					               
	            	return  $q.reject(rejection); 
	                
	            }
	        };
	    }]);		
}]);

app.run(function($rootScope){
	console.log("Aplicacion Iniciada...yo inicio primero");		
});

/**Controllers**/
	
app.controller('init_controller',function ($rootScope,$scope,$location,$templateCache){
	console.log("Entro al init_controller");	
	//$templateCache.removeAll();
	$scope.oneAtATime = true;

  $scope.groups = [
    {
      title: 'Dynamic Group Header - 1',
      content: 'Dynamic Group Body - 1'
    },
    {
      title: 'Dynamic Group Header - 2',
      content: 'Dynamic Group Body - 2'
    }
  ];

  $scope.items = ['Item 1', 'Item 2', 'Item 3'];

  $scope.addItem = function() {
    var newItemNo = $scope.items.length + 1;
    $scope.items.push('Item ' + newItemNo);
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };
		
});

app.controller('codes_controller',function($scope){
	console.log("Entro al codes_controller");
});

app.controller('links_controller',function($scope){
	console.log("Entro al links_controller");	
})

app.controller('error_controller',function($scope){
	$scope.mensajeError = 'Error en la app';
	$scope.descripcionMensajeError = 'Descripcion del error en la app';
	console.log("Entro al error_controller");
})
	

/**Directivas**
las directivas son marcas en los elementos del árbol DOM, en los nodos del HTML, que indican al compilador de Angular que debe asignar cierto comportamiento a dichos elementos o transformarlos según corresponda, amplian el potencuial del HTML**/	

app.directive('mensajeAplicacion',[function(){
	return{
		/*restrict 'A', es para fijar el comportamiento en un atributo de una tag y restrict 'E' para adicionar el comportamiento en un nuevo elemento.**/
		restrict: 'E',
		//template: "Hola mundo!!",
		//Plantilla a usar:
		templateUrl: 'partials/Mensage.html',
		//template:'<div>Mensaje HTML</div>',		
		replace: true
	};
}])


/**Factorias** Las factorías son como contenedores de código que podemos usar en nuestros sitios desarrollados con AngularJS. Son un tipo de servicio, 
"service" en Angular, con el que podemos implementar librerías de funciones o almacenar datos.las factorías tienen la característica de ser instanciados una única vez dentro de las aplicaciones, 
por lo que no pierden su estado**/	



/**Servicios**/	


