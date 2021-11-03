import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {ToolbarModule} from "../toolbar/toolbar.module";
import {FinalLessonWeatherComponent} from "./final-lesson-weather.component";

const finalLessonWeatherRoutes: Routes = [
  {path: '', component: FinalLessonWeatherComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ToolbarModule,
    RouterModule.forChild(finalLessonWeatherRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    FinalLessonWeatherComponent
  ]
})
export class FinalLessonWeatherModule {
}
