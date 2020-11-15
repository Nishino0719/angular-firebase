import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { User } from '@firebase/auth-types';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  afUser$: Observable<User> = this.afAuth.user;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {
    this.afUser$.subscribe(user => console.log(user));
  }

  // tslint:disable-next-line: typedef
  login(): void  {
    this.afAuth.signInWithPopup(
      new firebase.default.auth.GithubAuthProvider()
    );
    this.router.navigateByUrl('create');
  }

  logout(): void {
    this.afAuth.signOut();
    this.router.navigateByUrl('/welcome');
  }


}
