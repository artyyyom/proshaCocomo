import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { resultPM } from '../shared/resultPM';

const cells = [
    {
      title: ['1. PREC. Preceden tedness.', 'Прецедентно сть, наличие опыта аналогичных разработок', 'опыт в продукте и платформе отсутств ует', 'продукт и платформа немного знакомы', 'некоторый опыт в продукте и платформ  присутствует', 'продукт и платформа в основном известны', 'продукт и платформа в большой степени знакомы', 'продукт и платформа полностью знакомы'],
      selected: 2,
      values: [6.20, 4.96, 3.72, 2.48, 1.24, 0.00],
    },
    {
      title: ['2. FLEX. Develop ment Flexibilit y', 'Гибкость процесса разработки', 'процесс строго детерми нирован', 'допускаются некоторые компромиссы', 'значительная жесткость процесса', 'относительная жесткость процесса', 'незначительная жесткость процесса', 'определены только общие цели'],
      selected: 2,
      values: [5.07, 4.05, 3.04, 2.03, 1.01, 0.00]
    },
    {
      title: ['3. RESL. Architect ure / Risk Resoluti on', 'Архитектура и разрешение рисков', 'риски известны / проанализированы на 20%', 'риски известны / проанализирован ы на 40%', 'риски известны / проанализирован ы на 60%', 'риски известны / проанализирован ы на 75%', 'риски известны / проанализированы на 90%', 'риски разрешен ы на 100%'],
      selected: 2,
      values: [7.07, 5.65, 4.24, 2.83, 1.41, 0.00]
    },
    {
      title: ['4. TEAM Team Cohesion', 'Сработанность команды', 'формальные взаимодействия', 'тяжелое взаимодействие до некоторой степени', 'чаще всего коллективная работа', 'в основном коллективная работа', 'высокая степень взаимодествия', 'полное доверие, взаимозаменяемость и взаимопомощь',],
      selected: 2,
      values: [5.48, 4.38, 3.29, 2.19, 1.10, 0.00]
    },
    {
      title: ['5. PMAT Process Maturity', 'Зрелость процессов', 'CMM Уровень 1 (ниже среднего)', 'СММ Уровень 1(выше среднего)', 'CMM Уровень 2', 'СММ Уровень 3', 'СММ Уровень 4', 'СММ Уровень 5'],
      selected: 2,
      values: [7.80, 6.24, 4.68, 3.12, 1.56, 0.00]
    }
];

@Component({
    selector: 'app-cocomo-2-scale-factors',
    templateUrl: 'cocomo-2-scale-factors.component.html',
    styleUrls: ['cocomo-2-scale-factors.component.css']
})

export class Cocomo2ScaleFactorsComponent implements OnInit {
    cells = cells;
    values: Array<number>;
    resPMPrevent: number;
    resPMDeep: number;
    @Output() resultE: EventEmitter<number>;
    constructor() {
        this.resPMPrevent = 0;
        this.values = [6.20, 5.07, 7.07, 5.48, 7.80];
        this.resPMDeep = 0;
        this.resultE = new EventEmitter<number>();
    }
    ngOnInit() {
      this.result();
    }
    selectCell(event) {
        if (!event.target.cellIndex || event.target.cellIndex === 1) {
            return;
        }

        if (cells[event.path[1].rowIndex - 2].selected !== event.target.cellIndex) {
            this.cells[event.path[1].rowIndex - 2].selected = event.target.cellIndex;
            this.values[event.path[1].rowIndex - 2] = this.cells[event.path[1].rowIndex - 2].values[event.target.cellIndex - 2];
        }
        this.result();
    }
    sumArr(arr): number {
      let sum = 0;
      for ( let i = 0; i < arr.length; i++ ) {
        sum += arr[i];
      }
     return sum;
    }
    result() {
      this.resultE.emit(0.91 + 0.01 * this.sumArr(this.values));
    }
}
