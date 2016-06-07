'use strict';

app.controller('LoginCtrl', function($scope, $ionicPopup){
  $scope.emailLogin = function(){
    console.log('button was clicked');

  $scope.data = {};

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    templateUrl: 'templates/partials/login.html',
    title: 'Register Username, Email & Password',
    subTitle: 'Make sure you enter them correctly',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Save</b>',
        type: 'button-positive',
        onTap: function(e) {
          if (!$scope.data.wifi) {
            //don't allow the user to close unless he enters wifi password
            e.preventDefault();
          } else {
            return $scope.data.wifi;
          }
        }
      }
    ]
  });

  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });
 };

});
