import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LessonOneComponent} from "./lesson-one.component";
import {SharedModule} from "../../shared/shared.module";
import {ToolbarModule} from "../toolbar/toolbar.module";

const lessonOneRoutes: Routes = [
  {path: '', component: LessonOneComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ToolbarModule,
    RouterModule.forChild(lessonOneRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LessonOneComponent
  ]
})
export class LessonOneModule {
}
