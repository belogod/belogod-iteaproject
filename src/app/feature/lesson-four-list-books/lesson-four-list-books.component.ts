import { Component, OnInit } from '@angular/core';
import {LessonFourListBooksService} from "./lesson-four-list-books.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-lesson-four-list-books',
  templateUrl: './lesson-four-list-books.component.html',
  styleUrls: ['./lesson-four-list-books.component.scss']
})
export class LessonFourListBooksComponent implements OnInit {

  public title = 'Lesson Four List Books';

  displayedColumns: string[] = [
    'radio',
    'systemRole'
  ];

  constructor(
    public lessonFourListBooksService: LessonFourListBooksService,
    public dialog: MatDialog
  ) {
    this.getData();
  }

  ngOnInit(): void {
  }

  getData() {
    this.lessonFourListBooksService.getBooks();
  }

  _openDialogCrudCard(item: void, view: string) {
    console.log('item', item)
  }
}
