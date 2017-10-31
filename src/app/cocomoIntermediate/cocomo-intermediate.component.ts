import { Component } from '@angular/core';
import {isNumber} from "util";
import { resultPM } from '../shared/resultPM';
import { floatNum } from '../shared/global';

const cells = [
    { rowCells: ['1. требуемая надежность', 0.74, 0.88, 1.00, 1.15, 1.40, 'n/a'],
      selected: 1,
    },
    { rowCells: ['2. размер бд приложения', 'n/a', 0.94, 1.00, 1.08, 1.16,	'n/a'],
      selected: 1,
    },
    { rowCells: ['3. сложность продукта', 0.70, 0.85, 1.00, 1.15, 1.30, 1.65],
      selected: 1,
    },
    { rowCells: ['4. ограничения быстродействия при выполнении программы', 'n/a', 'n/a', 1.00, 1.11, 1.30, 1.66],
      selected: 1,
    },
    { rowCells: ['5. ограничения памятипрограммы', 'n/a', 'n/a', 1.00, 1.06, 1.21, 1.56],
      selected: 1,
    },
    { rowCells: ['6. неустойчивость окружения виртуальной машин', 'n/a', 0.87, 1.00,	1.15, 1.30,	'n/a'],
      selected: 1,
    },
    { rowCells: ['7. требуемое время восстановления', 'n/a', 0.87, 1.00, 1.15, 1.30, 'n/a'],
      selected: 1,
    },
    { rowCells: ['8. аналитические способности', 1.46, 1.19, 1.00, 0.86, 0.71, 'n/a'],
      selected: 1,
    },
    { rowCells: ['9. опыт разработки', 1.29, 1.13, 1.00, 0.91, 0.82, 'n/a'],
      selected: 1,
    },
    { rowCells: ['10. способности к разработке по', 1.42, 1.17, 1.00, 0.86, 0.70, 'n/a'],
      selected: 1,
    },
    { rowCells: ['11. опыт использования виртуальных машин', 1.21, 1.10, 1.00, 0.90, 'n/a', 'n/a'],
      selected: 1,
    },
    { rowCells: ['12. опыт разработки на языках программирования', 1.14, 1.07, 1.00, 0.95, 'n/a', 'n/a'],
      selected: 1,
    },
    { rowCells: ['13. применение методов разработки', 1.24, 1.10, 1.00, 0.91, 0.82, 'n/a'],
      selected: 1,
    },
    { rowCells: ['14.использование инструментария разработки по', 1.24, 1.10, 1.00, 0.91, 0.83, 'n/a'],
      selected: 1,
    },
    { rowCells: ['15.требования соблюдения графика разработки', 1.23, 1.08, 1.00, 1.04, 1.10, 'n/a'],
      selected: 1,
    },

];


@Component({
    selector: 'app-cocomo-intermediate',
    templateUrl: 'cocomo-intermediate.component.html',
    styleUrls: ['cocomo-intermediate.component.css']
})

export class CocomoIntermediateComponent {
    floatNum: number;
    resPM: number;
    row: number;
    cells = cells;
    value: Array<number>;
    constructor() {
        this.floatNum = floatNum;
        this.row = 1;
        this.value = [0.74, 1, 0.7, 1, 1, 1, 1, 1.46, 1.29, 1.42, 1.21, 1.14, 1.24, 1.24, 1.23];
        this.resPM = 0;
    }
    select(row: number) {
        this.row = row;
    }
    selectCell(event, value): void {
        if (!event.target.cellIndex) {
            return;
        }
        if (cells[event.path[1].rowIndex - 3].selected !== event.target.cellIndex) {
            cells[event.path[1].rowIndex - 3].selected = event.target.cellIndex;
            if (value === 'n/a') {
                value = 1;
            }
            if (!isNaN(value)) {
                this.value[event.path[1].rowIndex - 3] = parseFloat(value);
            }

        }
        console.log(this.value);
    }
    multiplyArrElement(arr): number {
        let sum = 1;
        for ( let i = 0; i < arr.length; i++) {
            sum *= arr[i];
        }
        return sum;
    }
    result(size: number) {
        switch (this.row) {
            case 1: {
                const a = 3.2;
                const b = 1.05;
                this.resPM = this.resultPmIntermediate(size, a, b);
                break;
            }
            case 2: {
                const a = 3.0;
                const b = 1.12;
                this.resPM = this.resultPmIntermediate(size, a, b);
                break;
            }
            case 3: {
                const a = 2.8;
                const b = 1.20;
                this.resPM = this.resultPmIntermediate(size, a, b);
                break;
            }
        }
    }
    resultPmIntermediate(size, a, b) {
        return this.multiplyArrElement(this.value) * resultPM(a, b, size);
    }
}
