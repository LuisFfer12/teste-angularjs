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

.controller('CadastroCtrl', ['$scope','$routeParams',function($scope,$routeParams) {

  $scope.usuario = [];
  $scope.usuarioEdit =[]; 
  $scope.isEdit = false;


  const sort_by = function(field, reverse, primer){

    var key = primer ? 
        function(x) {return primer(x[field])} : 
        function(x) {return x[field]};
 
    reverse = !reverse ? 1 : -1;
 
    return function (a, b) {
        return a = key(a), b = key(b), reverse * ((a > b) - (b > a));
      } 
 }
  
  var usuarioEdit = JSON.parse(localStorage.getItem('usuario'));
  $scope.usuarioEdit = JSON.parse(localStorage.getItem('usuario'));
  var usuarios = JSON.parse(localStorage.getItem('usuarios'));

  if($routeParams.usuarioId){
    $scope.usuario = usuarioEdit[0];
    $scope.isEdit = true ;

  }

    $scope.adicionar = function(){

     
    
        usuarios.push({first_name:$scope.usuario.first_name,
            last_name:$scope.usuario.last_name,
            email:$scope.usuario.email,
            avatar:$scope.usuario.avatar,
            id: usuarios[usuarios.length -1].id +1 
        });
        localStorage.setItem('usuarios',JSON.stringify(usuarios));
        alert("Registro adicionado.");
      }

      $scope.editar = function(){
       

      var removed = usuarios.filter(function(el){
      return el.id != $routeParams.usuarioId;
      });

      console.log(removed);
        

    removed.push({first_name:$scope.usuario.first_name,
          last_name:$scope.usuario.last_name,
          email:$scope.usuario.email,
          avatar:$scope.usuario.avatar,
          id: $scope.usuario.id
      });

      removed.sort(sort_by('id',false,parseInt));


        localStorage.setItem('usuarios',JSON.stringify(removed));
        alert("Registro Modificado")
      

    }
}]);