import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lesson-one',
  templateUrl: './lesson-one.component.html',
  styleUrls: ['../../../assets/styles/answer-to-the-lesson.scss']
})

export class LessonOneComponent implements OnInit {

  public title = 'One Lesson';

  constructor() {
  }

  ngOnInit(): void {
  }

}
