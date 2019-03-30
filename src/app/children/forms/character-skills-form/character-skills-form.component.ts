import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Skills } from 'src/app/shared/entities/skills';

@Component({
  selector: 'app-character-skills-form',
  templateUrl: './character-skills-form.component.html',
  styleUrls: ['./character-skills-form.component.css']
})
export class CharacterSkillsFormComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() skills: Skills;
  @Output() skillsChange = new EventEmitter<Skills>();

  constructor() { }

  ngOnInit() { }

  public onHasAcrobaticsMasteryChange(): void {
    this.skills.hasAcrobaticsMastery = !this.skills.hasAcrobaticsMastery;
    this.skillsChange.emit(this.skills);
  }

  public onAcrobaticsChange(model: number): void {
    this.skills.acrobatics = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasAnimalHandlingMasteryChange(): void {
    this.skills.hasAnimalHandlingMastery = !this.skills.hasAnimalHandlingMastery;
    this.skillsChange.emit(this.skills);
  }

  public onAnimalHandlingChange(model: number): void {
    this.skills.animalHandling = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasArcanaMasteryChange(): void {
    this.skills.hasArcanaMastery = !this.skills.hasArcanaMastery;
    this.skillsChange.emit(this.skills);
  }

  public onArcanaChange(model: number): void {
    this.skills.arcana = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasAthleticsMasteryChange(): void {
    this.skills.hasAthleticsMastery = !this.skills.hasAthleticsMastery;
    this.skillsChange.emit(this.skills);
  }

  public onAthleticsChange(model: number): void {
    this.skills.athletics = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasDeceptionMasteryChange(): void {
    this.skills.hasDeceptionMastery = !this.skills.hasDeceptionMastery;
    this.skillsChange.emit(this.skills);
  }

  public onDeceptionChange(model: number): void {
    this.skills.deception = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasHistoryMasteryChange(): void {
    this.skills.hasHistoryMastery = !this.skills.hasHistoryMastery;
    this.skillsChange.emit(this.skills);
  }

  public onHistoryChange(model: number): void {
    this.skills.history = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasInsightMasteryChange(): void {
    this.skills.hasInsightMastery = !this.skills.hasInsightMastery;
    this.skillsChange.emit(this.skills);
  }

  public onInsightChange(model: number): void {
    this.skills.insight = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasIntimidationMasteryChange(): void {
    this.skills.hasIntimidationMastery = !this.skills.hasIntimidationMastery;
    this.skillsChange.emit(this.skills);
  }

  public onIntimidationChange(model: number): void {
    this.skills.intimidation = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasInvestigationMasteryChange(): void {
    this.skills.hasInvestigationMastery = !this.skills.hasInvestigationMastery;
    this.skillsChange.emit(this.skills);
  }

  public onInvestigationChange(model: number): void {
    this.skills.investigation = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasMedicineMasteryChange(): void {
    this.skills.hasMedicineMastery = !this.skills.hasMedicineMastery;
    this.skillsChange.emit(this.skills);
  }

  public onMedicineChange(model: number): void {
    this.skills.medicine = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasNatureMasteryChange(): void {
    this.skills.hasNatureMastery = !this.skills.hasNatureMastery;
    this.skillsChange.emit(this.skills);
  }

  public onNatureChange(model: number): void {
    this.skills.nature = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasPerceptionMasteryChange(): void {
    this.skills.hasPerceptionMastery = !this.skills.hasPerceptionMastery;
    this.skillsChange.emit(this.skills);
  }

  public onPerceptionChange(model: number): void {
    this.skills.perception = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasPerformanceMasteryChange(): void {
    this.skills.hasPerformanceMastery = !this.skills.hasPerformanceMastery;
    this.skillsChange.emit(this.skills);
  }

  public onPerformanceChange(model: number): void {
    this.skills.performance = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasPersuasionMasteryChange(): void {
    this.skills.hasPersuasionMastery = !this.skills.hasPersuasionMastery;
    this.skillsChange.emit(this.skills);
  }

  public onPersuasionChange(model: number): void {
    this.skills.persuasion = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasReligionMasteryChange(): void {
    this.skills.hasReligionMastery = !this.skills.hasReligionMastery;
    this.skillsChange.emit(this.skills);
  }

  public onReligionChange(model: number): void {
    this.skills.religion = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasSleightOfHandMasteryChange(): void {
    this.skills.hasSleightOfHandMastery = !this.skills.hasSleightOfHandMastery;
    this.skillsChange.emit(this.skills);
  }

  public onSleightOfHandChange(model: number): void {
    this.skills.sleightOfHand = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasStealthMasteryChange(): void {
    this.skills.hasStealthMastery = !this.skills.hasStealthMastery;
    this.skillsChange.emit(this.skills);
  }

  public onStealthChange(model: number): void {
    this.skills.stealth = model;
    this.skillsChange.emit(this.skills);
  }

  public onHasSurvivalMasteryChange(): void {
    this.skills.hasSurvivalMastery = !this.skills.hasSurvivalMastery;
    this.skillsChange.emit(this.skills);
  }

  public onSurvivalChange(model: number): void {
    this.skills.survival = model;
    this.skillsChange.emit(this.skills);
  }

}
