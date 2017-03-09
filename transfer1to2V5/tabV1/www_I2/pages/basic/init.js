import {Component, ViewChild} from '@angular/core';
import {Nav} from 'ionic-angular';
import {MainTabs} from './mainTabs';

export class Init {

  constructor() {
    this.rootPage = MainTabs;
  }
}

Init.annotations = [
  new Component({
    template: `<ion-nav #myNav [root]="rootPage"></ion-nav>`,
    queries: {
      views: new ViewChild(Nav)
    }
  })
]
