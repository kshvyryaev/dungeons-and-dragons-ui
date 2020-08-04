import { Injectable } from '@angular/core';
import { Characteristics } from '../../entities/characteristics';

@Injectable({
    providedIn: 'root'
})
export class CharacteristicsCopyHelper {

    public copyOne(characteristics: Characteristics): Characteristics {
        const characteristicsCopy = new Characteristics();
        characteristicsCopy.strength = characteristics.strength;
        characteristicsCopy.constitution = characteristics.constitution;
        characteristicsCopy.dexterity = characteristics.dexterity;
        characteristicsCopy.intelligence = characteristics.intelligence;
        characteristicsCopy.wisdom = characteristics.wisdom;
        characteristicsCopy.charisma = characteristics.charisma;

        return characteristicsCopy;
    }

}