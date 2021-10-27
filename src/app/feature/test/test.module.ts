import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {ToolbarModule} from "../toolbar/toolbar.module";
import {TestComponent} from "./test.component";

const testRoutes: Routes = [
  {path: '', component: TestComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ToolbarModule,
    RouterModule.forChild(testRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    TestComponent
  ]
})
export class TestModule {
}
