'use strict';

angular.module('myApp.cadastro', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cadastro', {
    templateUrl: 'View/cadastro/cadastro.html',
    controller: 'CadastroCtrl'
  });
}])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/cadastro/:usuarioId', {
    templateUrl: 'View/cadastro/cadastro.html',
    controller: 'CadastroCtrl'
  });
}])

.controller('CadastroCtrl', ['$scope',function($scope) {

  $scope.usuario = [];

    var usuarios = localStorage.getItem('usuarios');
    var usuarios = JSON.parse(usuarios);
          
    $scope.adicionar = function(){

        usuarios.push({first_name:$scope.usuario.first_name,
            last_name:$scope.usuario.last_name,
            email:$scope.usuario.email,
            avatar:$scope.usuario.avatar,
            id: usuarios.length +1
        });
        localStorage.setItem('usuarios',JSON.stringify(usuarios));
        alert("Registro adicionado.");
    }

    $scope.editar = function(){
        var teste = usuarios.splice(index,1);
        console.log(teste);
    }

}]);