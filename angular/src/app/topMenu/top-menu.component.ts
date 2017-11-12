import { Component } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { CocomoUserService } from '../_services/cocomo-user.service';
import { CocomoBasicComponent } from '../cocomoBasic/cocomo-basic.component';
import { CocomoChartComponent } from '../cocomoChartPM/cocomo-chart-pm.component';
import { CocomoChartTMComponent } from '../cocomoChartTM/cocomo-chart-tm.component';
import { CocomoIntermediateComponent } from '../cocomoIntermediate/cocomo-intermediate.component';
import { Cocomo2ScaleFactorsComponent } from '../cocomo2ScaleFactors/cocomo-2-scale-factors.component';
import { CocomoEffortMultipersComponent } from '../cocomoEffortMultipers/cocomo-effort-multipers.component';
import { CocomoEffortMultipersDeepComponent } from '../cocomoEffortMultipersDeep/cocomo-effort-multipers-deep.component';
import { Cocomo2Component } from '../cocomo2/cocomo-2.component'
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-menu',
  templateUrl: 'top-menu.component.html',
  providers: [Cocomo2Component, CocomoEffortMultipersDeepComponent, CocomoEffortMultipersComponent, Cocomo2ScaleFactorsComponent, CocomoIntermediateComponent, CocomoBasicComponent, CocomoChartComponent, CocomoChartTMComponent]
})

export class TopMenuComponent {
  constructor (private router: Router, private authService: AuthService, private cocomoUserService: CocomoUserService) {}

  isAuthorized() {
    return  this.authService.isAuthorized();
  }
  logout(e) {
    e.preventDefault();
    this.authService.logout();
    this.router.navigate(['']);
    
  }
  getUserName() {
    let item = JSON.parse(localStorage.getItem('tokens'));
    return item.user.name;
  }

  save(e) {
    e.preventDefault();
    let rowBasic = CocomoBasicComponent.getRow();
    console.log(rowBasic);
    let initBasic = CocomoBasicComponent.getSize();
    let rowInterm = CocomoIntermediateComponent.getRow();
    let initInterm = CocomoIntermediateComponent.getSize();
    let valuesInterm = CocomoIntermediateComponent.getValues();
    let valuesScale = Cocomo2ScaleFactorsComponent.getValues();
    let valuesEffortPrevent = CocomoEffortMultipersComponent.getValues();
    let valuesEffortDeep = CocomoEffortMultipersDeepComponent.getValues();
    let sizeCocomo2 = Cocomo2Component.getSize();
    let user_id = this.cocomoUserService.getUserId();
    let data = {
      "basic": [{"row": rowBasic, "init": initBasic}],
      "interm": [{"row": rowInterm, "init": initInterm, "values": valuesInterm}],
      "scale": [{"values": valuesScale}],
      "effortPrevent": [{"values": valuesEffortPrevent}],
      "effortDeep": [{"values": valuesEffortDeep}],
      "cocomo2": [{"size": sizeCocomo2}],
      "user" : [{"user_id" : user_id}]
    }

    this.cocomoUserService.setCocomoUser(data).subscribe(() => {});
    
  }
}
