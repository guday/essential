angular.module('starter.controllers')

  .controller('ListCtrl', function($scope, StatisData, $state) {


    $scope.list = StatisData.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };

    $scope.onClickItem = function (item) {
      // $location.path('/detail/' + item.id)
      $state.go("tab.detail", {
        id: item.id
      })
    }
  });
