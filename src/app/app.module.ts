import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CocomoBasicComponent } from './cocomoBasic/cocomo-basic.component';
import { CocomoIntermediateComponent } from './cocomoIntermediate/cocomo-intermediate.component';

@NgModule({
  declarations: [
    AppComponent,
    CocomoBasicComponent,
    CocomoIntermediateComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
