import { Component, OnInit, DoCheck } from '@angular/core';
import {isNumber} from "util";
import { resultPM } from '../shared/resultPM';
import { floatNum } from '../shared/global';
import { CocomoService } from '../cocomo.service';
import { Cocomo } from '../shared/cocomo';
import { CocomoChartComponent } from '../cocomoChartPM/cocomo-chart-pm.component';
import {CocomoChartTMComponent} from "../cocomoChartTM/cocomo-chart-tm.component";


@Component({
    selector: 'app-cocomo-intermediate',
    templateUrl: 'cocomo-intermediate.component.html',
    styleUrls: ['cocomo-intermediate.component.css'],
    providers: [CocomoChartComponent]
})

export class CocomoIntermediateComponent implements OnInit, DoCheck {
    a: number;
    b: number;
    c: number;
    d: number;
    size: number;
    dataPM: number[];
    dataTM: number[];
    floatNum: number;
    resTM: number;
    resPM: number;
    row: number;
    cells: Cocomo[];
    values: Array<number>;
    constructor(private cellsService: CocomoService, private chartPMIntermediate: CocomoChartComponent) {
        this.size = 2000;
        this.floatNum = floatNum;
        this.row = 1;
        this.values = [0.74, 1, 0.7, 1, 1, 1, 1, 1.46, 1.29, 1.42, 1.21, 1.14, 1.24, 1.24, 1.23];
        this.resPM = 0;
        this.resTM = 0;
        this.dataPM = [];
        this.dataTM = [];
        this.a = 3.2;
        this.b = 1.05;
        this.c = 2.5;
        this.d = 0.38;
    }
    ngOnInit() {
      this.cells = this.cellsService.getCellsIntermediate();
      this.result(this.size);
      CocomoChartComponent.initCh(this.getChartIntermediate(this.a, this.b), 1);
      CocomoChartTMComponent.initCh(this.getChartTMIntermediate(), 1);
    }
    ngDoCheck() {
      this.result(this.size);
      CocomoChartComponent.initCh(this.getChartIntermediate(this.a, this.b), 1);
      CocomoChartTMComponent.initCh(this.getChartTMIntermediate(), 1);
    }
    onKey(event: any) {
      this.size = event.target.value;
      this.result(this.size);
    }
    select(row: number) {
        this.row = row;
    }
    selectCell(event, value): void {
      this.values = this.cellsService.selectCell(event, value, this.cells, this.values);
    }
    getChartIntermediate(a, b): number[] {
        const chartData = this.cellsService.getChartArr();

        for ( let i = 0; i < chartData.length; i++) {
          this.dataPM[i] = parseFloat(this.resultPmIntermediate(chartData[i], a, b).toFixed(this.floatNum));
        }
        return this.dataPM;
    }
    getChartTMIntermediate(): number[] {
        const chartPM = this.dataPM;
      for ( let i = 0; i < chartPM.length; i++) {
        this.dataTM[i] = this.resultTM(this.c, chartPM[i], this.d);
      }
      return this.dataTM;
    }
    resultTM(c, resPM, d) {
        return c * Math.pow(resPM, d);
    }

    result(size: number) {
        switch (this.row) {
            case 1: {
                this.a = 3.2;
                this.b = 1.05;
                this.c = 2.5;
                this.d = 0.38;
                this.resPM = this.resultPmIntermediate(size, this.a, this.b);
                this.resTM = this.resultTM(this.c, this.resPM, this.d);
                break;
            }
            case 2: {
                this.a = 3.0;
                this.b = 1.12;
                this.c = 2.5;
                this.d = 0.35;
                this.resPM = this.resultPmIntermediate(size, this.a, this.b);
                this.resTM = this.resultTM(this.c, this.resPM, this.d);

              break;
            }
            case 3: {
                this.a = 2.8;
                this.b = 1.20;
                this.c = 2.5;
                this.d = 0.32;
                this.resPM = this.resultPmIntermediate(size, this.a, this.b);
                this.resTM = this.resultTM(this.c, this.resPM, this.d);
                break;
            }
        }
    }
    resultPmIntermediate(size, a, b) {
        return this.cellsService.multiplyArrElement(this.values) * resultPM(a, b, size);
    }
}
