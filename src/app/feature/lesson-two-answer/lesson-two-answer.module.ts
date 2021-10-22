import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {ToolbarModule} from "../toolbar/toolbar.module";
import {LessonTwoAnswerComponent} from "./lesson-two-answer.component";

const lessonTwoAnswerRoutes: Routes = [
  {path: '', component: LessonTwoAnswerComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ToolbarModule,
    RouterModule.forChild(lessonTwoAnswerRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LessonTwoAnswerComponent
  ]
})
export class LessonTwoAnswerModule {
}
