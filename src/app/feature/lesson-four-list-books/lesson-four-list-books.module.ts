import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {ToolbarModule} from "../toolbar/toolbar.module";
import {LessonFourListBooksComponent} from "./lesson-four-list-books.component";

const lessonFourListBooksRoutes: Routes = [
  {path: '', component: LessonFourListBooksComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ToolbarModule,
    RouterModule.forChild(lessonFourListBooksRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    LessonFourListBooksComponent
  ]
})
export class LessonFourListBooksModule {
}
