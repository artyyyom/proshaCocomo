import { Component, OnInit, DoCheck } from '@angular/core';
import { resultPM } from '../shared/resultPM';
import { floatNum } from '../shared/global';
import { CocomoService } from '../cocomo.service';
import { CocomoChartComponent } from '../cocomoChartPM/cocomo-chart-pm.component';
import { CocomoChartTMComponent } from '../cocomoChartTM/cocomo-chart-tm.component';

@Component({
  selector: 'app-cocomo-2',
  templateUrl: 'cocomo-2.component.html',
  styleUrls: ['cocomo-2.component.css'],
  providers: [CocomoChartComponent, CocomoChartTMComponent]
})

export class Cocomo2Component implements DoCheck {
  dataPMPrevent: number[];
  dataPMDeep: number[];
  floatNum: number;
  EAFPrevent: number;
  EAFDeep: number;
  E: number;
  APrevent: number;
  ADeep: number;
  resPrevent: number;
  resDeep: number;
  size: number;
  SCEDPrevent: number;
  SCEDDeep: number;
  resTMPrevent: number;
  resTMDeep: number;
  C: number;
  D: number;
  resPMnsDeep: number;
  PMnsMultiplyDeep: number;
  PMnsMultiplyPrevent: number;
  resPMnsPrevent: number;
  dataTMPrevent: number[];
  dataTMDeep: number[];
  resPMnsDeepArr: number[];
  resPMnsPreventArr: number[];
  constructor(private cellsService: CocomoService) {
    this.APrevent = 2.94;
    this.ADeep = 2.45;
    this.resPrevent = 0;
    this.resDeep = 0;
    this.size = 2000;
    this.E = 0;
    this.SCEDPrevent = 0;
    this.SCEDDeep = 0;
    this.resTMPrevent = 0;
    this.resTMDeep = 0;
    this.C = 3.67;
    this.D = 0.28;
    this.PMnsMultiplyDeep = 0;
    this.PMnsMultiplyPrevent = 0;
    this.floatNum = floatNum;
    this.dataPMPrevent = [];
    this.dataPMDeep = [];
    this.resPMnsPrevent = 0;
    this.resPMnsDeep = 0;
    this.dataTMPrevent = [];
    this.dataTMDeep = [];
    this.resPMnsPreventArr = [];
    this.resPMnsDeepArr = [];
  }
  ngDoCheck() {
    this.result(this.size);
    CocomoChartComponent.initCh(this.getChartCocomo2PMPrevent(this.EAFPrevent, this.APrevent, this.E), 2);
    CocomoChartComponent.initCh(this.getChartCocomo2PMDeep(this.EAFDeep, this.ADeep, this.E), 3);
    CocomoChartTMComponent.initCh(this.getChartCocomo2TMPrevent(), 2);
    CocomoChartTMComponent.initCh(this.getChartCocomo2TMDeep(), 3);
  }
  onKey(event: any) {
    this.size = event.target.value;
    this.result(this.size);
  }
  resultPMnsMultiplyPrevent(val) {
    this.PMnsMultiplyPrevent = val;
  }
  resultPMnsMultiplyDeep(val) {
    this.PMnsMultiplyDeep = val;
  }
  resultSCEDPrevent(val) {
    this.SCEDPrevent = val;
  }
  resultSCEDDeep(val) {
    this.SCEDDeep = val;
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
  resultPMAdv(EAF, A, E, size) {
    return EAF * resultPM(A, this.E, size);
  }
  getChartCocomo2PMPrevent(EAFPrevent, APrevent, EPrevent) {
    let dataArr = this.cellsService.getChartArr();

    for (let i = 0; i < dataArr.length; i++) {
      this.dataPMPrevent[i] = parseFloat(this.resultPMAdv(EAFPrevent, APrevent, EPrevent, dataArr[i]).toFixed(this.floatNum));
    }
    return this.dataPMPrevent;
  }
  getChartCocomo2PMDeep(EAFDeep, ADeep, EDeep) {
    let dataArr = this.cellsService.getChartArr();

    for (let i = 0; i < dataArr.length; i++) {
      this.dataPMDeep[i] = parseFloat(this.resultPMAdv(EAFDeep, ADeep, EDeep, dataArr[i]).toFixed(this.floatNum));
    }
    return this.dataPMDeep;
  }
  getChartCocomo2TMPrevent() {
    let dataPM = this.cellsService.getChartArr();
    for (let i = 0; i < dataPM.length; i++) {
      this.dataTMPrevent[i] =  parseFloat(this.resultTM(this.SCEDPrevent, this.C, this.resultPMAdv(this.PMnsMultiplyPrevent, this.APrevent, this.E, dataPM[i]), this.D, this.E).toFixed(floatNum));
    }
    return this.dataTMPrevent;
  }

  getChartCocomo2TMDeep() {
    let dataPM = this.cellsService.getChartArr();
    for (let i = 0; i < dataPM.length; i++) {
      this.dataTMDeep[i] = parseFloat(this.resultTM(this.SCEDDeep, this.C, this.resultPMAdv(this.PMnsMultiplyDeep, this.ADeep, this.E, dataPM[i]), this.D, this.E).toFixed(floatNum));
    }
    return this.dataTMDeep;
  }
  result(size) {
    console.log(this.PMnsMultiplyPrevent);
    this.resPrevent = this.resultPMAdv(this.EAFPrevent, this.APrevent, this.E, size);
    this.resDeep = this.resultPMAdv(this.EAFDeep, this.ADeep, this.E, size);
    this.resPMnsPrevent = this.resultPMAdv(this.PMnsMultiplyPrevent, this.APrevent, this.E, size);
    this.resPMnsDeep = this.resultPMAdv(this.PMnsMultiplyDeep, this.ADeep, this.E, size);
    this.resTMPrevent = this.resultTM(this.SCEDPrevent, this.C, this.resPMnsPrevent, this.D,  this.E);
    this.resTMDeep = this.resultTM(this.SCEDDeep, this.C, this.resPMnsDeep, this.D, this.E);

  }
  resultTM(SCED, C, PMns, D, E): number {
    return SCED * C * Math.pow(PMns, D + 0.2 * (E - 0.91));
  }
}
