import { Injectable } from '@angular/core';
import { Proficiency } from '../../entities/proficiency';
import { EqualsHelper } from './equalsHelper';

@Injectable({
    providedIn: 'root'
})
export class ProficienciesEqualsHelper {

    constructor(private equalsHelper: EqualsHelper) { }

    public equalsMany(proficiencies1: Proficiency[], proficiencies2: Proficiency[]): boolean {
        if (proficiencies1.length !== proficiencies2.length) {
            return false;
        }

        for (let index = 0; index < proficiencies1.length; index++) {
            const proficiency1 = proficiencies1[index];
            const proficiency2 = proficiencies2[index];

            if (!this.equalsOne(proficiency1, proficiency2)) {
                return false;
            }
        }

        return true;
    }

    public equalsOne(proficiency1: Proficiency, proficiency2: Proficiency): boolean {
        if (proficiency1.name === proficiency2.name
            && this.equalsHelper.isNonRequiredStringsEqual(proficiency1.description, proficiency2.description)) {
                return true;
        }

        return false;
    }

}