import { Injectable } from '@angular/core';
import { Characteristics } from '../../entities/characteristics';

@Injectable({
    providedIn: 'root'
})
export class CharacteristicsEqualsHelper {

    public equalsOne(characteristics1: Characteristics, characteristics2: Characteristics): boolean {
        if (characteristics1.strength === characteristics2.strength
            && characteristics1.constitution === characteristics2.constitution
            && characteristics1.dexterity === characteristics2.dexterity
            && characteristics1.intelligence === characteristics2.intelligence
            && characteristics1.wisdom === characteristics2.wisdom
            && characteristics1.charisma === characteristics2.charisma) {
                return true;
        }

        return false;
    }

}