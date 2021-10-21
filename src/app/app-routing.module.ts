import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

export const ROUTES: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}