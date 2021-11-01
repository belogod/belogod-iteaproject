import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup} from "@angular/forms";
import {LessonFourListBooksService} from "../lesson-four-list-books.service";

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.scss']
})
export class CrudComponent implements OnInit {

  public toSend: any;
  public editForm: FormGroup;
  public behavior: string;
  public componentData: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CrudComponent>,
    public lessonFourListBooksService: LessonFourListBooksService,
  ) {
    this.editForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl(),
      author: new FormControl(),
      year: new FormControl(),
      stars: new FormControl(),
      description: new FormControl(),
    });

  }

  ngOnInit(): void {
    this.componentData = this.data.data;
    console.log('data', this.data);
    this.editForm.setValue({
      id: this.componentData.id,
      title: this.componentData.title,
      author: this.componentData.author,
      year: this.componentData.year,
      stars: this.componentData.stars,
      description: this.componentData.description,
    });
  }

  exit() {
    this.dialogRef.close();
  }

  yes() {
    this.toSend = this.editForm.value;
    // this.putData(this.toSend);
  }

  putData(toSend: any) {
    const sub = this.lessonFourListBooksService.putData(toSend)
      .subscribe(
        () => {
          this.dialogRef.close('ok');
        })
  }
}
