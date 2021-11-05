import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {ToolbarModule} from "../toolbar/toolbar.module";
import {AboutComponent} from "./about.component";

const aboutRoutes: Routes = [
  {path: '', component: AboutComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ToolbarModule,
    RouterModule.forChild(aboutRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    AboutComponent
  ]
})
export class AboutModule {
}
