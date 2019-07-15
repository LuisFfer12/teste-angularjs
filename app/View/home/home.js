'use strict';

angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'View/home/home.html',
    controller: 'HomeCtrl'
  });
}])


.controller('HomeCtrl', ['$scope','$http','m',function($scope,$http,m) {

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
     $scope.usuarios = JSON.parse(localStorage.getItem('usuarios'));
 }

   $scope.remover = function(index){
       $scope.usuarios.splice(index,1);
       localStorage.setItem('usuarios',JSON.stringify($scope.usuarios));
        }

        $scope.editar = function(index){
        var teste =  $scope.usuarios.splice(index,1);
          //console.log(teste);
          m.setUser(JSON.stringify(teste));
        }

}]);

