import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { D3Service } from 'd3-ng2-service';

import { AppComponent } from './app.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { D3graphComponent } from './d3graph/d3graph.component';

@NgModule({
  declarations: [
    AppComponent,
    BarChartComponent,
    D3graphComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [D3Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
