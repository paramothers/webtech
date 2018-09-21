import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationServiceService } from './services/AuthenticationServiceService';
import { SignupComponentComponent } from './components/signup-component/signup-component.component';
import { UserService } from '../user-module/services/user.service';
import { FormsModule } from '@Angular/forms';
import { LoginComponent } from './components/login/login.component';
import { PasswordEqualValidatorDirective } from '../util-module/PasswordEqualValidator.directive';
import { CommonModuleModule } from '../common-module/common-module.module';
import { UserModuleModule } from '../user-module/user-module.module';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule,
    CommonModuleModule,
    UserModuleModule
  ],
  declarations: [
    SignupComponentComponent,
    LoginComponent,
    PasswordEqualValidatorDirective
  ],
  // tslint:disable-next-line:whitespace
  providers:[
    AuthenticationServiceService,
    UserService
  ]

})
export class AuthenticationModule { }
