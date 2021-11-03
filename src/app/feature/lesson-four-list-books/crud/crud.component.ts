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
      title: [this.componentData.title, [
        minLen,
        Validators.required
      ]],
      author: [this.componentData.author,[
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(60)
      ]],
      year: [this.componentData.year, [
        Validators.required,
        Validators.minLength(7),
        Validators.maxLength(10)
      ]],
      stars: [this.componentData.stars, [
        Validators.min(1),
        Validators.max(5),
        Validators.required
      ]],
      description: [this.componentData.descriptin, [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(254)
      ]],
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
