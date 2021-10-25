import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from "../../shared/shared.module";
import {ToolbarModule} from "../toolbar/toolbar.module";
import {DashboardComponent} from "./dashboard.component";

const dashboardRoutes: Routes = [
  {path: '', component: DashboardComponent},
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ToolbarModule,
    RouterModule.forChild(dashboardRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule {
}
