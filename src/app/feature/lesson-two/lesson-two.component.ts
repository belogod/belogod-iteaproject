import {Component} from '@angular/core';

@Component({
  selector: 'app-lesson-two',
  templateUrl: './lesson-two.component.html',
  styleUrls: ['./lesson-two.component.scss']
})
export class LessonTwoComponent {
  public answerComputer = '';
  public yourAnswer = '';
  public yourResult = '';
  public title = 'Rock Paper Scissors';
  public stage = '1';
  public imgResult = '';

  public rock = 'камень';
  public paper = 'бумага';
  public scissors = 'ножницы';

  public youLose = 'Вы проиграли';
  public youWon = 'Вы победили';
  public draw = 'Ничья';

  constructor() {
  }

  playGame(answer: string): any {
    const computerChoice = Math.random();
    this.yourAnswer = answer;

    if (computerChoice < 0.34) {
      this.answerComputer = this.rock;
      if (answer === this.rock) {
        this.yourResult = this.draw;
        return this.imgResult = 'assets/img/game-draw.jpg';
      }
      if (answer === this.scissors) {
        this.yourResult = this.youLose;
        return this.imgResult = 'assets/img/game-over.jpg';
      }
      if (answer === this.paper) {
        this.yourResult = this.youWon
        return this.imgResult = 'assets/img/game-win.jpg';
      }
    } else if (computerChoice <= 0.67) {
      this.answerComputer = this.paper;
      if (answer === this.rock) {
        this.yourResult = this.youLose;
        return this.imgResult = 'assets/img/game-over.jpg';
      }
      if (answer === this.scissors) {
        this.yourResult = this.youWon
        return this.imgResult = 'assets/img/game-win.jpg';
      }
      if (answer === this.paper) {
        this.yourResult = this.draw;
        return this.imgResult = 'assets/img/game-draw.jpg';
      }
    } else {
      this.answerComputer = this.scissors;
      if (answer === this.rock) {
        this.yourResult = this.youWon
        return this.imgResult = 'assets/img/game-win.jpg';
      }
      if (answer === this.scissors) {
        this.yourResult = this.draw;
        return this.imgResult = 'assets/img/game-draw.jpg';
      }
      if (answer === this.paper) {
        this.yourResult = this.youLose;
        return this.imgResult = 'assets/img/game-over.jpg';
      }
    }
  }

  changeRound(st: string) {
    this.stage = st;
  }

  translateImg(img: string): any {
    if (img === this.rock) {
      return 'assets/img/1.png';
    }
    if (img === this.scissors) {
      return 'assets/img/2.png';
    }
    if (img === this.paper) {
      return 'assets/img/3.png';
    }
  }

}
