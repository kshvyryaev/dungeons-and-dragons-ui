import { Injectable } from '@angular/core';
import { CharacterDescription } from '../../entities/characterDescription';

@Injectable({
    providedIn: 'root'
})
export class CharacterDescriptionCopyHelper {

    public copyOne(characterDescription: CharacterDescription): CharacterDescription {
        const characterDescriptionCopy = new CharacterDescription();
        characterDescriptionCopy.personalityTraits = characterDescription.personalityTraits;
        characterDescriptionCopy.ideals = characterDescription.ideals;
        characterDescriptionCopy.bonds = characterDescription.bonds;
        characterDescriptionCopy.flaws = characterDescription.flaws;

        return characterDescriptionCopy;
    }

}