import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class LessonFourListBooksService {
  public url: any = {
    main: 'assets/json/books.json',
    weather: 'https://community-open-weather-map.p.rapidapi.com/weather?',
    weatherWeek: 'https://community-open-weather-map.p.rapidapi.com/forecast/daily?q=Kyiv%2cUA',
  }

  public data: any;
  public weatherData: any;
  public weekWeatherData: any;
  public httpOptions = {
    headers: new HttpHeaders({
      'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
      'x-rapidapi-key': 'bdc0162670msh434d6f318fbeee0p1cd2aejsn988fed57ed14'
    })
  };

  constructor(
    public http: HttpClient
  ) {
  }

  getBooks(): any {
    return this.http.get(this.url.main)
      .subscribe(
        (data: any) => {
          this.data = data.content;
        });
  }

  getWeather(filterValue: string, units: string): any {
    if (units) {
      units = '&units=' + units;
    }
    if (filterValue) {
      filterValue = '&q=' + filterValue + '%2CUA';
    }

    return this.http.get(this.url.weather + filterValue + '&lang=ru' + units + '&mode=', this.httpOptions)
      .subscribe(
        (data: any) => {
          this.weatherData = data;
        });
  }

  getWeatherWeek(): any {
    return this.http.get(this.url.weatherWeek + '&units=metric&cnt=7' + '&lang=ru', this.httpOptions)
      .subscribe(
        (data: any) => {
          this.weekWeatherData = data.list;
          console.log('weatherData', this.weekWeatherData)
        });
  }

}
