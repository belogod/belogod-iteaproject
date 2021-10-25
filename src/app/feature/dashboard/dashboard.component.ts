import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {InheritanceComponent} from "../../core/inheritance.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends InheritanceComponent {
  public title = 'Dashboard';

  constructor(
    public router: Router
  ) {
    super(router);
  }

}
