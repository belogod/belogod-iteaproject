import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lesson-one',
  templateUrl: './lesson-one.component.html',
  styleUrls: ['./lesson-one.component.scss']
})
export class LessonOneComponent implements OnInit {

  public title = 'One Lesson';

  constructor() {
  }

  ngOnInit(): void {
  }

}
