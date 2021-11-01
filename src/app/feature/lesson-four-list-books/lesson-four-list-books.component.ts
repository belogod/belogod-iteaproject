import {Component, OnInit} from '@angular/core';
import {LessonFourListBooksService} from "./lesson-four-list-books.service";
import {MatDialog} from "@angular/material/dialog";
import {CrudComponent} from "./crud/crud.component";

@Component({
  selector: 'app-lesson-four-list-books',
  templateUrl: './lesson-four-list-books.component.html',
  styleUrls: ['./lesson-four-list-books.component.scss']
})
export class LessonFourListBooksComponent implements OnInit {

  public title = 'Lesson Four List Books';
  public dialogEditCard: any;
  public editStar: boolean = false;
  public plusStar: number;

  displayedColumns: string[] = [
    'radio',
    'systemRole'
  ];

  constructor(
    public lessonFourListBooksService: LessonFourListBooksService,
    public dialog: MatDialog
  ) {
    this.dialogEditCard = CrudComponent;
    this.getData();
  }

  ngOnInit(): void {
  }

  getData() {
    this.lessonFourListBooksService.getBooks();
  }

  _openDialogCrudCard(data: void, behavior: string) {
    const component = this.dialogEditCard;
    const dialogRef = this.dialog.open(component, {
      data: {behavior, data},
      disableClose: true
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'ok' && behavior === 'edit') {
      }
    });
  }

  openDialogEdit(data: any) {
    for (const i of this.lessonFourListBooksService.data) {
      if (i.id === data.id) {
        this.editStar = true;
        this.plusStar = +i.stars++;
      }
    }

  }

  openDialogDelete(data: any) {
    for (const i of this.lessonFourListBooksService.data) {
      if (i.id === data.id) {
       delete i.stars;
      }
    }
  }

}
