'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    templateUrl: 'view2/view2.html',
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', ['$scope',function($scope) {

  $scope.usuario = [];
    $scope.usuarioModificar = [];

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