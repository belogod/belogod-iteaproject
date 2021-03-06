import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {LessonFourListBooksService} from "../lesson-four-list-books/lesson-four-list-books.service";
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-final-lesson-weather',
  templateUrl: './final-lesson-weather.component.html',
  styleUrls: ['./final-lesson-weather.component.scss']
})
export class FinalLessonWeatherComponent implements OnInit, DoCheck {

  public title: string = 'Weather';

  public search: string = 'Kyiv';
  public visible: boolean = false;
  public count: Array<string> = [];
  public units: string = 'metric';

  public allWeather: any;
  public weekAllWeather: any;
  public date = new Date();

  @ViewChild(MatMenuTrigger, {static: false}) menuTrigger: MatMenuTrigger;

  constructor(
    public lessonFourListBooksService: LessonFourListBooksService
  ) {
    this.getWeatherWeek();
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.weekAllWeather = this.lessonFourListBooksService.weekWeatherData
    this.allWeather = this.lessonFourListBooksService.weatherData;
  }

  getWeatherWeek(): void {
    this.lessonFourListBooksService.getWeatherWeek();
  }

  someMethod() {
    this.menuTrigger.openMenu();
  }

  applyFilter(filterValue: string) {
    this.count = [];

    if (this.units || this.units !== '') {
      this.count.push('1');
    }

    this.visible = this.count.length > 0;

    this.menuTrigger.closeMenu();

    filterValue = filterValue.replace('#', '%23');

    this.lessonFourListBooksService.getWeather(
      filterValue,
      this.units,
    );

  }

  getIconUrl(img: string) {
    return 'http://openweathermap.org/img/w/' + img + '.png'
  }
}
