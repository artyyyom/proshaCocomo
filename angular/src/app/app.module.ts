import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { CocomoBasicComponent } from './cocomoBasic/cocomo-basic.component';
import { CocomoIntermediateComponent } from './cocomoIntermediate/cocomo-intermediate.component';
import { Cocomo2ScaleFactorsComponent } from './cocomo2ScaleFactors/cocomo-2-scale-factors.component';
import { CocomoEffortMultipersComponent } from './cocomoEffortMultipers/cocomo-effort-multipers.component';
import { CocomoEffortMultipersDeepComponent } from './cocomoEffortMultipersDeep/cocomo-effort-multipers-deep.component';
import { Cocomo2Component } from './cocomo2/cocomo-2.component';
import { CocomoChartComponent } from './cocomoChartPM/cocomo-chart-pm.component';
import { CocomoChartTMComponent } from './cocomoChartTM/cocomo-chart-tm.component';
import { ChartsModule } from 'ng2-charts';
import { BarChartDemoComponent } from './cocomoCharts/cocomo-charts.component';
import { RegisterComponent } from './register/register.component';
import { CocomoMainComponent } from './cocomoMain/cocomo-main.component';
import { LoginComponent } from './login/login.component';
import { TopMenuComponent } from './topMenu/top-menu.component';

import { CocomoService } from './cocomo.service';
import { AuthService } from './_services/auth.service';
import { CocomoUserService } from './_services/cocomo-user.service';

const appRoutes: Routes = [
  { path: '', component: CocomoMainComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'login', component: LoginComponent }
];


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
    CocomoChartTMComponent,
    RegisterComponent,
    CocomoMainComponent,
    LoginComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [CocomoService, AuthService, CocomoUserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
