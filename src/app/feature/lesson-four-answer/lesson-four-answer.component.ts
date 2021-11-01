import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-four-answer',
  templateUrl: './lesson-four-answer.component.html',
  styleUrls: ['../../../assets/styles/answer-to-the-lesson.scss']
})
export class LessonFourAnswerComponent implements OnInit {

  public title = 'Answers to the four lesson';

  constructor() { }

  ngOnInit(): void {
  }

}
