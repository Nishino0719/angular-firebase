import { Pipe, PipeTransform } from '@angular/core';
import { relative } from 'path';
import { Pet } from './interfaces/pet';

const exTable = [
  20,
  40,
  100,
  250,
  500,
  1000,
  1500,
  4000,
  10000
];

@Pipe({
  name: 'exp'
})
export class ExpPipe implements PipeTransform {

  transform(pet: Pet, type: 'percent' | 'label'): any {
    const totalExp = pet.exp;
    const level = pet.level;
    const baseExp = exTable[level - 2] || 0;
    const nextExp = exTable[level - 1] - baseExp;
    const exp = totalExp - baseExp;
    if (type === 'percent') {
      return exp / nextExp * 100;
    } else {
      return exp + '/' + nextExp;
    }
  }

}
