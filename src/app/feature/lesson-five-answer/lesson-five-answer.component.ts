import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-five-answer',
  templateUrl: './lesson-five-answer.component.html',
  styleUrls: ['../../../assets/styles/answer-to-the-lesson.scss']
})
export class LessonFiveAnswerComponent implements OnInit {

  public title = 'Answers to the five lesson';

  constructor() { }

  ngOnInit(): void {
  }

}
