import { Component, OnInit } from '@angular/core';
import {DatePicker} from "tns-core-modules/ui/date-picker";

@Component({
  selector: 'ns-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  moduleId: module.id,
})
export class DatePickerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onLoaded(args) {

    let datePicker = <DatePicker>args.object;

    datePicker.year = 1980;
    datePicker.month = 2;
    datePicker.day = 9;

    datePicker.minDate = new Date(1975,0,29);
    datePicker.maxDate = new Date(2045, 1,30);

  }

  onDayChange(args) {

    console.log("day value "+args.value+" oldValue"+args.oldValue);
  }

  oneDateChange(args) {
    console.log("date value "+args.value+" oldValue"+args.oldValue);
  }

  onMonthChange(args) {
    console.log("month value "+args.value+" oldValue"+args.oldValue);
  }

  onYearChange(args) {
    console.log("year value "+args.value+" oldValue"+args.oldValue);
  }
}
