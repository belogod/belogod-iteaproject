import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'new';

  constructor(
    public router: Router
  ) {
  }

  ngOnInit() {

  }

  routerToMove(param: any) {
    console.log(this)
    this.router.navigate([param]);

  }
}
