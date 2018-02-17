import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ChartComponent } from './chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ChartComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
