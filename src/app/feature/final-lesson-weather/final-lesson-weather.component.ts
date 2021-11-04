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
  public roundTemp: number;
  public feels_like: number;
  public temp_max: number;
  public temp_min: number;

  public allWeather: any;
  public date = new Date();

  @ViewChild(MatMenuTrigger, {static: false}) menuTrigger: MatMenuTrigger;

  constructor(
    public lessonFourListBooksService: LessonFourListBooksService
  ) {
    // this.getWeather();
    // this.getWeatherMonth();
  }

  ngOnInit(): void {
  }

  ngDoCheck() {
    this.allWeather = this.lessonFourListBooksService.weatherData;
    // this.roundTemp = Math.round(this.allWeather.main.temp);
    // this.feels_like = Math.round(this.allWeather.main.feels_like);
    // this.temp_max = Math.round(this.allWeather.main.temp_max);
    // this.temp_min = Math.round(this.allWeather.main.temp_min);
    this.roundTemp = Math.round(15.54);
    this.feels_like = Math.round(15.34);
    this.temp_max = Math.round(12.54);
    this.temp_min = Math.round(10.54);
  }

  // getWeather(): void {
  //   this.lessonFourListBooksService.getWeather();
  // }

  getWeatherMonth(): void {
    this.lessonFourListBooksService.getWeatherMonth();
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
