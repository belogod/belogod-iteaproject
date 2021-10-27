import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-three-answer',
  templateUrl: './lesson-three-answer.component.html',
  styleUrls: ['../../../assets/styles/answer-to-the-lesson.scss']
})
export class LessonThreeAnswerComponent implements OnInit {

  public title = 'Answers to the third lesson';

  constructor() { }

  ngOnInit(): void {
  }

}
