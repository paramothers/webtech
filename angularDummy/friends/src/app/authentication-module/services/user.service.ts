import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from '../domains/User';
import { USERS_CHILD } from '../../services/databaseconstant';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {

  constructor(private fireDb: AngularFireDatabase) { }

  public addUser(user: User): void{

    this.fireDb.object(`${USERS_CHILD}/${user.uid}`).set(user);
  }

  /**
   * getUser
uid: string : Observable<User>  */
  public getUser(uid: string): Observable<User> {
    
    return this.fireDb.object<User>(`${USERS_CHILD}/${uid}`).valueChanges();
  }
}
