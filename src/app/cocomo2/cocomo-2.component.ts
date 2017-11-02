import { Component, OnInit } from '@angular/core';
import { resultPM } from '../shared/resultPM';
import { floatNum } from '../shared/global';
import { CocomoService } from '../cocomo.service';

@Component({
  selector: 'app-cocomo-2',
  templateUrl: 'cocomo-2.component.html',
  styleUrls: ['cocomo-2.component.css']
})

export class Cocomo2Component implements OnInit{
  dataPrevent: number[];
  dataDeep: number[];
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
  PMnsDeep: number;
  PMnsPrevent: number;
  constructor(private cellsService: CocomoService) {
    this.APrevent = 2.94;
    this.ADeep = 2.45;
    this.resPrevent = 0;
    this.resDeep = 0;
    this.size = 0;
    this.E = 0;
    this.SCEDPrevent = 0;
    this.SCEDDeep = 0;
    this.resTMPrevent = 0;
    this.resTMDeep = 0;
    this.C = 3.67;
    this.D = 0.28;
    this.PMnsDeep = 0;
    this.PMnsPrevent = 0;
    this.floatNum = floatNum;
    this.dataPrevent = [];
    this.dataDeep = [];
  }
  ngOnInit() {

    this.setChartCocomo2Prevent(this.EAFPrevent, this.APrevent, this.E);
    this.setChartCocomo2Deep(this.EAFDeep, this.ADeep, this.E);
  }
  resultPMnsPrevent(val) {
    this.PMnsPrevent = val;
  }
  resultPMnsDeep(val) {
    this.PMnsDeep = val;
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
  setChartCocomo2Prevent(EAFPrevent, APrevent, EPrevent) {
    let dataArr = this.cellsService.getChartArr();

    for (let i = 0; i < dataArr.length; i++) {
      this.dataPrevent[i] = parseFloat(this.resultPMAdv(EAFPrevent, APrevent, EPrevent, dataArr[i]).toFixed(this.floatNum));
    }
    this.cellsService.setChartCocomo2Prevent(this.dataPrevent);
  }
  setChartCocomo2Deep(EAFDeep, ADeep, EDeep) {
    let dataArr = this.cellsService.getChartArr();

    for (let i = 0; i < dataArr.length; i++) {
      this.dataDeep[i] = parseFloat(this.resultPMAdv(EAFDeep, ADeep, EDeep, dataArr[i]).toFixed(this.floatNum));
    }
    console.log(this.dataDeep);
    this.cellsService.setChartCocomo2Deep(this.dataDeep);
  }


  result(size) {
    this.size = size;
    this.resPrevent = this.resultPMAdv(this.EAFPrevent, this.APrevent, this.E, size);
    this.resDeep = this.resultPMAdv(this.EAFDeep, this.ADeep, this.E, size);
    this.resTMPrevent = this.resultTM(this.SCEDPrevent, this.C, this.PMnsPrevent, this.D,  this.E);
    this.resTMDeep = this.resultTM(this.SCEDDeep, this.C, this.PMnsDeep, this.D, this.E);
    this.setChartCocomo2Prevent(this.EAFPrevent, this.APrevent, this.E);
    this.setChartCocomo2Deep(this.EAFDeep, this.ADeep, this.E);
    
  }
  resultTM(SCED, C, PMns, D, E): number {
    return SCED * C * Math.pow(PMns, D + 0.2 * (E - 0.91));
  }
}
