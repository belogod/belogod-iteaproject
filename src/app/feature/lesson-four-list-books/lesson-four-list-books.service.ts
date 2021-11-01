import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class LessonFourListBooksService {
  public url: any = {
    main: 'assets/json/books.json',
  }

  public data: any;

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

  putData(editForm: any) {
    return this.http.put(this.url.main, editForm);
  }

}
