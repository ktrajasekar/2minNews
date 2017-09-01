angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, $http, servicesreturn) {
  servicesreturn.categoriesData()
    .then(function (response) {
        $scope.categories = response.data;
    }, function (error) {
        $scope.status = 'Error Retrieving Data! ' + error.message;
    });
})

.controller('homeCtrl', function($ionicPlatform,$http, $scope, $stateParams, servicesreturn) {
      servicesreturn.categoriesData()
        .then(function (data) {
            $scope.orders = data;
        }, function (error) {
            $scope.status = 'Error Retrieving Data! ' + error.message;
        });

    	$scope.newsAPI = 'http://flashbulb.in/wp-json/wp/v2/posts';
    //	$scope.newsAPI = 'http://flashbulb.in/wp-json/wp/v2/posts/';
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
