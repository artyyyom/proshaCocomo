import { Component } from '@angular/core';

@Component({
    selector: 'app-cocomo-basic',
    templateUrl: 'cocomo-basic.component.html',
    styleUrls: ['cocomo-basic.component.css']
})


export class CocomoBasicComponent {
    row: number = 1;
    a: number = 0;
    b: number = 0;
    c: number = 0;
    d: number = 0;
    resPM: number = 0;
    resTM: number = 0;
    resultTM(c: number, PM: number, d: number): number {
        return c * Math.pow(PM, d);
    }
    resultPM(a: number, b: number, size: number): number {
        return a * Math.pow(size, b);
    }
    select(row: number) {
        console.log(row);
        this.row = row;
    }
    result(size: number) {
        switch (this.row) {
            case 1: {
                this.a = 2.4;
                this.b = 1.05;
                this.c = 2.5;
                this.d = 0.38;
                this.resPM = this.resultPM(this.a, this.b, size);
                this.resTM = this.resultTM(this.c, this.resPM, this.d);
                break;
            }
            case 2: {
                this.a = 3.0;
                this.b = 1.12;
                this.c = 2.5;
                this.d = 0.35;
                this.resPM = this.resultPM(this.a, this.b, size);
                this.resTM = this.resultTM(this.c, this.resPM, this.d);
                break;
            }
            case 3: {
                this.a = 3.6;
                this.b = 1.20;
                this.c = 2.5;
                this.d = 0.32;
                this.resPM = this.resultPM(this.a, this.b, size);
                this.resTM = this.resultTM(this.c, this.resPM, this.d);
                break;
            }
        }
    }
}
