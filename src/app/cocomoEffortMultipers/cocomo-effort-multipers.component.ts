import { Component, OnInit } from '@angular/core';
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
  result: number;
  A: number;
  B: number;

  constructor(private cellsService: CocomoService) {
    this.values = [2.12, 1.59, 0.49, 1, 1, 1.43, 1];
    this.A = 2.94;
    this.B = 0.91;
  }
  ngOnInit() {
    this.cells = this.cellsService.getCellsEffortPrevent();
  }
  selectCell(event, value) {
    this.values = this.cellsService.selectCell(event, value, this.cells, this.values);
  }
  resultEAF (size) {
    this.result = this.cellsService.multiplyArrElement(this.values) * resultPM(this.A, this.B, size);
  }
}
