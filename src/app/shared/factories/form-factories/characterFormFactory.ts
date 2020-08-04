import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class CharacterFormFactory {

    public getFirstStepForm(): FormGroup {
        const instance = new FormGroup({
            name: new FormControl('', [ Validators.required ])
        });

        return instance;
    }

    public getSecondStepForm(): FormGroup {
        const instance = new FormGroup({
            // GameState
            class: new FormControl('', [ Validators.required ]),
            level: new FormControl('', [ Validators.required ]),
            background: new FormControl('', []),
            faction: new FormControl('', [ Validators.required ]),
            race: new FormControl('', [ Validators.required ]),
            experiencePoints: new FormControl('', [])
        });

        return instance;
    }

    public getThirdStepForm(): FormGroup {
        const instance = new FormGroup({
            // CharacterDescription
            personalityTraits: new FormControl('', []),
            ideals: new FormControl('', []),
            bonds: new FormControl('', []),
            flaws: new FormControl('', [])
        });

        return instance;
    }

    public getFourthStepForm(): FormGroup {
        const instance = new FormGroup({
            // Characteristics
            strength: new FormControl('', [ Validators.required ]),
            constitution: new FormControl('', [ Validators.required ]),
            dexterity: new FormControl('', [ Validators.required ]),
            intelligence: new FormControl('', [ Validators.required ]),
            wisdom: new FormControl('', [ Validators.required ]),
            charisma: new FormControl('', [ Validators.required ]),

            inspiration: new FormControl('', [ Validators.required ]),
            proficiencyBonus: new FormControl('', [ Validators.required ]),

            passiveWisdom: new FormControl('', [ Validators.required ])
        });

        return instance;
    }

    public getFifthStepForm(): FormGroup {
        const instance = new FormGroup({
            // Skills
            acrobatics: new FormControl('', [ Validators.required ]),
            animalHandling: new FormControl('', [ Validators.required ]),
            arcana: new FormControl('', [ Validators.required ]),
            athletics: new FormControl('', [ Validators.required ]),
            deception: new FormControl('', [ Validators.required ]),
            history: new FormControl('', [ Validators.required ]),
            insight: new FormControl('', [ Validators.required ]),
            intimidation: new FormControl('', [ Validators.required ]),
            investigation: new FormControl('', [ Validators.required ]),
            medicine: new FormControl('', [ Validators.required ]),
            nature: new FormControl('', [ Validators.required ]),
            perception: new FormControl('', [ Validators.required ]),
            performance: new FormControl('', [ Validators.required ]),
            persuasion: new FormControl('', [ Validators.required ]),
            religion: new FormControl('', [ Validators.required ]),
            sleightOfHand: new FormControl('', [ Validators.required ]),
            stealth: new FormControl('', [ Validators.required ]),
            survival: new FormControl('', [ Validators.required ])
        });

        return instance;
    }

    public getSixthStepForm(): FormGroup {
        const instance = new FormGroup({
            // PhysicalState
            armorClass: new FormControl('', [ Validators.required ]),
            initiative: new FormControl('', [ Validators.required ]),
            speed: new FormControl('', [ Validators.required ]),
            maxHitPoints: new FormControl('', [ Validators.required ]),
            currentHitPoints: new FormControl('', []),
            temporaryHitPoints: new FormControl('', []),

            // HitDice
            hitDiceType: new FormControl('', [ Validators.required ]),
            hitDiceTotal: new FormControl('', [ Validators.required ]),

            // DeathSaves
            successes: new FormControl('', []),
            failures: new FormControl('', [])
        });

        return instance;
    }

}