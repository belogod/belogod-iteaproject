import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input() title: string;

  constructor(
    public router: Router
  ) {
  }

  ngOnInit(): void {
  }

  routerToMove(param: any) {
    console.log(this)
    this.router.navigate([param]);

  }
}
