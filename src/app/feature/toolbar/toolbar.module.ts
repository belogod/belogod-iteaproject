import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {ToolbarComponent} from "./toolbar.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
  ],
  exports: [
    RouterModule,
    ToolbarComponent
  ],
  declarations: [
    ToolbarComponent
  ]
})
export class ToolbarModule {
}
