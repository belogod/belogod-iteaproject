import {Component} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {LessonFourListBooksService} from "../lesson-four-list-books.service";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['../crud/crud.component.scss']
})
export class TemplateDrivenFormComponent {
  public model: any = {};

  constructor(
    public dialogRef: MatDialogRef<TemplateDrivenFormComponent>,
    public lessonFourListBooksService: LessonFourListBooksService
  ) {
  }

  onSubmit() {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model, null, 4));
  }

  exit() {
    this.dialogRef.close();
  }

  yes() {
    this.dialogRef.close(this.model);
  }

  resetModal():void {
    this.model = {};
    console.log(this.model)
  }
}
