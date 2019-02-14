import { Component, OnInit } from '@angular/core';
import {GestureEventData, PanGestureEventData, PinchGestureEventData} from "tns-core-modules/ui/gestures";
import {GridLayout} from "tns-core-modules/ui/layouts/grid-layout";

@Component({
  selector: 'ns-my-gesture',
  templateUrl: './my-gesture.component.html',
  styleUrls: ['./my-gesture.component.css'],
  moduleId: module.id,
})
export class MyGestureComponent implements OnInit {

  htmlString: string = "<span><h1>HtmlView demo in <font color=\"blue\">NativeScript</font> App</h1></span>";
  constructor() { }

  ngOnInit() {
  }

  doubleTabbed(event: GestureEventData) {

    console.log("view name ", event.view);
    console.log("object name ", event.object);
    console.log("event name ", event.eventName);

    let grid = <GridLayout>event.object;
    grid.rotate =0;
    grid.animate({
      rotate: 360,
      duration: 2000
    })
  }

  longPress(event: GestureEventData){

    console.log("view name ", event.view );
    console.log("object name ", event.object);
    console.log("event name ", event.eventName);

    let grid = <GridLayout>event.object;
    grid.rotate = 0;

    grid.animate({
      rotate: 280,
      duration: 2500
    })
  }

  onPan(event: PanGestureEventData){

    console.log("view ", event.view);
    console.log("object ", event.object);
    console.log("event name ", event.eventName);
    console.log(" Pan delta ["+event.deltaX+", "+event.deltaY+"] state "+event.state);

  }

  onPinch(event: PinchGestureEventData){

    console.log("pinch scale "+event.scale+" state "+event.state);
  }
}
