import { Injectable } from '@angular/core';
import { Character } from '../../entities/character';
import { CollectionEqualsHelper } from './collectionEqualsHelper';
import { GameStateEqualsHelper } from './gameStateEqualsHelper';
import { CharacterDescriptionEqualsHelper } from './characterDescriptionEqualsHelper';
import { CharacteristicsEqualsHelper } from './characteristicsEqualsHelper';
import { SkillsEqualsHelper } from './skillsEqualsHelper';
import { PhysicalStateEqualsHelper } from './physicalStateEqualsHelper';
import { AttacksEqualsHelper } from './attacksEqualsHelper';
import { ProficienciesEqualsHelper } from './proficienciesEqualsHelper';
import { EquipmentEqualsHelper } from './equipmentEqualsHelper';

@Injectable({
    providedIn: 'root'
})
export class CharactersEqualsHelper {

    constructor(
        private stringsEqualsHelper: CollectionEqualsHelper<string>,
        private gameStateEqualsHelper: GameStateEqualsHelper,
        private characterDescriptionEqualsHelper: CharacterDescriptionEqualsHelper,
        private characteristicsEqualsHelper: CharacteristicsEqualsHelper,
        private skillsEqualsHelper: SkillsEqualsHelper,
        private physicalStateEqualsHelper: PhysicalStateEqualsHelper,
        private attacksEqualsHelper: AttacksEqualsHelper,
        private proficienciesEqualsHelper: ProficienciesEqualsHelper,
        private equipmentEqualsHelper: EquipmentEqualsHelper
    ) { }

    public equalsMany(characters1: Character[], characters2: Character[]): boolean {
        if (characters1.length !== characters2.length) {
            return false;
        }

        for (let index = 0; index < characters1.length; index++) {
            const character1 = characters1[index];
            const character2 = characters2[index];

            if (!this.equalsOne(character1, character2)) {
                return false;
            }
        }

        return true;
    }

    public equalsOne(character1: Character, character2: Character): boolean {
        if (character1.id === character2.id
            && character1.name === character2.name
            && this.gameStateEqualsHelper.equalsOne(character1.gameState, character2.gameState)
            && this.characterDescriptionEqualsHelper.equalsOne(character1.characterDescription, character2.characterDescription)
            && this.characteristicsEqualsHelper.equalsOne(character1.characteristics, character2.characteristics)
            && character1.inspiration === character2.inspiration
            && character1.proficiencyBonus === character2.proficiencyBonus
            && this.skillsEqualsHelper.equalsOne(character1.skills, character2.skills)
            && character1.passiveWisdom === character2.passiveWisdom
            && this.physicalStateEqualsHelper.equalsOne(character1.physicalState, character2.physicalState)
            && this.attacksEqualsHelper.equalsMany(character1.attacks, character2.attacks)
            && this.proficienciesEqualsHelper.equalsMany(character1.proficiencies, character2.proficiencies)
            && this.stringsEqualsHelper.equalsMany(character1.languages, character2.languages)
            && this.stringsEqualsHelper.equalsMany(character1.features, character2.features)
            && this.equipmentEqualsHelper.equalsMany(character1.equipment, character2.equipment)) {
                return true;
        }

        return false;
    }

}