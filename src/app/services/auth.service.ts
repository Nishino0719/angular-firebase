import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '@firebase/auth-types';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  afUser$: Observable<User> = this.afAuth.user;
  uid: string;
  githubId: number;

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.afUser$.subscribe(user => {
      this.githubId = +user.providerData[0].uid;
      this.uid = user && user.uid;
    });
  }

  // tslint:disable-next-line: typedef
  login(): void {
    this.afAuth.signInWithPopup(
      new firebase.default.auth.GithubAuthProvider()
    ).then(result => {
      this.snackBar.open('ようこそGitPetへ!', null, {
        duration: 2000
      });
      this.router.navigateByUrl('/create');
    });
  }

  logout(): void {
    this.afAuth.signOut().then(() => {
      this.snackBar.open('ログアウトしました', null, {
        duration: 2000
      });
      this.router.navigateByUrl('/welcome');
    });
  }


}
