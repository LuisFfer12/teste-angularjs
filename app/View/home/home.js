'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'View/home/home.html',
    controller: 'HomeCtrl'
  });
}])

.controller('HomeCtrl', ['$scope','$http',function($scope,$http) {

  $scope.usuarios = [];

 if(localStorage.getItem('usuarios') == null){
   $http.get('https://reqres.in/api/users?page=1&per_page=12')
       .then(function(res){
           console.log(res.data.data);
           $scope.usuarios = res.data.data;
           localStorage.setItem('usuarios',JSON.stringify($scope.usuarios));
           localStorage.getItem('usuarios');

       });
 }
 else{
   var usu = localStorage.getItem('usuarios');
   var usua = JSON.parse(usu);
     $scope.usuarios = usua;
 }

   $scope.remover = function(index){
       $scope.usuarios.splice(index,1);
       localStorage.setItem('usuarios',JSON.stringify($scope.usuarios));
        }

}]);

