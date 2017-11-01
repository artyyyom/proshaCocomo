import { Component } from '@angular/core';
import { resultPM } from '../shared/resultPM';

@Component({
  selector: 'app-cocomo-2',
  templateUrl: 'cocomo-2.component.html',
  styleUrls: ['cocomo-2.component.css']
})

export class Cocomo2Component {
  EAFPrevent: number;
  EAFDeep: number;
  E: number;
  APrevent: number;
  ADeep: number;
  resPrevent: number;
  resDeep: number;
  size: number;
  constructor() {
    this.APrevent = 2.94;
    this.ADeep = 2.45;
    this.resPrevent = 0;
    this.resDeep = 0;
    this.size = 0;
    this.E = 0;
  }
  resultEAFDeep(val) {
    this.EAFDeep = val;
  }
  resultEAFPrevent(val) {
    this.EAFPrevent = val;
  }
  resultE(val) {
    this.E = val;
  }
  resultPrevent(size): number {
    return this.EAFPrevent * resultPM(this.APrevent, this.E, size);
  }
  resultDeep(size): number {
    return this.EAFDeep * resultPM(this.ADeep, this.E, size);
  }
  result(size) {
    console.log(this.E);
    this.size = size;
    this.resPrevent = this.resultPrevent(this.size);
    this.resDeep = this.resultDeep(this.size);
  }
}
