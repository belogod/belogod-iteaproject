import {Component, DoCheck, OnInit, ViewChild} from '@angular/core';
import {LessonFourListBooksService} from "../lesson-four-list-books/lesson-four-list-books.service";
import {MatMenuTrigger} from "@angular/material/menu";

@Component({
  selector: 'app-historical-weather',
  templateUrl: './historical-weather.component.html',
  styleUrls: ['../final-lesson-weather/final-lesson-weather.component.scss']
})
export class HistoricalWeatherComponent implements DoCheck {

  public title: string = 'Historical Weather';

  public search: string = 'Kyiv';
  public visible: boolean = false;
  public count: Array<string> = [];
  public units: string = 'metric';

  public historicalWeather: any;

  @ViewChild(MatMenuTrigger, {static: false}) menuTrigger: MatMenuTrigger;

  constructor(
    public lessonFourListBooksService: LessonFourListBooksService
  ) {
    this.lessonFourListBooksService.getHistoricalWeather();

  }

  ngDoCheck() {
    this.historicalWeather = this.lessonFourListBooksService.historicalWeatherData;
  }

  someMethod() {
    this.menuTrigger.openMenu();
  }

  getIconUrl(img: string) {
    return 'http://openweathermap.org/img/w/' + img + '.png'
  }

}
