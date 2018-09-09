import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthenticationServiceService {

  constructor(private angularFireAuth: AngularFireAuth) { }

  public signup(email: string, password: string): Promise<any> {

    return this.angularFireAuth.auth.createUserWithEmailAndPassword(email, password);
  }

  /**
   * login
email: string, password: string  : Promise<any>  */
  public login(email: string, password: string): Promise<any> {

    return this.angularFireAuth.auth.signInWithEmailAndPassword(email, password);
  }

  /**
   * isAuthenticated
  :boolean  */
  public isAuthenticated(): boolean {

    const user = this.angularFireAuth.auth.currentUser;
    return user ? true : false;
  }

  /**
   * passwordReset
email: string  :Promise<any>  */
  public passwordReset(email: string): Promise<any> {

    return this.angularFireAuth.auth.sendPasswordResetEmail(email);
  }

  /**
   * signout
 :Promise<any>  */
  public signout(): Promise<any> {

    return this.angularFireAuth.auth.signOut();
  }

}
