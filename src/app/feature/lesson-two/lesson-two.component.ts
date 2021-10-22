import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lesson-two',
  templateUrl: './lesson-two.component.html',
  styleUrls: ['./lesson-two.component.scss']
})
export class LessonTwoComponent implements OnInit {
  public answerComputer = '';
  public yourResult = '';
  public title = 'Two Lesson';
  public stage = '1';

  constructor() {
  }

  ngOnInit(): void {
  }

  playGame(answer: string) {
    const computerChoice = Math.random();

    if (computerChoice < 0.34) {
      this.answerComputer = 'камень';
      if (answer === 'камень') {
        this.yourResult = 'Ничья'
      }
      if (answer === 'ножницы') {
        this.yourResult = 'Вы проиграли'
      }
      if (answer === 'бумага') {
        this.yourResult = 'Вы победили'
      }
    } else if (computerChoice <= 0.67) {
      this.answerComputer = 'бумага';
      if (answer === 'камень') {
        this.yourResult = 'Вы проиграли'
      }
      if (answer === 'ножницы') {
        this.yourResult = 'Вы победили'
      }
      if (answer === 'бумага') {
        this.yourResult = 'Ничья'
      }
    } else {
      this.answerComputer = 'ножницы';
      if (answer === 'камень') {
        this.yourResult = 'Вы победили'
      }
      if (answer === 'ножницы') {
        this.yourResult = 'Ничья'
      }
      if (answer === 'бумага') {
        this.yourResult = 'Вы проиграли'
      }
    }

    console.log('this.answerComputer', this.answerComputer)
  }

  changeRound(st: string) {
    this.stage = st;
  }
}
