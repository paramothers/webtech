import { Component, inject, Inject } from '@angular/core';
import { AppConfig } from './AppConfig';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(@Inject('AppConfig') config) {

    console.log('values from Appconfig ' + config.age);
  }
}
