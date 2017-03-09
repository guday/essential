import {Injectable, forwardRef, ReflectiveInjector} from '@angular/core';
import {NavParams} from 'ionic-angular';


@Injectable()
export class Location2 {
  constructor(navParams) {
    // this.data = {}
    this.navParams = navParams;
    // this.data = this.navParams.data;
    // this.get = this.navParams.get;
  }

  // get(name) {
  //   return this.data[name]
  // }

  path() {

  }

  search() {
    // this.navParams = ReflectiveInjector.resolveAndCreate([NavParams]).get(NavParams)
    return this.navParams.data;
  }

}

Location2.parameters = [
  [NavParams]
];
