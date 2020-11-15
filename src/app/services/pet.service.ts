import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { Pet } from '../interfaces/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(
    private db: AngularFirestore,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }


  createPet(pet: Pet): any {
    const id = this.db.createId();
    return this.db.doc(`pets/${id}`).set(pet).then(() => {
      this.snackBar.open('ペットを作成しました', null, {
        duration: 2000
      });
      this.router.navigateByUrl('/');
    });
  }

  getPet(trainerId: string): Observable<Pet> {
    return this.db.collection<Pet>('pets', ref => ref.where('trainerId', '==', trainerId))
      .valueChanges()
      .pipe(
        map(pets => {
          if (pets.length) {
            return pets[0];
          } else {
            return null;
          }
        })
      );
  }
}
