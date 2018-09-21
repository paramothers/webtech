import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-alert',
  templateUrl: './ErrorAlert.component.html',
  styleUrls: ['./ErrorAlert.component.sass']
})
export class ErrorAlertComponent implements OnInit {

  constructor() { }

  @Input() errorMessage: any;

  ngOnInit() {
  }

}
