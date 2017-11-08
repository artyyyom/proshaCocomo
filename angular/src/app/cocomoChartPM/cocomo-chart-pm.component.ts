import { Component, OnInit } from '@angular/core';
import { CocomoService } from '../cocomo.service';

@Component({
  selector: 'app-cocomo-chart-pm',
  templateUrl: 'cocomo-chart-pm.component.html',
  styleUrls: ['cocomo-chart-pm.component.css']
})

export class CocomoChartComponent implements OnInit {
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
  public barChartLegend: boolean = true;

  public barChartData = [
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
      this.barChartData = CocomoChartComponent.chartEx;
      console.log(this.barChartData);
  }
}
