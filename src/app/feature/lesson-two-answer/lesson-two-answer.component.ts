import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lesson-two-answer',
  templateUrl: './lesson-two-answer.component.html',
  styleUrls: ['../../../assets/styles/answer-to-the-lesson.scss']
})
export class LessonTwoAnswerComponent implements OnInit {

  public title = 'Answers to the second lesson';

  constructor() {
  }

  ngOnInit(): void {
  }

}
