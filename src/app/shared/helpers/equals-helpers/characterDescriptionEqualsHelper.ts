import { Injectable } from '@angular/core';
import { CharacterDescription } from '../../entities/characterDescription';
import { EqualsHelper } from './equalsHelper';

@Injectable({
    providedIn: 'root'
})
export class CharacterDescriptionEqualsHelper {

    constructor(private equalsHelper: EqualsHelper) { }

    public equalsOne(characterDescription1: CharacterDescription, characterDescription2: CharacterDescription): boolean {
        if (this.equalsHelper.isNonRequiredStringsEqual(
                characterDescription1.personalityTraits,
                characterDescription2.personalityTraits)
            && this.equalsHelper.isNonRequiredStringsEqual(characterDescription1.ideals, characterDescription2.ideals)
            && this.equalsHelper.isNonRequiredStringsEqual(characterDescription1.bonds, characterDescription2.bonds)
            && this.equalsHelper.isNonRequiredStringsEqual(characterDescription1.flaws, characterDescription2.flaws)) {
                return true;
        }

        return false;
    }

}