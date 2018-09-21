import { Component } from '@angular/core';
import { AuthenticationServiceService } from '../authentication-module/services/AuthenticationServiceService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'app';

  authenticationService: AuthenticationServiceService;

  constructor(private authService: AuthenticationServiceService) {

    this.authenticationService = authService;

  }
}
