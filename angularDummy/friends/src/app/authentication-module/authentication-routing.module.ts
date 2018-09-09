import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponentComponent } from './components/signup-component/signup-component.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path:'app-friends-signup', component: SignupComponentComponent},
  {path:'app-friends-login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
