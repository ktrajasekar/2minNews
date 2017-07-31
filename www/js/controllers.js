angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

})

.controller('homeCtrl', function($ionicPlatform,$http, $scope, $cordovaDevice) {
    	$scope.newsAPI = 'http://flashbulb.in/wp-json/posts/';
      $http.get($scope.newsAPI).success(function(data){
        $scope.postData = data;
      });
})

.controller('deviceStatusCtrl', function($ionicPlatform, $scope, $cordovaDevice, $cordovaNetwork) {
    $ionicPlatform.ready(function() {
            var device = $cordovaDevice.getDevice();
            $scope.manufacturer = device.manufacturer;
            $scope.platform = device.platform;
            $scope.uuid = device.uuid;
            // Network Plugin
            $scope.type = $cordovaNetwork.getNetwork()
            $scope.isOnline = $cordovaNetwork.isOnline()
            //$scope.isOffline = $cordovaNetwork.isOffline()
  });
})
