import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {ToolbarModule} from "../toolbar/toolbar.module";
import {HistoricalWeatherComponent} from "./historical-weather.component";

const historicalWeatherRoutes: Routes = [
  {path: '', component: HistoricalWeatherComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ToolbarModule,
    RouterModule.forChild(historicalWeatherRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    HistoricalWeatherComponent
  ]
})
export class HistoricalWeatherModule {
}
