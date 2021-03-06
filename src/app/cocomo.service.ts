import { cellsEffortPrevent } from './shared/global';
import { cellsEffortDeep } from './shared/global';
import { cellsIntermediate } from './shared/global';

export class CocomoService {
  chartData: number[] = [2000, 5000, 10000, 15000, 30000];

  chartPMBasic: number[];
  chartIntermediate: number[];
  chartCocomo2Prevent: number[];
  chartCocomo2Deep: number[];


  cellsEffortPrevent = cellsEffortPrevent;
  cellsEffortDeep = cellsEffortDeep;
  cellsIntermediate = cellsIntermediate;
  getCellsEffortPrevent() {
    return this.cellsEffortPrevent;
  }
  getCellsEffortDeep() {
    return this.cellsEffortDeep;
  }
  getCellsIntermediate() {
    return this.cellsIntermediate;
  }
  selectCell(event, value, cells, resultArr): number[] {
    if (!event.target.cellIndex) {
      return;
    }
    if (cells[event.path[1].rowIndex - 2].selected !== event.target.cellIndex) {
      cells[event.path[1].rowIndex - 2].selected = event.target.cellIndex;
      if (value === 'n/a') {
        value = 1;
      }
      if (!isNaN(value)) {
        resultArr[event.path[1].rowIndex - 2] = parseFloat(value);
      }

    }
    return resultArr;
  }

  multiplyArrElement(arr, n = arr.length): number {
    let sum = 1;
    for ( let i = 0; i < n; i++) {
      sum *= arr[i];
    }
    return sum;
  }
  resultPM(a: number, b: number, size: number): number {
    return a * Math.pow(size, b);
  }

  getSCED(arr): number {
    return arr[arr.length - 1];
  }
  getChartArr() {
    return this.chartData;
  }
}
