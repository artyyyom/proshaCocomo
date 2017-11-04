import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CocomoBasicComponent } from './cocomoBasic/cocomo-basic.component';
import { CocomoIntermediateComponent } from './cocomoIntermediate/cocomo-intermediate.component';
import { Cocomo2ScaleFactorsComponent } from './cocomo2ScaleFactors/cocomo-2-scale-factors.component';
import { CocomoEffortMultipersComponent } from './cocomoEffortMultipers/cocomo-effort-multipers.component';
import { CocomoEffortMultipersDeepComponent } from './cocomoEffortMultipersDeep/cocomo-effort-multipers-deep.component';
import { Cocomo2Component } from './cocomo2/cocomo-2.component';
import { CocomoChartComponent } from './cocomoChartPM/cocomo-chart-pm.component';
import { CocomoChartTMComponent } from './cocomoChartTM/cocomo-chart-tm.component';

import { CocomoService } from './cocomo.service';

import { ChartsModule } from 'ng2-charts';
import { BarChartDemoComponent } from './cocomoCharts/cocomo-charts.component';

@NgModule({
  declarations: [
    AppComponent,
    CocomoBasicComponent,
    CocomoIntermediateComponent,
    Cocomo2ScaleFactorsComponent,
    CocomoEffortMultipersComponent,
    CocomoEffortMultipersDeepComponent,
    Cocomo2Component,
    BarChartDemoComponent,
    CocomoChartComponent,
    CocomoChartTMComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule
  ],
  providers: [CocomoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
