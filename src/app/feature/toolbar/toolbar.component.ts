import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import {InheritanceComponent} from "../../core/inheritance.component";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent extends InheritanceComponent {

  @Input() title: string;

  constructor(
    public router: Router
  ) {
    super(router);
  }

}
