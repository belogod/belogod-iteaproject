import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {LessonTwoComponent} from "./lesson-two.component";

const lessonTwoRoutes: Routes = [
  {path: '', component: LessonTwoComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(lessonTwoRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LessonTwoComponent
  ]
})
export class LessonTwoModule {
}
