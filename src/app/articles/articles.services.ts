import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Article} from '../model/article';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class ArticlesService {
  private readonly size = 10;

  constructor(private http: HttpClient) { }

  getArticles(): Observable<Article[]> {
    return this.http.get('http://localhost:9600/articles?size=' + this.size)
      .map(data => {
        return data as Array<Article>;
    });
  }

  getFeaturedArticles(): Observable<Article[]> {
    return this.http.get('http://localhost:9600/articles/featured?size=' + this.size)
      .map(data => {
        return data as Array<Article>;
      });
  }
}
