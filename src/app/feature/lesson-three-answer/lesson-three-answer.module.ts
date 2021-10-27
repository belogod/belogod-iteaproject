import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {ToolbarModule} from "../toolbar/toolbar.module";
import {LessonThreeAnswerComponent} from "./lesson-three-answer.component";

const lessonThreeAnswerRoutes: Routes = [
  {path: '', component: LessonThreeAnswerComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ToolbarModule,
    RouterModule.forChild(lessonThreeAnswerRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LessonThreeAnswerComponent
  ]
})
export class LessonThreeAnswerModule {
}
