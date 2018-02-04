import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {Category} from '../model/category';

@Injectable()
export class MenuServices {
  private readonly size = 10;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get('http://localhost:9600/categories?size=' + this.size)
      .map(data => {
        return data as Array<Category>;
      });
  }
}
