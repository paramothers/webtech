import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../domains/User';
import { USERS_CHILD } from '../../common-module/services/databaseconstant';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {

  private subject: BehaviorSubject<User> = new BehaviorSubject(null);

  private fbStorag: any;
  private basepath: 'profile/';

  addProfileImage(user: User, file: File): any {
    // tslint:disable-next-line:quotemark
    throw new Error("Method not implemented.");
  }

  constructor(private fireDb: AngularFireDatabase) {

    // this.fbStorag = fireDb.app.storage();
  }

  public addUser(user: User): void {

    this.fireDb.object(`${USERS_CHILD}/${user.uid}`).set(user);
    this.saveUser(user);
  }

  /**
   * getUser
uid: string : Observable<User>  */
  public getUser(uid: string): Observable<User> {

    return this.fireDb.object<User>(`${USERS_CHILD}/${uid}`).valueChanges();
  }


  /**
   * saveUser
user:User  :void  */
  public saveUser(user: User): void {

    this.subject.next(user);
  }


  /**
   * getSavedUser
  : BehaviourSubject<User>  */
  public getSavedUser(): BehaviorSubject<User> {

    return this.subject;
  }

  public updateEmail(user: User, email: string): void {

    this.fireDb.object(`${USERS_CHILD}/${user.uid}`).update({
      email: email
    });
    this.saveUser(user);
  }

  public updateMobile(user: User, mobile: string): void {

    this.fireDb.object(`${USERS_CHILD}/${user.uid}`).update({ mobile: mobile });
    this.saveUser(user);
  }

  public updateName(user: User, name: string): void {

    this.fireDb.object(`${USERS_CHILD}/${user.uid}`).update({ name: name });
    this.saveUser(user);
  }



}
