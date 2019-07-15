'use strict';

angular.module('myApp.service', [])
.service('m', function(){

    this.getUsers = function(){
      return JSON.parse(localStorage.getItem('usuarios'));
    }

    this.setUser = function(usuario){
        localStorage.setItem('usuario',usuario);
    }
  });
  