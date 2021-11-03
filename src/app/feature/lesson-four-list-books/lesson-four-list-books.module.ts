import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {ToolbarModule} from "../toolbar/toolbar.module";
import {LessonFourListBooksComponent} from "./lesson-four-list-books.component";
import {CrudComponent} from './crud/crud.component';
import {TemplateDrivenFormComponent} from './template-driven-form/template-driven-form.component';

const lessonFourListBooksRoutes: Routes = [
  {path: '', component: LessonFourListBooksComponent},
  {path: '', component: CrudComponent},
  {path: '', component: TemplateDrivenFormComponent},
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
    LessonFourListBooksComponent,
    CrudComponent,
    TemplateDrivenFormComponent
  ]
})
export class LessonFourListBooksModule {
}
