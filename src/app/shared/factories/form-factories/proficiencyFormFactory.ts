import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ProficiencyFormFactory {

    public getInstance(): FormGroup {
        const instance = new FormGroup({
            name: new FormControl('', [ Validators.required ]),
            description: new FormControl('', [])
        });

        return instance;
    }

}