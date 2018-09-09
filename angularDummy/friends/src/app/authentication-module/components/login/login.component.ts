import { Component, OnInit } from '@angular/core';
import { User } from '../../domains/User';
import { Router } from '@angular/router';
import { AuthenticationServiceService } from '../../services/AuthenticationServiceService';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserService } from '../../services/user.service';
import { NgForm } from '@Angular/forms';

@Component({
  selector: 'app-friends-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {


  gerUserInfo(uid: string): any {

    this.userService.getUser(uid).subscribe(snapshot => this.user = snapshot);
    console.log(this.user);
  }

  onLogin(loginFormData: NgForm): void {

    this.authenticationService.login(loginFormData.value.email, loginFormData.value.password)
      .then((user) => {

        console.log('logged in. user..' + user);
        console.log('logged locakid...' + user.localId);
        const uid: string = user.localId;

        this.gerUserInfo(uid);

        this.navigateToUserProfile();

      }).catch((error) => {

        this.errorMessage = error.message;
        this.showError = true;
      });
  }

  private navigateToUserProfile() {

    this.router.navigateByUrl('/app-friends-userprofile');
  }
  onReset(resetFormData: NgForm): void {

    this.authenticationService.passwordReset(resetFormData.value.email).then(
      () => alert('Reset eMail sent to your mail account')
    ).catch((error) => {
      this.errorMessage = error.message;
      this.showError = true;
    });
  }

  showError: boolean;
  errorMessage: string;
  private user: User;

  constructor(private userService: UserService,
    private router: Router,
    private authenticationService: AuthenticationServiceService,
    private angularFireAuth: AngularFireAuth
  ) {

    this.angularFireAuth.auth.onAuthStateChanged(user => {

      if (user) {
        this.gerUserInfo(user.uid);
      }
    });
  }

  ngOnInit() {
  }

}
