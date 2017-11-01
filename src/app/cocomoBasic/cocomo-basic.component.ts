import { Component } from '@angular/core';
import { resultPM } from '../shared/resultPM';
import { floatNum } from '../shared/global';

@Component({
    selector: 'app-cocomo-basic',
    templateUrl: 'cocomo-basic.component.html',
    styleUrls: ['cocomo-basic.component.css']
})


export class CocomoBasicComponent {
    floatNum: number;
    row: number;
    a: number;
    b: number;
    c: number;
    d: number;
    resPM: number;
    resTM: number;
    constructor(){
        this.row = 0;
        this.floatNum = floatNum;
        this.a = 0;
        this.b = 0;
        this.c = 0;
        this.d = 0;
        this.resTM = 0;
        this.resPM = 0;
    }
    resultTM(c: number, PM: number, d: number): number {
        return c * Math.pow(PM, d);
    }
    select(row: number) {
        this.row = row;
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
