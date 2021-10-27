import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-three-answer',
  templateUrl: './lesson-three-answer.component.html',
  styleUrls: ['./lesson-three-answer.component.css']
})
export class LessonThreeAnswerComponent implements OnInit {

  public title = 'Answers to the third lesson';

  constructor() { }

  ngOnInit(): void {
  }

}
