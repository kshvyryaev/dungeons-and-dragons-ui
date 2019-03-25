import { HitDice } from './hitDice';
import { DeathSaves } from './deathSaves';

export class PhysicalState {
    
    constructor() {
        this.hitDice = new HitDice();
        this.deathSaves = new DeathSaves();
    }

    // Класс доспеха
    public armorClass: number;

    // Инициатива
    public initiative: number;

    // Скорость
    public speed: number;

    // Максимальное количество здоровья
    public maxHitPoints: number;

    // Текущее количество зоровья
    public currentHitPoints: number;

    // Временное количество здоровья
    public temporaryHitPoints: number;

    // Кости очков здоровья
    public hitDice: HitDice;

    // Состояние спасения от смерти
    public deathSaves: DeathSaves;
    
}