angular.module('starter.controllers', [])

  .controller('LogCtrl', function ($scope) {
    $scope.data = {};
    $scope.autoLog = true;
    $scope.autoFullLog = false;

    var logTimer, fullLogTimer;

    /**
     * 初始化
     */
    var initilize = function () {
      triggerLog({type: "log", enable: $scope.autoLog});
      triggerLog({type: "fullLog", enable: $scope.autoFullLog})
    };

    /**
     * 打印log函数
     * @param logType
     * @param content
     */
    var logFn = function (logType, content) {
      var fnArr = [];
      if (logType == "log") {
        fnArr = ["log"];
      } else if (logType == "fullLog") {
        fnArr = [
          "log",
          "info",
          "warn",
          "error"
        ]
      } else if (logType == "userLog") {
        console.log("用户执行log:" + content || "");
        return;
      }

      for (var i in fnArr) {
        var fnName = fnArr[i];
        console[fnName] && console[fnName]("自动" + logType +
          ";类型:" + fnName +
          ";时间:" + (new Date()).toLocaleTimeString())
      }
    };

    /**
     * 触发 log打印
     * @param param
     */
    var triggerLog = function (param) {
      var type = param.type;
      var enable = param.enable;

      if (type == "log") {
        if (enable) {
          logTimer = setInterval(function () {
            logFn(type)
          }, 1000)
        } else {
          clearInterval(logTimer);
          logTimer = null;
        }
      } else if (type == "fullLog") {
        if (enable) {
          fullLogTimer = setInterval(function () {
            logFn(type)
          }, 1000)
        } else {
          clearInterval(fullLogTimer);
          fullLogTimer = null;
        }
      } else {
        logFn(type, param.content || "");
      }
    };


    $scope.onClickLog = function () {
      $scope.autoLog = !$scope.autoLog;
      triggerLog({type: "log", enable: $scope.autoLog})
    };

    $scope.onClickFullLog = function () {
      $scope.autoFullLog = !$scope.autoFullLog;
      triggerLog({type: "fullLog", enable: $scope.autoFullLog})
    };

    $scope.onClickUserLog = function () {
      triggerLog({type: "userLog", content: $scope.data.userLog})
    };

    initilize();

  })

  .controller('NetCtrl', function ($scope, Chats) {

  })

  .controller('LocalstorageCtrl', function ($scope) {

  });
