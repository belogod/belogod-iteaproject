import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {ToolbarModule} from "../toolbar/toolbar.module";
import {LessonFiveAnswerComponent} from "./lesson-five-answer.component";

const lessonFiveAnswerRoutes: Routes = [
  {path: '', component: LessonFiveAnswerComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ToolbarModule,
    RouterModule.forChild(lessonFiveAnswerRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LessonFiveAnswerComponent
  ]
})
export class LessonFiveAnswerModule {
}
