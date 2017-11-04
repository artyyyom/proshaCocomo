import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CocomoService } from '../cocomo.service';
import { Cocomo } from '../shared/cocomo';
import { resultPM } from '../shared/resultPM';

@Component({
  selector: 'app-cocomo-effort-multipers',
  templateUrl: 'cocomo-effort-multipers.component.html',
  styleUrls: ['cocomo-effort-multipers.component.css']
})

export class CocomoEffortMultipersComponent implements  OnInit {
  cells: Cocomo[];
  values: number[];
  A: number;
  B: number;
  @Output() resultEAFPrevent: EventEmitter<number>;
  @Output()  resultSCEDPrevent: EventEmitter<number>;
  @Output()  resultPMnsMultiplyPrevent: EventEmitter<number>;


  constructor(private cellsService: CocomoService) {
    this.values = [2.12, 1.59, 0.49, 1, 1, 1.43, 1];
    this.A = 2.94;
    this.B = 0.91;
    this.resultEAFPrevent = new EventEmitter<number>();
    this.resultSCEDPrevent = new EventEmitter<number>();
    this.resultPMnsMultiplyPrevent = new EventEmitter<number>();
  }
  ngOnInit() {
    this.cells = this.cellsService.getCellsEffortPrevent();
    this.result();
  }
  selectCell(event, value) {
    this.values = this.cellsService.selectCell(event, value, this.cells, this.values);
    this.result();
  }
  result () {
    this.resultEAFPrevent.emit(this.cellsService.multiplyArrElement(this.values));
    this.resultSCEDPrevent.emit(this.cellsService.getSCED(this.values));
    this.resultPMnsMultiplyPrevent.emit(this.cellsService.multiplyArrElement(this.values, this.values.length - 1));
  }

}
