import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LessonOneComponent} from "./lesson-one.component";
import {SharedModule} from "../../shared/shared.module";

const lessonOneRoutes: Routes = [
  {path: 'lesson-one', component: LessonOneComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,

    RouterModule.forChild(lessonOneRoutes)
  ],
  exports: [
    RouterModule,
    LessonOneComponent
  ],
  declarations: [
    LessonOneComponent
  ]
})
export class LessonOneModule {
}
