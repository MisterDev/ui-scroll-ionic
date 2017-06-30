angular.module('starter', ['ionic', 'ui.scroll'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('MainCtrl', function($scope) {
  $scope.hello = 'Hello Main Controller!';

  // $scope.datasource = {
  //   get: function(index, count, success) {
  //     var result = [];
  //     for (var i = index; i <= index + count - 1; i++) {
  //       result.push({ content: 'item #' + i });
  //     }
  //     success(result);
  //   }
  // };

  var string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'

  var min = -10000, max = 1, delay = 0;

  $scope.datasource = {
    get: function(index, count, success) {
      // console.log(index, count)
      setTimeout(function() {
        var result = [];
        var start = Math.max(min, index);
        var end = Math.min(index + count - 1, max);
        if (start <= end) {
          for (var i = start; i <= end; i++) {
            result.push({ index: i , height: 100 + (Math.abs(i%3)*20)});
          }
        }
        success(result);
      }, delay);
    }
  };

});
