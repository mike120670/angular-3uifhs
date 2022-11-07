import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Parent';
  msgFromChild1: any;
  currentMsgToChild = "Tesr";
  msgToChild2 = [];
  msg: any;

  msgChild2() {
    this.msgToChild2.push(this.currentMsgToChild);
  }

  getMsgFromBaby($event) {
    this.msg = $event;
  }
}
