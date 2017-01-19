import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() {
    this._listenMsgFromApp();
  }

  _listerCallback:{};
  _listerDataType:{};

  /**
   * 向app发送消息
   * @param cmd
   * @private
   */
  _sendMsgToApp(cmd) {
    window.parent &&
    window.parent.postMessage &&
    window.parent.postMessage(JSON.stringify(cmd), 'file://');
  }

  /**
   * 监听app发送过来的 消息,初始化时就调用
   * @private
   */
  _listenMsgFromApp() {
    //监听被测App 数据接口
    (<any>window).onData = function (appData) {
      var config = appData.config || {};
      var data = appData.data;


      //switch (config.bzType) {
      //  case "log":
      //    onLogData(data);
      //    break;
      //  case "net":
      //    onNetData(data);
      //    break;
      //  case "localStorage":
      //    onLocalStorageData(config, data);
      //    break;
      //  case "mock":
      //    onMockData(config, data);
      //    break;
      //  default:
      //    cmdData(config, data);
      //    break;
      //}

    }
  }


  /**
   * 向app发送命令
   * @param option
   */
  appCmd(option) {
    var cmdStr = option.cmdStr;
    var callback = option.callback || function () {

      };

    var callbackHandle = Symbol();
    this._listerCallback[callbackHandle] = callback;
    option.callbackHandle = callbackHandle;

    this._sendMsgToApp({
      type: "cmd",
      cmdStr: cmdStr,
      param: option
    })
  }

  /**
   * 业务向 service注册，监听数据返回
   */
  registerListener(option) {
    var type = option.type;
    var callback = option.callback || function () {

      };
    this._listerDataType[type] = true;
    this._listerCallback[type] = callback;

    this._sendMsgToApp({
      type: "init-" + type,
      param: option
    })
  }

  /**
   * 业务解除 数据监听
   * @param option
   */
  unRegisterListener(option) {

  }

  localStorageCmd() {
    this._sendMsgToApp({})
  }

  //getHero(id:number):Promise<Hero> {
  //  return this.getHeroes()
  //    .then(heroes => heroes.find(hero => hero.id === id));
  //}
}
