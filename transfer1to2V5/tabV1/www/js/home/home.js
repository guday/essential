angular.module('starter.controllers')

  .controller('HomeCtrl', function ($scope) {
    $scope.items = [
      {
        content: "调试页面:ng-click,ng-src,ng-style,ng-if"
      },
      {
        content: "调试页面:ng-repeat"
      },
      {
        content: "调试js:注入"
      },
      {
        content: "调试js:元数据"
      },
      {
        content: "调试页面"
      },
    ]
  })
