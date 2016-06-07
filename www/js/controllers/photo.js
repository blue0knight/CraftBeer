'use strict';

app.controller('PhotoCtrl', function($scope) {

  $scope.takePhoto = function(){
    console.log('take photoPhoto was clicked');
  }

  $scope.choosePhoto = function(){
    console.log('choosePhoto was clicked');
  }

});
