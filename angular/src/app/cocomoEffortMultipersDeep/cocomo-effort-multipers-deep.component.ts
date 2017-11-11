import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CocomoService } from '../cocomo.service';
import { Cocomo } from '../shared/cocomo';
import { resultPM } from '../shared/resultPM';

@Component({
  selector: 'app-cocomo-effort-multipers-deep',
  templateUrl: 'cocomo-effort-multipers-deep.component.html',
  styleUrls: ['cocomo-effort-multipers-deep.component.css']
})

export class CocomoEffortMultipersDeepComponent implements  OnInit {
  static saveValuesDeep;
  cells: Cocomo[];
  values: number[];
  SCED: number;
  @Output() resultEAFDeep: EventEmitter<number>;
  @Output() resultSCEDDeep: EventEmitter<number>;
  @Output() resultPMnsMultiplyDeep: EventEmitter<number>;
  A: number;
  B: number;

  constructor(private cellsService: CocomoService) {
    this.values = [1.42, 1.22, 1.34, 1.29, 1.19, 1.20, 0.84, 1, 0.73, 1, 0.81, 1, 1, 1, 1.17, 1.22, 1.43];
    this.A = 2.94;
    this.B = 0.91;
    this.SCED = 0;
    this.resultEAFDeep = new EventEmitter<number>();
    this.resultSCEDDeep = new EventEmitter<number>();
    this.resultPMnsMultiplyDeep = new EventEmitter<number>();
    CocomoEffortMultipersDeepComponent.saveValuesDeep = this.values;
  }
  ngOnInit() {
    this.cells = this.cellsService.getCellsEffortDeep();
    this.result();
  }
  selectCell(event, value) {
    this.values = this.cellsService.selectCell(event, value, this.cells, this.values);
    CocomoEffortMultipersDeepComponent.saveValuesDeep = this.values;
    this.result();
  }

  result (): void {
    this.resultEAFDeep.emit(this.cellsService.multiplyArrElement(this.values));
    this.resultSCEDDeep.emit(this.cellsService.getSCED(this.values));
    this.resultPMnsMultiplyDeep.emit(this.cellsService.multiplyArrElement(this.values, this.values.length - 1));
  }

  static getValues() {
    return CocomoEffortMultipersDeepComponent.saveValuesDeep;
  }
}
