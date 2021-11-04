import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class LessonFourListBooksService {
  public url: any = {
    main: 'assets/json/books.json',
    weather: 'https://community-open-weather-map.p.rapidapi.com/weather?',
    weatherMonth: 'https://community-open-weather-map.p.rapidapi.com/climate/month',
    qwer: 'https://ip-geo-location.p.rapidapi.com/ip/23.123.12.11'
  }

  public data: any;
  public weatherData: any;
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
          console.log('1111', data)
        });
  }

  getWeatherMonth(): any {
    return this.http.get(this.url.qwer + '?format: \'json\'', this.httpOptions)
      .subscribe(
        (data: any) => {
          this.weatherData = data;
          console.log('weatherData', data)
        });
  }

  putData(editForm: any) {
    return this.http.put(this.url.main, editForm);
  }

}
