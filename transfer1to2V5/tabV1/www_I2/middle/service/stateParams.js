import {Injectable, forwardRef} from '@angular/core';
// import {NavParams} from 'ionic-angular';


@Injectable()
export class $stateParams {
  constructor() {
    // this.navParams = navParams;
  }

  path() {

  }

  search() {
    return this.navParams.data;
  }

}

// $stateParams.parameters = [
//   [NavParams]
// ];
