import { Component, OnInit } from '@angular/core';
import { CocomoService } from '../cocomo.service';

@Component({
  selector: 'app-cocomo-chart-pm',
  templateUrl: 'cocomo-chart-pm.component.html',
  styleUrls: ['cocomo-chart-pm.component.css']
})

export class CocomoChartComponent implements OnInit {
  flag: boolean;

  chartPMBasic: number[];
  chartIntermediate: number[];
  chartCocomo2Prevent: number[];
  chartCocomo2Deep: number[];
  

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: number[];
  public barChartType: string = 'bar';
  public barChartLegend:  boolean = true;

  public barChartData: any[] = [
    {data: [], label: 'Базовый уровень '},
    {data: [], label: 'Промежуточный уровень'},
    {data: [], label: 'Предварительная оценка'},
    {data: [], label: 'Детальная оценка'}

  ];

  constructor(private cellsService: CocomoService){
    this.flag = false;
  }

  ngOnInit() {
    this.barChartLabels =  this.cellsService.getChartArr();
  }

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
  public create(){

    this.chartPMBasic =  this.cellsService.getChartPMBasic();
    this.chartIntermediate = this.cellsService.getChartIntermediate();
    this.chartCocomo2Prevent = this.cellsService.getChartCocomo2Prevent();
    this.chartCocomo2Deep = this.cellsService.getChartCocomo2Deep();

    if(this.chartPMBasic){
      this.flag = true;
      let clone = JSON.parse(JSON.stringify(this.barChartData));
      clone[0].data = this.chartPMBasic;  
      clone[1].data = this.chartIntermediate;
      clone[2].data = this.chartCocomo2Prevent;
      clone[3].data = this.chartCocomo2Deep;
      this.barChartData = clone;
      console.log(this.chartCocomo2Deep);
    }
  } 

}
