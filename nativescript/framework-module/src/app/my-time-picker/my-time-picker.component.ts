import { Component, OnInit } from '@angular/core';
import {TimePicker} from "tns-core-modules/ui/time-picker";
import {TextField} from "tns-core-modules/ui/text-field";
import {TextView} from "tns-core-modules/ui/text-view";
import {Time} from "@angular/common";

@Component({
  selector: 'ns-my-time-picker',
  templateUrl: './my-time-picker.component.html',
  styleUrls: ['./my-time-picker.component.css'],
  moduleId: module.id,
})
export class MyTimePickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLoaded(args){

    let timePicker = <TimePicker>args.object;
    timePicker.hour = 9;
    timePicker.minute = 26;

  }

  onTimeChange(args): void {

    console.log(args.value);
  }

}
