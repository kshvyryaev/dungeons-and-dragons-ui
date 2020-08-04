import { GameState } from './gameState';
import { CharacterDescription } from './characterDescription';
import { Characteristics } from './characteristics';
import { Skills } from './skills';
import { PhysicalState } from './physicalState';
import { Attack } from './attack';
import { Proficiency } from './proficiency';
import { Equipment } from './equipment';

export class Character {

    constructor() {
        this.gameState = new GameState();
        this.characterDescription = new CharacterDescription();
        this.characteristics = new Characteristics();
        this.skills = new Skills();
        this.physicalState = new PhysicalState();
        this.attacks = [];
        this.proficiencies = [];
        this.languages = [];
        this.features = [];
        this.equipment = [];
    }

    public id: string;

    // Имя
    public name: string;

    // Игровое состояние
    public gameState: GameState;

    // Описание персонажа
    public characterDescription: CharacterDescription;

    // Характеристики
    public characteristics: Characteristics;

    // Вдохновение
    public inspiration: number;

    // Бонус мастерства
    public proficiencyBonus: number;

    // Навыки
    public skills: Skills;

    // Пассивная мудрость
    public passiveWisdom: number;

    // Физическое состояние
    public physicalState: PhysicalState;

    // Атаки (оружие и заклинания)
    public attacks: Attack[];

    // Навыки
    public proficiencies: Proficiency[];

    // Языки
    public languages: string[];

    // Особенности и черты
    public features: string[];

    // Оборудование
    public equipment: Equipment[];

}