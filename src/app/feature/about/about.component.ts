import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['../../../assets/styles/answer-to-the-lesson.scss']
})
export class AboutComponent implements OnInit {

  public title: string = 'About';

  constructor() {
  }

  ngOnInit(): void {
  }

}
