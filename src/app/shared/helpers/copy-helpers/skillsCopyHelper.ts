import { Injectable } from '@angular/core';
import { Skills } from '../../entities/skills';

@Injectable({
    providedIn: 'root'
})
export class SkillsCopyHelper {

    public copyOne(skills: Skills): Skills {
        const skillsCopy = new Skills();
        skillsCopy.acrobatics = skills.acrobatics;
        skillsCopy.hasAcrobaticsMastery = skills.hasAcrobaticsMastery;
        skillsCopy.animalHandling = skills.animalHandling;
        skillsCopy.hasAnimalHandlingMastery = skills.hasAnimalHandlingMastery;
        skillsCopy.arcana = skills.arcana;
        skillsCopy.hasArcanaMastery = skills.hasArcanaMastery;
        skillsCopy.athletics = skills.athletics;
        skillsCopy.hasAthleticsMastery = skills.hasAthleticsMastery;
        skillsCopy.deception = skills.deception;
        skillsCopy.hasDeceptionMastery = skills.hasDeceptionMastery;
        skillsCopy.history = skills.history;
        skillsCopy.hasHistoryMastery = skills.hasHistoryMastery;
        skillsCopy.insight = skills.insight;
        skillsCopy.hasInsightMastery = skills.hasInsightMastery;
        skillsCopy.intimidation = skills.intimidation;
        skillsCopy.hasIntimidationMastery = skills.hasIntimidationMastery;
        skillsCopy.investigation = skills.investigation;
        skillsCopy.hasInvestigationMastery = skills.hasInvestigationMastery;
        skillsCopy.medicine = skills.medicine;
        skillsCopy.hasMedicineMastery = skills.hasMedicineMastery;
        skillsCopy.nature = skills.nature;
        skillsCopy.hasNatureMastery = skills.hasNatureMastery;
        skillsCopy.perception = skills.perception;
        skillsCopy.hasPerceptionMastery = skills.hasPerceptionMastery;
        skillsCopy.performance = skills.performance;
        skillsCopy.hasPerformanceMastery = skills.hasPerformanceMastery;
        skillsCopy.persuasion = skills.persuasion;
        skillsCopy.hasPersuasionMastery = skills.hasPersuasionMastery;
        skillsCopy.religion = skills.religion;
        skillsCopy.hasReligionMastery = skills.hasReligionMastery;
        skillsCopy.sleightOfHand = skills.sleightOfHand;
        skillsCopy.hasSleightOfHandMastery = skills.hasSleightOfHandMastery;
        skillsCopy.stealth = skills.stealth;
        skillsCopy.hasStealthMastery = skills.hasStealthMastery;
        skillsCopy.survival = skills.survival;
        skillsCopy.hasSurvivalMastery = skills.hasSurvivalMastery;

        return skillsCopy;
    }

}