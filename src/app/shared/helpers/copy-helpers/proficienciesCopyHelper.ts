import { Injectable } from '@angular/core';
import { Proficiency } from '../../entities/proficiency';

@Injectable({
    providedIn: 'root'
})
export class ProficienciesCopyHelper {

    public copyMany(proficiencies: Proficiency[]): Proficiency[] {
        const proficienciesCopy: Proficiency[] = [];

        proficiencies.forEach(proficiency => {
            const proficiencyCopy = this.copyOne(proficiency);
            proficienciesCopy.push(proficiencyCopy);
        });

        return proficienciesCopy;
    }

    public copyOne(proficiency: Proficiency): Proficiency {
        const proficiencyCopy = new Proficiency();
        proficiencyCopy.name = proficiency.name;
        proficiencyCopy.description = proficiency.description;

        return proficiencyCopy;
    }

}