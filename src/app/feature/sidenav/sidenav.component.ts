import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(
    public router: Router
  ) {}

  ngOnInit(): void {
  }

  routerToMove(param: any) {
    console.log(this)
    this.router.navigate([param]);

  }
}
