import { Component, OnInit } from '@angular/core';
import { CocomoService } from '../cocomo.service';

@Component({
  selector: 'app-cocomo-chart-pm',
  templateUrl: 'cocomo-chart-pm.component.html',
  styleUrls: ['cocomo-chart-pm.component.css']
})

export class CocomoChartComponent implements OnInit {
  flag: boolean;
  i: number;
  chartExample: number[];

  public static chartEx = [
    {data: [], label: 'Базовый уровень '},
    {data: [], label: 'Промежуточный уровень'},
    {data: [], label: 'Предварительная оценка'},
    {data: [], label: 'Детальная оценка'}

  ];

  chartPMBasic: number[];
  chartPMIntermediate: number[];
  chartCocomo2PMPrevent: number[];
  chartCocomo2PMDeep: number[];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: number[];
  public barChartType: string = 'bar';
  public barChartLegend:  boolean = true;

  public barChartData = [
    {data: [], label: 'Базовый уровень '},
    {data: [], label: 'Промежуточный уровень'},
    {data: [], label: 'Предварительная оценка'},
    {data: [], label: 'Детальная оценка'}

  ];

  constructor(private cellsService: CocomoService) {
    this.flag = false;
    this.i = 0;
    this.chartExample = [];

  }

  ngOnInit() {
    this.barChartLabels =  this.cellsService.getChartArr();
  }
  public static initCh(val, index) {
    let clone = JSON.parse(JSON.stringify(this.chartEx));
    clone[index].data = val;
    this.chartEx = clone;
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  public create() {
      this.barChartData = CocomoChartComponent.chartEx;
  }
}
