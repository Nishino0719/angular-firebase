import { Pipe, PipeTransform } from '@angular/core';
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

  transform(pet: Pet, ...args: any[]): any {
    const totalExp = pet.exp;
    const level = pet.level;
    const baseExp = exTable[level - 2] || 0;
    const nextExp = exTable[level - 1] - baseExp;
    const exp = totalExp - baseExp;
    return exp + '/' + nextExp;
  }

}
