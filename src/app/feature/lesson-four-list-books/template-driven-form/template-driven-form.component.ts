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

  exit() {
    this.dialogRef.close({data: {close: 'exit'}});
  }

  yes() {
    this.dialogRef.close({data: {close: 'ok', data: this.model}});
  }

  resetModal(): void {
    this.model = {};
  }
}
