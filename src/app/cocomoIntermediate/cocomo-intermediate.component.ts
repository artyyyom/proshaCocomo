import { Component, OnInit } from '@angular/core';
import {isNumber} from "util";
import { resultPM } from '../shared/resultPM';
import { floatNum } from '../shared/global';
import { CocomoService } from '../cocomo.service';
import { Cocomo } from '../shared/cocomo';


@Component({
    selector: 'app-cocomo-intermediate',
    templateUrl: 'cocomo-intermediate.component.html',
    styleUrls: ['cocomo-intermediate.component.css']
})

export class CocomoIntermediateComponent implements OnInit {
    data: number[];
    floatNum: number;
    resTM: number;
    resPM: number;
    row: number;
    cells: Cocomo[];
    values: Array<number>;
    constructor(private cellsService: CocomoService) {
        this.floatNum = floatNum;
        this.row = 1;
        this.values = [0.74, 1, 0.7, 1, 1, 1, 1, 1.46, 1.29, 1.42, 1.21, 1.14, 1.24, 1.24, 1.23];
        this.resPM = 0;
        this.resTM = 0;
        this.data = [];
    }
    ngOnInit() {
      this.cells = this.cellsService.getCellsIntermediate();
    }
    select(row: number) {
        this.row = row;
    }
    selectCell(event, value): void {
      this.values = this.cellsService.selectCell(event, value, this.cells, this.values);
    }
    setChartIntermediate(a, b) {
        let chartData = this.cellsService.getChartArr();

        for( let i = 0; i < chartData.length; i++) {
            this.data[i] = parseFloat(this.resultPmIntermediate(chartData[i], a,b).toFixed(this.floatNum));
        }
        this.cellsService.setChartIntermediate(this.data);
    }

    resultTM(c, resPM, d){
        return c * Math.pow(resPM, d);
    }

    result(size: number) {
        switch (this.row) {
            case 1: {
                const a = 3.2;
                const b = 1.05;
                const c = 2.5;
                const d = 0.38;
                this.resPM = this.resultPmIntermediate(size, a, b);
                this.resTM = this.resultTM(c, this.resPM, d);
                this.setChartIntermediate(a, b);
                break;
            }
            case 2: {
                const a = 3.0;
                const b = 1.12;
                const c = 2.5;
                const d = 0.35;                
                this.resPM = this.resultPmIntermediate(size, a, b);
                this.resTM = this.resultTM(c, this.resPM, d);
                this.setChartIntermediate(a, b);
                break;
            }
            case 3: {               
                const a = 2.8;
                const b = 1.20;
                const c = 2.5;
                const d = 0.32;                 
                this.resPM = this.resultPmIntermediate(size, a, b);
                this.resTM = this.resultTM(c, this.resPM, d);
                this.setChartIntermediate(a, b);
                break;
            }
        }
    }
    resultPmIntermediate(size, a, b) {
        return this.cellsService.multiplyArrElement(this.values) * resultPM(a, b, size);
    }
}
