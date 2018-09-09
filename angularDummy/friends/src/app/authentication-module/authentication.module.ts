import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationServiceService } from './services/AuthenticationServiceService';
import { SignupComponentComponent } from './components/signup-component/signup-component.component';
import { UserService } from './services/user.service';
import { PasswordEqualValidatorDirective } from '../utils/PasswordEqualValidator.directive';
import { FormsModule } from '@Angular/forms';
import { ErrorAlertComponent } from '../shared/ErrorAlertComponent/ErrorAlert.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule 
  ],
  declarations: [
    SignupComponentComponent,
    ErrorAlertComponent,
    PasswordEqualValidatorDirective,
    LoginComponent
  ],
  providers:[
    AuthenticationServiceService,
    UserService
  ]

})
export class AuthenticationModule { }
