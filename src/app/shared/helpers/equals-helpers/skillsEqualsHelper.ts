import { Injectable } from '@angular/core';
import { Skills } from '../../entities/skills';

@Injectable({
    providedIn: 'root'
})
export class SkillsEqualsHelper {

    public equalsOne(skills1: Skills, skills2: Skills): boolean {
        if (skills1.acrobatics === skills2.acrobatics
            && skills1.hasAcrobaticsMastery === skills2.hasAcrobaticsMastery
            && skills1.animalHandling === skills2.animalHandling
            && skills1.hasAnimalHandlingMastery === skills2.hasAnimalHandlingMastery
            && skills1.arcana === skills2.arcana
            && skills1.hasArcanaMastery === skills2.hasArcanaMastery
            && skills1.athletics === skills2.athletics
            && skills1.hasAthleticsMastery === skills2.hasAthleticsMastery
            && skills1.deception === skills2.deception
            && skills1.hasDeceptionMastery === skills2.hasDeceptionMastery
            && skills1.history === skills2.history
            && skills1.hasHistoryMastery === skills2.hasHistoryMastery
            && skills1.insight === skills2.insight
            && skills1.hasInsightMastery === skills2.hasInsightMastery
            && skills1.intimidation === skills2.intimidation
            && skills1.hasIntimidationMastery === skills2.hasIntimidationMastery
            && skills1.investigation === skills2.investigation
            && skills1.hasInvestigationMastery === skills2.hasInvestigationMastery
            && skills1.medicine === skills2.medicine
            && skills1.hasMedicineMastery === skills2.hasMedicineMastery
            && skills1.nature === skills2.nature
            && skills1.hasNatureMastery === skills2.hasNatureMastery
            && skills1.perception === skills2.perception
            && skills1.hasPerceptionMastery === skills2.hasPerceptionMastery
            && skills1.performance === skills2.performance
            && skills1.hasPerformanceMastery === skills2.hasPerformanceMastery
            && skills1.persuasion === skills2.persuasion
            && skills1.hasPersuasionMastery === skills2.hasPersuasionMastery
            && skills1.religion === skills2.religion
            && skills1.hasReligionMastery === skills2.hasReligionMastery
            && skills1.sleightOfHand === skills2.sleightOfHand
            && skills1.hasSleightOfHandMastery === skills2.hasSleightOfHandMastery
            && skills1.stealth === skills2.stealth
            && skills1.hasStealthMastery === skills2.hasStealthMastery
            && skills1.survival === skills2.survival
            && skills1.hasSurvivalMastery === skills2.hasSurvivalMastery) {
                return true;
        }

        return false;
    }

}