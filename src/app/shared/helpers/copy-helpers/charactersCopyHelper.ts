import { Injectable } from '@angular/core';
import { Character } from '../../entities/character';
import { GameStateCopyHelper } from './gameStateCopyHelper';
import { CharacterDescriptionCopyHelper } from './characterDescriptionCopyHelper';
import { CharacteristicsCopyHelper } from './characteristicsCopyHelper';
import { SkillsCopyHelper } from './skillsCopyHelper';
import { PhysicalStateCopyHelper } from './physicalStateCopyHelper';
import { AttacksCopyHelper } from './attacksCopyHelper';
import { ProficienciesCopyHelper } from './proficienciesCopyHelper';
import { EquipmentCopyHelper } from './equipmentCopyHelper';

@Injectable({
    providedIn: 'root'
})
export class CharactersCopyHelper {

    constructor(
        private gameStateCopyHelper: GameStateCopyHelper,
        private characterDescriptionCopyHelper: CharacterDescriptionCopyHelper,
        private characteristicsCopyHelper: CharacteristicsCopyHelper,
        private skillsCopyHelper: SkillsCopyHelper,
        private physicalStateCopyHelper: PhysicalStateCopyHelper,
        private attacksCopyHelper: AttacksCopyHelper,
        private proficienciesCopyHelper: ProficienciesCopyHelper,
        private equipmentCopyHelper: EquipmentCopyHelper
    ) { }

    public copyMany(characters: Character[]): Character[] {
        const charactersCopy: Character[] = [];

        characters.forEach(character => {
            const characterCopy = this.copyOne(character);
            charactersCopy.push(characterCopy);
        });

        return charactersCopy;
    }

    public copyOne(character: Character): Character {
        const characterCopy = new Character();
        characterCopy.id = character.id;
        characterCopy.name = character.name;
        characterCopy.gameState = this.gameStateCopyHelper.copyOne(character.gameState);
        characterCopy.characterDescription = this.characterDescriptionCopyHelper.copyOne(character.characterDescription);
        characterCopy.characteristics = this.characteristicsCopyHelper.copyOne(character.characteristics);
        characterCopy.inspiration = character.inspiration;
        characterCopy.proficiencyBonus = character.proficiencyBonus;
        characterCopy.skills = this.skillsCopyHelper.copyOne(character.skills);
        characterCopy.passiveWisdom = character.passiveWisdom;
        characterCopy.physicalState = this.physicalStateCopyHelper.copyOne(character.physicalState);
        characterCopy.attacks = this.attacksCopyHelper.copyMany(character.attacks);
        characterCopy.proficiencies = this.proficienciesCopyHelper.copyMany(character.proficiencies);
        characterCopy.languages = character.languages.slice();
        characterCopy.features = character.features.slice();
        characterCopy.equipment = this.equipmentCopyHelper.copyMany(character.equipment);

        return characterCopy;
    }

}