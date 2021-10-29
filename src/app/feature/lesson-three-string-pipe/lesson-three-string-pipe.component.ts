import {Component, Output} from '@angular/core';

@Component({
  selector: 'app-lesson-three-string-pipe',
  templateUrl: './lesson-three-string-pipe.component.html',
  styleUrls: ['./lesson-three-string-pipe.component.css']
})

export class LessonThreeStringPipeComponent {

  public title = 'Lesson Three - String Pipe';

  public custDir = '';
  public revStrPipe = 'kitty';

  public revStr = 'qwerty';
  public revInt = 3;

  @Output() allNumbers: string = 'all';
  @Output() positiveNumbers: string = 'positive';

}
