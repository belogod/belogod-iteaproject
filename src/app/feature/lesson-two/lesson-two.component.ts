import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lesson-two',
  templateUrl: './lesson-two.component.html',
  styleUrls: ['./lesson-two.component.scss']
})
export class LessonTwoComponent implements OnInit {
  public answerComputer = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  playGame() {
    const computerChoice = Math.random();

    if (computerChoice < 0.34) {
      this.answerComputer = 'камень';
    } else if (computerChoice <= 0.67) {
      this.answerComputer = 'бумага';
    } else {
      this.answerComputer = 'ножницы';
    }
    console.log('this.answerComputer', this.answerComputer)
  }
}
