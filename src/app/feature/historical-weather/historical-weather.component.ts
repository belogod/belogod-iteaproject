import {Component, DoCheck} from '@angular/core';
import {LessonFourListBooksService} from "../lesson-four-list-books/lesson-four-list-books.service";

@Component({
  selector: 'app-historical-weather',
  templateUrl: './historical-weather.component.html',
  styleUrls: ['./historical-weather.component.scss']
})
export class HistoricalWeatherComponent implements DoCheck {

  public title: string = 'Historical Weather';

  public historicalWeather: any;


  constructor(
    public lessonFourListBooksService: LessonFourListBooksService
  ) {
    this.lessonFourListBooksService.getHistoricalWeather();

  }

  ngDoCheck() {
    this.historicalWeather = this.lessonFourListBooksService.historicalWeatherData;
  }

  getIconUrl(img: string) {
    return 'http://openweathermap.org/img/w/' + img + '.png'
  }

}
