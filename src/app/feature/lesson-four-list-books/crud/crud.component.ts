import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LessonFourListBooksService} from "../lesson-four-list-books.service";
import {minLen} from "./validators";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent {

  public errorTitle: string = 'This error is work'
  public toSend: any;
  public editForm: FormGroup;
  public componentData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CrudComponent>,
    public fb: FormBuilder,
    public lessonFourListBooksService: LessonFourListBooksService,
  ) {
    this.componentData = this.data.data;
    this.editForm = fb.group({
      id: [this.componentData.id],
      title: [this.componentData.title, [minLen, Validators.required]],
      author: [this.componentData.author],
      year: [this.componentData.year],
      stars: [this.componentData.stars, [Validators.min(4), Validators.max(9)]],
      description: [this.componentData.descriptin],
    });
  }

  exit() {
    this.dialogRef.close();
  }

  putData(toSend: any) {
    const sub = this.lessonFourListBooksService.putData(toSend)
      .subscribe(
        () => {
          this.dialogRef.close('ok');
        })
  }
}
