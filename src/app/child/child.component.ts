import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  /* @Input()
  arrList: Array<number> = [7,5,2,1,-3,9];
  @Output()
  arrSelectedEventEmitter =  new EventEmitter();*/

  @Input() msgFromParent: any[];
  @Output() callParent = new EventEmitter();

  name = 'Test 2';

  currentMsgToParent = 'Test';

  msgToParent() {
    this.callParent.emit(this.currentMsgToParent);
  }

  ngOnInit() {}
}
