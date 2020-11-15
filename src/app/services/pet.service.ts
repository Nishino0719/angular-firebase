import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Pet } from '../interfaces/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(
    private db: AngularFirestore,
    private snackBar: MatSnackBar
  ) { }


  createPet(pet: Pet): any {
    const id = this.db.createId();
    return this.db.doc(`pets/${id}`).set(pet).then(() => {
      this.snackBar.open('ペットを作成しました', null, {
        duration: 2000
      });
    });
  }
}
