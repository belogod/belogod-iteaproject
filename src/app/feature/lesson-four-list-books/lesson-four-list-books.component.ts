import {Component, OnInit} from '@angular/core';
import {LessonFourListBooksService} from "./lesson-four-list-books.service";
import {MatDialog} from "@angular/material/dialog";
import {CrudComponent} from "./crud/crud.component";
import {TemplateDrivenFormComponent} from "./template-driven-form/template-driven-form.component";
import {ComponentType} from "@angular/cdk/overlay";
import {Subscription} from "rxjs";

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
  public tempDrivFormComp: any;
  public subscriptions: Subscription = new Subscription();

  displayedColumns: string[] = [
    'radio',
    'systemRole'
  ];

  constructor(
    public lessonFourListBooksService: LessonFourListBooksService,
    public dialog: MatDialog
  ) {
    this.dialogEditCard = CrudComponent;
    this.tempDrivFormComp = TemplateDrivenFormComponent;
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
    for (let i of this.lessonFourListBooksService.data) {
      if (i.id === data.id) {
        delete i.id;
        console.log(i)
      }
    }
  }

  openDialogAdd(): void {
    const dialogRef = this.dialog.open(this.tempDrivFormComp, {
      disableClose: true
    });

    const sub = dialogRef.afterClosed().subscribe(data => {
        console.log('data', data)
      this.lessonFourListBooksService.data.push(data);
      // this.getData();
      console.log('111', this.lessonFourListBooksService.data)
    });
    this.subscriptions.add(sub);

  }

}
