import { Component, OnInit } from '@angular/core';
import { AuthenticationServiceService } from '../../services/AuthenticationServiceService';
import { UserService } from '../../services/user.service';
import { User } from '../../domains/User';
import { NgForm } from '@Angular/forms';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrls: ['./signup-component.component.sass']
})
export class SignupComponentComponent implements OnInit {

  errorMessage: string;
  showError: boolean;
  constructor(private authenticationService: AuthenticationServiceService, private userService: UserService) { }

  ngOnInit() {
  }

  signup(signupFormData: NgForm): void {

    this.authenticationService.signup(signupFormData.value.email, signupFormData.value.password)
    
    .then(
      (userInfo) => {
        const user: User = new User(signupFormData.value.email,
          signupFormData.value.name,
          signupFormData.value.mobile,
          userInfo.uid, 0, '');
        this.writeNewUser(user);
      }
    ).catch(
      (error) => {

        this.showError = true;
        this.errorMessage = error.message;
      }
    );
  }

  writeNewUser(user: User): void {
    this.userService.addUser(user);
  }
}
