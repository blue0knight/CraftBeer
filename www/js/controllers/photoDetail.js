'use strict'

app.controller('PhotoDetailCtrl', function($scope, Chats, Products) {
  
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
  $scope.image ="https://funkybuddhabrewery.com/sites/default/files/our_beer/docbrown_tapsticker.png";
  $scope.button = function(product){
    console.log('button was clicked', product, $scope.image);
    Products.saveProduct(product, $scope.image);
  }
})
