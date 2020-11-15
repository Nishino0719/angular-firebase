import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/interfaces/pet';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pet: Pet = {
    petImageId: 1,
    name: 'テストペット',
    level: 4,
    exp: 200,
    trainerId: '1',
    gender: 'male'

  };
  constructor() { }

  ngOnInit(): void {
  }

}
