angular.module('starter.controllers')

  .controller('DetailCtrl', function($scope, $stateParams, StatisData) {
    $scope.detail = StatisData.get($stateParams.id);
  })
