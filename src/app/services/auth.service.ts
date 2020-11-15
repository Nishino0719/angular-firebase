import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { User } from '@firebase/auth-types';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  afUser$: Observable<User> = this.afAuth.user;

  constructor(
    private afAuth: AngularFireAuth
  ) {
    this.afUser$.subscribe(user => console.log(user));
  }

  // tslint:disable-next-line: typedef
  login(): void  {
    this.afAuth.signInWithPopup(
      new firebase.default.auth.GithubAuthProvider()
    );
  }

  logout(): void {
    this.afAuth.signOut();
  }


}
