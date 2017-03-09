import {App, NavParams} from 'ionic-angular';
import {Injectable, ReflectiveInjector} from '@angular/core';

// import {$stateParams} from './stateParams';
import {ListDetailPage} from '../transferController';

@Injectable()
export class CommonPathService {
  constructor(_app, state) {
    this.app = _app;
    this.state = state;

  }

  //$state.go
  go(to, param, option) {
    // this.app = ReflectiveInjector.resolveAndCreate([App]).get(App);
    var pageMap = {
      'tab.detail': ListDetailPage
    }
    var page = pageMap[to];
    this.nav = this.app.getActiveNav();
    this.nav.push(page, param, option);
  }

  //$location.path
  path(pathStr) {
    if (pathStr) {
      var self = this;
      this.page = null;
      this.param = {};
      this.option = {};

      var arr = pathStr.split('/');
      arr = arr.filter(function (item) {
        return !!item;
      })
      var map = {
        "tab/detail": {
          page: ListDetailPage,
          param: ["id"]
        }
      };

      if (arr.length > 1) {
        var path = arr[0] + "/" + arr[1];
        var obj = map[path];
        if (obj) {
          var param = {};
          for (var i = 0; i < obj.param.length && i < arr.length - 2; i++) {
            param[obj.param[i]] = arr[i + 2];
          }
          this.page = obj.page;
          this.param = param;
          setTimeout(function () {
            self.redirect();
          })
          return this;
        }
      }
    } else {
      return this.state.path();
    }

  }


  //$location.path().search();
  search(obj) {
    if (obj ) {
      for (var i in obj) {
        this.param[i] = obj[i];
      }
    } else {
      return this.state.search();
    }
  }

  redirect() {
    if (this.page) {
      this.nav = this.app.getActiveNav();
      this.nav.push(this.page, this.param);
    }

  }

  setNav(nav) {
    this.app = nav;
  }
}

CommonPathService.parameters = [
  [App],[NavParams]
];
