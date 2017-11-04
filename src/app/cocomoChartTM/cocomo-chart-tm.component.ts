import { Component, OnInit } from '@angular/core';
import { CocomoService } from '../cocomo.service';

@Component({
  selector: 'app-cocomo-chart-tm',
  templateUrl: 'cocomo-chart-tm.component.html',
  styleUrls: ['cocomo-chart-tm.component.css']
})

export class CocomoChartTMComponent implements OnInit {
  public static chartEx = [
    {data: [], label: 'Базовый уровень '},
    {data: [], label: 'Промежуточный уровень'},
    {data: [], label: 'Предварительная оценка'},
    {data: [], label: 'Детальная оценка'}

  ];

  chartExample: number[];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: number[];
  public barChartType: string = 'bar';
  public barChartLegend:  boolean = true;

  public barChartTMData = [
    {data: [], label: 'Базовый уровень '},
    {data: [], label: 'Промежуточный уровень'},
    {data: [], label: 'Предварительная оценка'},
    {data: [], label: 'Детальная оценка'}

  ];
  constructor(private cellsService: CocomoService) {

    this.chartExample = [];

  }
  public static initCh(val, index) {
    let clone = JSON.parse(JSON.stringify(this.chartEx));
    clone[index].data = val;
    this.chartEx = clone;
  }
  ngOnInit() {
    this.barChartLabels =  this.cellsService.getChartArr();
  }

  public create() {
    this.barChartTMData = CocomoChartTMComponent.chartEx;
    console.log(this.barChartTMData);
  }
}
