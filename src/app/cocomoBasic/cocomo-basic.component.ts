import { Component, OnInit, DoCheck } from '@angular/core';
import { resultPM } from '../shared/resultPM';
import { floatNum } from '../shared/global';
import { CocomoService } from '../cocomo.service';
import { CocomoChartComponent } from '../cocomoChartPM/cocomo-chart-pm.component';
import { CocomoChartTMComponent } from '../cocomoChartTM/cocomo-chart-tm.component';

@Component({
    selector: 'app-cocomo-basic',
    templateUrl: 'cocomo-basic.component.html',
    styleUrls: ['cocomo-basic.component.css'],
    providers: [CocomoChartComponent, CocomoChartTMComponent]
})


export class CocomoBasicComponent implements OnInit, DoCheck {
    dataTM: number[];
    size: number;
    data: number[];
    floatNum: number;
    row: number;
    a: number;
    b: number;
    c: number;
    d: number;
    resPM: number;
    resTM: number;
    constructor(private cellsService: CocomoService, private chartPM: CocomoChartComponent) {
        this.size = 2000;
        this.row = 1;
        this.floatNum = floatNum;
        this.a = 2.4;
        this.b = 1.05;
        this.c = 2.5;
        this.d = 0.38;
        this.resTM = 0;
        this.resPM = 0;
        this.data = [];
        this.dataTM = [];
    }
    ngOnInit() {
      this.result(this.size);
      CocomoChartComponent.initCh(this.getChartPMBasic(this.a, this.b), 0);
      CocomoChartTMComponent.initCh(this.getChartTMBasic(), 0);
    }
    ngDoCheck() {
      this.result(this.size);
      CocomoChartComponent.initCh(this.getChartPMBasic(this.a, this.b), 0);
      CocomoChartTMComponent.initCh(this.getChartTMBasic(), 0);
    }
    onKey(event: any) {
      this.size = event.target.value;
      this.result(this.size);
    }
    resultTM(c: number, PM: number, d: number): number {
        return c * Math.pow(PM, d);
    }
    select(row: number) {
        this.row = row;
    }
    getChartPMBasic(a, b): number[] {
        const chartData = this.cellsService.getChartArr();
        for ( let i = 0; i < chartData.length; i++ ) {
            this.data[i] = parseFloat(resultPM(a, b, chartData[i]).toFixed(this.floatNum));
        }
        return this.data;
    }
    getChartTMBasic(): number[] {
      const dataPM = this.data;
      for ( let i = 0; i < dataPM.length; i++ ) {
        this.dataTM[i] =  parseFloat(this.resultTM(this.c, dataPM[i], this.d).toFixed(this.floatNum));
      }
      return this.dataTM;
    }
    result(size: number) {
        switch (this.row) {
            case 1: {
                this.a = 2.4;
                this.b = 1.05;
                this.c = 2.5;
                this.d = 0.38;
                this.resPM = resultPM(this.a, this.b, size);
                this.resTM = this.resultTM(this.c, this.resPM, this.d);
                break;
            }
            case 2: {
                this.a = 3.0;
                this.b = 1.12;
                this.c = 2.5;
                this.d = 0.35;
                this.resPM = resultPM(this.a, this.b, size);
                this.resTM = this.resultTM(this.c, this.resPM, this.d);
                break;
            }
            case 3: {
                this.a = 3.6;
                this.b = 1.20;
                this.c = 2.5;
                this.d = 0.32;
                this.resPM = resultPM(this.a, this.b, size);
                this.resTM = this.resultTM(this.c, this.resPM, this.d);
                break;
            }
        }
    }
}
