import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {ToolbarModule} from "../toolbar/toolbar.module";
import {LessonFourAnswerComponent} from "./lesson-four-answer.component";

const lessonFourAnswerRoutes: Routes = [
  {path: '', component: LessonFourAnswerComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ToolbarModule,
    RouterModule.forChild(lessonFourAnswerRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LessonFourAnswerComponent
  ]
})
export class LessonFourAnswerModule {
}
