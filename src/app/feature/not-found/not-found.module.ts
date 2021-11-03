import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {NotFoundComponent} from "./not-found.component";

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
    ],
    declarations: [NotFoundComponent]
})
export class NotFoundModule {
}
