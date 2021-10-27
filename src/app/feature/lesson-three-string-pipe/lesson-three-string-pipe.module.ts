import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {ToolbarModule} from "../toolbar/toolbar.module";
import {LessonThreeStringPipeComponent} from "./lesson-three-string-pipe.component";
import { PositiveNumbersDirective } from './positive-numbers.directive';

const lessonThreeStringPipeRoutes: Routes = [
  {path: '', component: LessonThreeStringPipeComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ToolbarModule,
    RouterModule.forChild(lessonThreeStringPipeRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LessonThreeStringPipeComponent,
    PositiveNumbersDirective
  ]
})
export class LessonThreeStringPipeModule {
}
